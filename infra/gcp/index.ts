import * as pulumi from '@pulumi/pulumi';
import * as storage from './storage';
import * as loadbalancer from './loadbalancer';
import * as proxy from './gcs-proxy';
import * as frontend from './frontend';

const config = new pulumi.Config('gcp');
const project = config.require('project');
const region = config.require('region');

export type GCP = {
  loadbalancers: {
    primary: string;
    backup: string;
  };
  domains: string[];
  gcs: GCSConfig;
};

type GCSConfig = {
  proxy: {
    image: string;
  };
};

export class Resume {
  config: GCP;
  readonly project: string;
  readonly region: string;

  constructor(config: GCP) {
    this.config = config;
    this.project = project;
    this.region = region;
  }
  Deploy() {
    const bucket = storage.Deploy(`${this.project}`, this.region);

    const deployedProxy = proxy.Deploy(
      this.project,
      this.region,
      this.config.gcs.proxy.image
    );

    const lb = new loadbalancer.Loadbalancer();
    lb.setKind(this.config.loadbalancers.primary);

    const urls = lb.deploy(
      this.project,
      this.region,
      this.config.domains,
      deployedProxy
    );

    if (this.config.loadbalancers.backup) {
      const backupLb = new loadbalancer.Loadbalancer();
      backupLb.setKind(this.config.loadbalancers.backup);
      backupLb.deploy(
        this.project,
        this.region,
        this.config.domains,
        deployedProxy
      );
    }

    frontend.Deploy(bucket);

    return urls;
  }
}
