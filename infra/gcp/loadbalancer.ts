import * as pulumi from '@pulumi/pulumi';
import * as random from '@pulumi/random';
import * as gcp from '@pulumi/gcp';

const networkTier = 'STANDARD';
const resumePath = '/resume.html';
const startPath = '/start.html';
const tokenParam = 'token';

export function Deploy(
  name: string,
  region: string,
  domains: string[],
  proxy: pulumi.Output<string>
) {
  const rand = new random.RandomString(`${name}-resume-secret-token`, {
    length: 8,
    special: false,
  });

  const ipaddress = new gcp.compute.Address(name, {
    name: `${name}`,
    networkTier: networkTier,
    addressType: 'EXTERNAL',
  });

  const eg = new gcp.compute.RegionNetworkEndpointGroup(name, {
    name: `${name}`,
    networkEndpointType: 'SERVERLESS',
    region: region,
    cloudRun: {
      service: proxy,
    },
  });

  const service = new gcp.compute.BackendService(name, {
    name: `${name}`,
    enableCdn: false,
    connectionDrainingTimeoutSec: 10,
    backends: [
      {
        group: eg.id,
      },
    ],
  });

  const httpsUmap = new gcp.compute.URLMap(`${name}-https`, {
    name: `${name}-https`,
    defaultUrlRedirect: {
      stripQuery: true,
      httpsRedirect: true,
      pathRedirect: startPath,
    },
    hostRules: [
      {
        hosts: domains,
        pathMatcher: 'resume',
      },
    ],

    pathMatchers: [
      {
        name: 'resume',
        defaultUrlRedirect: {
          stripQuery: true,
          httpsRedirect: true,
          pathRedirect: startPath,
        },
        routeRules: [
          {
            priority: 1,
            service: service.selfLink,
            matchRules: [
              {
                fullPathMatch: resumePath,
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
                fullPathMatch: startPath,
              },
            ],
          },
        ],
      },
    ],
  });

  const httpUmap = new gcp.compute.URLMap(`${name}-http`, {
    name: `${name}http`,
    defaultUrlRedirect: {
      stripQuery: false,
      httpsRedirect: true,
    },
  });

  const certificate = new gcp.compute.ManagedSslCertificate(name, {
    managed: {
      domains: domains,
    },
  });

  const httpsTarget = new gcp.compute.TargetHttpsProxy(
    `${name}-https`,
    {
      name: `${name}-https`,
      urlMap: httpsUmap.selfLink,
      sslCertificates: [certificate.id],
    },
    { dependsOn: [httpsUmap] }
  );

  const httpTarget = new gcp.compute.TargetHttpProxy(
    `${name}-http`,
    {
      name: `${name}-http`,
      urlMap: httpUmap.selfLink,
    },
    { dependsOn: [httpUmap] }
  );

  new gcp.compute.ForwardingRule(`${name}-https`, {
    name: `${name}-https`,
    networkTier: networkTier,
    target: httpsTarget.selfLink,
    ipAddress: ipaddress.address,
    portRange: '443',
    loadBalancingScheme: 'EXTERNAL',
  });

  new gcp.compute.ForwardingRule(`${name}-http`, {
    name: `${name}-http`,
    networkTier: networkTier,
    target: httpTarget.selfLink,
    ipAddress: ipaddress.address,
    portRange: '80',
    loadBalancingScheme: 'EXTERNAL',
  });

  const lb = new Map<string, pulumi.Output<string>>([
    ['ip', ipaddress.address],
  ]);

  let urls = new Array<pulumi.Output<string>>();
  domains.forEach((d) =>
    urls.push(
      pulumi.interpolate`https://${d}${resumePath}?${tokenParam}=${rand.result}` as pulumi.Output<string>
    )
  );

  return { lb, urls };
}
