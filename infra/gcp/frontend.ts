import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';
import * as fs from 'fs';

export function Deploy(bucket: gcp.storage.Bucket) {
  const files = fs.readdirSync('../frontend');

  // Upload all files
  files.forEach((file) => {
    var contentType: string;

    switch (file.split('.').pop()) {
      case 'html':
        contentType = 'text/html';
        break;
      case 'js':
        contentType = 'text/javascript';
        break;
      case 'css':
        contentType = 'text/css';
        break;
      case 'pdf':
        contentType = 'application/pdf';
        break;
      default:
        contentType = 'text/plain';
        break;
    }
    new gcp.storage.BucketObject(
      `${file}-deploy`,
      {
        bucket: pulumi.interpolate`${bucket.name}`,
        name: file,
        contentType: contentType,
        cacheControl: 'max-age=7200',
        source: new pulumi.asset.FileAsset(`../frontend/${file}`),
      },
      { deleteBeforeReplace: true, dependsOn: [bucket] }
    );
  });
}
