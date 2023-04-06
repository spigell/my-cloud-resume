import * as gcp from './gcp';
import * as pulumi from '@pulumi/pulumi';

export type Config = {
  gcp: gcp.GCP;
};

const config = new pulumi.Config();

const resume = config.requireObject<Config>('resume');

const gr = new gcp.Resume(resume.gcp);

// Export urls as secrets.
export const url = gr.Deploy()[0];
