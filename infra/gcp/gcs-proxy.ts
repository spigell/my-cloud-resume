import * as gcp from '@pulumi/gcp';

const name = 'gcs-proxy';

export function Deploy(
  project: string,
  stack: string,
  region: string,
  image: string
) {
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
          containerConcurrency: 3,
          containers: [
            {
              envs: [
                {
                  name: 'BUCKET_NAME',
                  value: `${project}-${stack}`,
                },
              ],
              image: image,
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
