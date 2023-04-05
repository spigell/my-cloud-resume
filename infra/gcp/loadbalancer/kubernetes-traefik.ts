import * as traefik from '../../kubernetes/crd/generated/traefik';
import * as pulumi from '@pulumi/pulumi';
import * as kubernetes from '@pulumi/kubernetes';

export type Params = {
  name: string;
  domains: string[];
  proxy: pulumi.Output<string>;
  resumePath: string;
  startPath: string;
};

export class Traefik {
  params: Params;
  constructor(params: Params) {
    this.params = params;
  }
  deploy() {
    const svc = new kubernetes.core.v1.Service('gcs-proxy', {
      apiVersion: 'v1',
      kind: 'Service',
      metadata: {
        labels: {
          app: 'resume',
        },
        name: 'resume',
        namespace: this.params.name,
      },
      spec: {
        externalName: this.params.proxy.apply((proxy) =>
          proxy.slice('https://'.length)
        ),
        type: 'ExternalName',
      },
    });

    // Create a Traefik Middleware to rewrite Host header. Port Mapping can't be used for it
    new traefik.v1alpha1.Middleware('rewrite-host', {
      metadata: {
        name: 'rewrite-host',
        namespace: this.params.name,
      },
      spec: {
        headers: {
          customRequestHeaders: {
            Host: this.params.proxy.apply((proxy) =>
              proxy.slice('https://'.length)
            ),
          },
        },
      },
    });

    new traefik.v1alpha1.Middleware('redirect-to-start-page', {
      metadata: {
        name: 'redirect-to-start-page',
        namespace: this.params.name,
      },
      spec: {
        redirectRegex: {
          regex: '.*',
          replacement: pulumi.interpolate`https://${this.params.domains[0]}/start.html`,
          permanent: true,
        },
      },
    });

    const domainsRule = generateDomainsRule(this.params.domains);

    new traefik.v1alpha1.IngressRoute('ingress-route', {
      metadata: {
        name: 'ingress-route',
        namespace: this.params.name,
      },
      spec: {
        entryPoints: ['websecure'],
        routes: [
          {
            match:
              domainsRule + ' && (Path(`/resume.html`) || Path(`/start.html`))',
            kind: 'Rule',
            services: [
              {
                name: svc.metadata.name,
                port: 443,
              },
            ],
            middlewares: [
              {
                name: 'rewrite-host',
                namespace: this.params.name,
              },
            ],
          },
          {
            match: domainsRule + ' && HeadersRegexp(`Referer`, `^.+.html$`)',
            kind: 'Rule',
            services: [
              {
                name: svc.metadata.name,
                port: 443,
              },
            ],
            middlewares: [
              {
                name: 'rewrite-host',
                namespace: this.params.name,
              },
            ],
          },
          {
            match: domainsRule,
            kind: 'Rule',
            services: [
              {
                name: svc.metadata.name,
                port: 443,
              },
            ],
            middlewares: [
              {
                name: 'rewrite-host',
                namespace: this.params.name,
              },
              {
                name: 'redirect-to-start-page',
                namespace: this.params.name,
              },
            ],
          },
        ],
      },
    });
    const urls = new Array<pulumi.Output<string>>();
    this.params.domains.forEach((d) =>
      urls.push(
        pulumi.interpolate`https://${d}${this.params.resumePath}` as pulumi.Output<string>
      )
    );

    return urls;
  }
}

// generateRule generate match rule string with several domains
function generateDomainsRule(domains: string[]) {
  const s = domains
    .map((domain) => {
      return 'Host(`' + domain + '`)';
    })
    .join(' || ');

  return `(${s})`;
}
