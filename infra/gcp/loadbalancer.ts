import * as gcp from '@pulumi/gcp';
import { GCPClassic } from './loadbalancer/gcp-classic';
import { Traefik } from './loadbalancer/kubernetes-traefik';

const resumePath = '/resume.html';
const startPath = '/start.html';

export class Loadbalancer {
  kind: string = 'gcp/classic';
  constructor() {}

  setKind(kind: string) {
    this.kind = kind;
  }

  deploy(
    name: string,
    region: string,
    domains: string[],
    proxy: gcp.cloudrun.Service
  ) {
    switch (this.kind) {
      case 'kubernetes/traefik':
        const traefikParams = {
          name: name,
          domains: domains,
          proxy: proxy.statuses[0].url,
          resumePath: resumePath,
          startPath: startPath,
        };
        return new Traefik(traefikParams).deploy();
      case 'gcp/classic':
        const params = {
          name: name,
          region: region,
          domains: domains,
          proxy: proxy.name,
          resumePath: resumePath,
          startPath: startPath,
        };
        return new GCPClassic(params).deploy();
      default:
        throw new Error(`Unknown loadbalancer kind: ${this.kind}`);
    }
  }
}
