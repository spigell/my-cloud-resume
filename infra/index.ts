import * as gcp from './gcp';
import * as pulumi from '@pulumi/pulumi';

type GCSConfig = {
  proxy: {
    image: string;
  };
};

type Config = {
  gcp: {
    domains: string[];
    gcs: GCSConfig;
  };
};

const config = new pulumi.Config();

const resume = config.requireObject<Config>('resume');

const gr = new gcp.Resume(resume.gcp.domains, resume.gcp.gcs.proxy.image);

// Export urls as secrets.
export const url = gr.Deploy()[0];
