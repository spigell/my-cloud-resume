// Discription: This file contains automations after pulumi operations:
// - purge Cloudflare cache for files that was been updated in GCS/S3.
import {
  LocalProgramArgs,
  LocalWorkspace,
  EngineEvent,
} from '@pulumi/pulumi/automation';
import * as path from 'path';
import cloudflare from 'cloudflare';
import { Domain, CFConfig } from './gcp';

declare var process: {
  env: {
    STACK_NAME: string;
    DRY_RUN: string;
  };
  exit: (code?: number) => void;
};

// Custom logger for better UX
const log = (function () {
  const prefix = 'pulumi-automation: ';
  return Function.prototype.bind.call(console.log, console, prefix);
})();

const stackName = process.env.STACK_NAME;
const dry = process.env.DRY_RUN;
const cachedList: string[] = [];
let cfDomains: CFConfig[] = [];
// Additional cloud providers will be added in future
const cloudProviders: string[] = ['gcp'];

async function main() {
  // Create a workspace with pulumi unattended login using an inline pulumi program
  const args: LocalProgramArgs = {
    stackName: stackName,
    workDir: '.',
  };

  const stack = await LocalWorkspace.selectStack(args);
  const cfg = await stack.getAllConfig();

  const decoded = JSON.parse(cfg['my-cloud-resume:resume'].value);

  // Iterate over cloudProviders and get info from pulumi config
  cloudProviders.forEach((provider: string) => {
    const cf = decoded[provider].domains.filter(
      (domain: Domain) => domain.type === 'cloudflare'
    );
    const cfg = cf.map((domain: Domain) => domain.config);
    cfDomains.push(cfg);
  });
  cfDomains = cfDomains.flat();

  // Update the pulumi program on the stack
  log('refreshing stack...');
  await stack.refresh({ onOutput: console.info });
  log('refresh complete');

  // Check if replace operation is needed
  if (dry === 'true') {
    await stack.preview({
      diff: true,
      onEvent: (event) => processEvent(event.resourcePreEvent),
      onOutput: console.info,
    });
    if (cachedList.length > 0) {
      log(`CF cache for list of files for purging: ${cachedList}`);
    }
    log(`exiting since dry run is enabled`);
    return;
  }

  await stack.up({
    onEvent: (event) => processEvent(event.resOutputsEvent),
    diff: true,
    onOutput: console.info,
  });
  if (cachedList.length > 0) {
    log(`will purge CF cache for list of files: ${cachedList}`);
    purgeCFFiles(cfDomains, cachedList);
  }
}

function processEvent(event: EngineEvent['resourcePreEvent']) {
  const trackedOperations = ['create', 'replace', 'delete'];
  if (event) {
    switch (true) {
      case event.metadata.type === 'gcp:storage/bucketObject:BucketObject' &&
        trackedOperations.includes(event.metadata.op):
        const data = event.metadata.new;
        if (data) {
          cachedList.push(path.basename(data.inputs['source']['path']));
        }
    }
  }
}

// purgeCFFiles accepts domains and list of files and purges them cache in Cloudflare
function purgeCFFiles(cf: CFConfig[], files: string[]) {
  const filesToPurge: string[] = [];
  cf.forEach((cfg) => {
    const c = new cloudflare({
      token: cfg.token,
    });
    files.forEach((file) => {
      filesToPurge.push(`https://${cfg.record}/${file}`);
    });
    log(`puring cache for files: ${filesToPurge}`);
    c.zones.purgeCache(cfg.zoneId, {
      files: filesToPurge,
    });
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
