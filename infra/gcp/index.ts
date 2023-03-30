import * as pulumi from '@pulumi/pulumi';
import * as storage from './storage';
import * as loadbalancer from './loadbalancer';
import * as proxy from './gcs-proxy';
import * as dns from './dns';
import * as frontend from './frontend';

const config = new pulumi.Config('gcp');
const project = config.require('project');
const region = config.require('region');

export class Resume {
  domains: string[];
  gcs_proxy_image: string;
  readonly project: string;
  readonly region: string;

  constructor(domains: string[], gcs_proxy: string) {
    this.domains = domains;
    this.gcs_proxy_image = gcs_proxy;
    this.project = project;
    this.region = region;
  }
  Deploy() {
    const bucket = storage.Deploy(`${this.project}`, this.region);

    const proxyName = proxy.Deploy(
      this.project,
      this.region,
      this.gcs_proxy_image
    );

    const { lb, urls } = loadbalancer.Deploy(
      this.project,
      this.region,
      this.domains,
      proxyName
    );

    dns.Deploy(
      new Map(
        this.domains.map((d) => [d, lb.get('ip') as pulumi.Output<string>])
      )
    );

    frontend.Deploy(bucket);

    return urls;
  }
}
