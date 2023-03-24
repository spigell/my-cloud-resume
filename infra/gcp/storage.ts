import * as gcp from '@pulumi/gcp';

export function Deploy(name: string, region: string) {
  const storage = new gcp.storage.Bucket(name, {
    name: name,
    forceDestroy: false,
    location: region,
    publicAccessPrevention: 'enforced',
    uniformBucketLevelAccess: true,
  });

  return storage.name;
}
