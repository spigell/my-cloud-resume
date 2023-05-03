import * as pulumi from '@pulumi/pulumi';
import * as storage from './storage';
import * as loadbalancer from './loadbalancer';
import * as proxy from './gcs-proxy';
import * as frontend from './frontend';
import { K8sTraefikConfig } from './loadbalancer/kubernetes-traefik';

const config = new pulumi.Config('gcp');
const project = config.require('project');
const region = config.require('region');

export type GCP = {
  loadbalancers: {
    config: LBConfig;
    primary: string;
    backup: string;
  };
  domains: Domain[];
  gcs: GCSConfig;
};

export type Domain = {
  type: string;
  config: CFConfig;
};

export type CFConfig = {
  record: string;
  zoneId: string;
  token: string;
};

type GCSConfig = {
  proxy: {
    image: string;
  };
};

export type LBConfig = {
  traefik: K8sTraefikConfig;
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
    const domains = this.config.domains.map((domain) => domain.config.record);
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
      domains,
      this.config.loadbalancers.config,
      deployedProxy
    );

    if (this.config.loadbalancers.backup) {
      const backupLb = new loadbalancer.Loadbalancer();
      backupLb.setKind(this.config.loadbalancers.backup);
      backupLb.deploy(
        this.project,
        this.region,
        domains,
        this.config.loadbalancers.config,
        deployedProxy
      );
    }

    frontend.Deploy(bucket);

    return urls;
  }
}
