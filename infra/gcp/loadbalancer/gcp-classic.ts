import * as pulumi from '@pulumi/pulumi';
import * as random from '@pulumi/random';
import * as gcp from '@pulumi/gcp';

const networkTier = 'STANDARD';
const tokenParam = 'token';

export type Params = {
  name: string;
  region: string;
  domains: string[];
  proxy: pulumi.Output<string>;
  resumePath: string;
  startPath: string;
};

export class GCPClassic {
  params: Params;
  constructor(params: Params) {
    this.params = params;
  }

  deploy() {
    const rand = new random.RandomString(
      `${this.params.name}-resume-secret-token`,
      {
        length: 8,
        special: false,
      }
    );

    const ipaddress = new gcp.compute.Address(this.params.name, {
      name: `${this.params.name}`,
      networkTier: networkTier,
      addressType: 'EXTERNAL',
    });

    const eg = new gcp.compute.RegionNetworkEndpointGroup(this.params.name, {
      name: `${this.params.name}`,
      networkEndpointType: 'SERVERLESS',
      region: this.params.region,
      cloudRun: {
        service: this.params.proxy,
      },
    });

    const service = new gcp.compute.BackendService(this.params.name, {
      name: `${this.params.name}`,
      enableCdn: false,
      connectionDrainingTimeoutSec: 10,
      backends: [
        {
          group: eg.id,
        },
      ],
    });

    const httpsUmap = new gcp.compute.URLMap(`${this.params.name}-https`, {
      name: `${this.params.name}-https`,
      defaultUrlRedirect: {
        stripQuery: true,
        httpsRedirect: true,
        pathRedirect: this.params.startPath,
      },
      hostRules: [
        {
          hosts: this.params.domains,
          pathMatcher: 'resume',
        },
      ],

      pathMatchers: [
        {
          name: 'resume',
          defaultUrlRedirect: {
            stripQuery: true,
            httpsRedirect: true,
            pathRedirect: this.params.startPath,
          },
          routeRules: [
            {
              priority: 1,
              service: service.selfLink,
              matchRules: [
                {
                  fullPathMatch: this.params.resumePath,
                  queryParameterMatches: [
                    {
                      name: tokenParam,
                      exactMatch: rand.result,
                    },
                  ],
                },
              ],
            },
            {
              priority: 2,
              service: service.selfLink,
              matchRules: [
                {
                  headerMatches: [
                    {
                      headerName: 'Referer',
                      suffixMatch: rand.result,
                    },
                  ],
                },
              ],
            },
            {
              priority: 3,
              service: service.selfLink,
              matchRules: [
                {
                  fullPathMatch: this.params.startPath,
                },
              ],
            },
          ],
        },
      ],
    });

    const httpUmap = new gcp.compute.URLMap(`${this.params.name}-http`, {
      name: `${this.params.name}http`,
      defaultUrlRedirect: {
        stripQuery: false,
        httpsRedirect: true,
      },
    });

    const dnsAuth: pulumi.Output<string>[] = [];

    this.params.domains.forEach((domain) => {
      const a = new gcp.certificatemanager.DnsAuthorization(
        this.params.name,
        {
          domain: domain,
        }
      );
      dnsAuth.push(a.id);
    });

    const certificate = new gcp.certificatemanager.Certificate(
      this.params.name,
      {
        managed: {
          domains: this.params.domains,
          dnsAuthorizations: dnsAuth,
        },
      }
    );

    const httpsTarget = new gcp.compute.TargetHttpsProxy(
      `${this.params.name}-https`,
      {
        name: `${this.params.name}-https`,
        urlMap: httpsUmap.selfLink,
        sslCertificates: [certificate.id],
      },
      { dependsOn: [httpsUmap] }
    );

    const httpTarget = new gcp.compute.TargetHttpProxy(
      `${this.params.name}-http`,
      {
        name: `${this.params.name}-http`,
        urlMap: httpUmap.selfLink,
      },
      { dependsOn: [httpUmap] }
    );

    new gcp.compute.ForwardingRule(`${this.params.name}-https`, {
      name: `${this.params.name}-https`,
      networkTier: networkTier,
      target: httpsTarget.selfLink,
      ipAddress: ipaddress.address,
      portRange: '443',
      loadBalancingScheme: 'EXTERNAL',
    });

    new gcp.compute.ForwardingRule(`${this.params.name}-http`, {
      name: `${this.params.name}-http`,
      networkTier: networkTier,
      target: httpTarget.selfLink,
      ipAddress: ipaddress.address,
      portRange: '80',
      loadBalancingScheme: 'EXTERNAL',
    });

    let urls = new Array<pulumi.Output<string>>();
    this.params.domains.forEach((d) =>
      urls.push(
        pulumi.interpolate`https://${d}${this.params.resumePath}?${tokenParam}=${rand.result}` as pulumi.Output<string>
      )
    );

    return urls;
  }
}
