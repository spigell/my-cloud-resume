import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';
import * as fs from 'fs';

export function Deploy(project: string, stack: string) {
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
      default:
        contentType = 'text/plain';
        break;
    }
    new gcp.storage.BucketObject(
      `${project}-${file}-deploy`,
      {
        bucket: `${project}-${stack}`,
        name: file,
        contentType: contentType,
        source: new pulumi.asset.FileAsset(`../frontend/${file}`),
      },
      { deleteBeforeReplace: true }
    );
  });
}
