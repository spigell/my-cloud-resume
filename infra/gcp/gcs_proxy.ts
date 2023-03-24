import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';

const name = 'gcs-proxy';
const commit = '2bee0b10ceea7121acd3e240a4ab0855c1a93c52';

export function Deploy(project: string, stack: string, region: string) {
  const proxy = new gcp.cloudrun.Service(
    name,
    {
      location: region,
      name: `${name}-${stack}`,
      project: project,
      metadata: {
        annotations: {
          'run.googleapis.com/ingress': 'internal-and-cloud-load-balancing',
        },
      },
      template: {
        metadata: {
          annotations: {
            'autoscaling.knative.dev/maxScale': '3',
          },
        },
        spec: {
          containerConcurrency: 2,
          containers: [
            {
              envs: [
                {
                  name: 'BUCKET_NAME',
                  value: `${project}-${stack}`,
                },
              ],
              image: pulumi.interpolate`gcr.io/${project}/${name}:${commit}`,
              ports: [
                {
                  containerPort: 8080,
                  name: 'http1',
                },
              ],
              resources: {
                limits: {
                  cpu: '1',
                  memory: '128Mi',
                },
              },
            },
          ],
          serviceAccountName:
            '415992991707-compute@developer.gserviceaccount.com',
          timeoutSeconds: 300,
        },
      },
    },
    { ignoreChanges: ['metadata.annotations'] }
  );

  new gcp.cloudrun.IamMember('allowAll', {
    location: region,
    service: proxy.name,
    role: 'roles/run.invoker',
    member: 'allUsers',
  });

  return proxy.name;
}
