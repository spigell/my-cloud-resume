import * as gcp from './gcp';
import * as pulumi from '@pulumi/pulumi';

type Config = {
  gcp: {
    domains: string[];
    gcs_proxy: {
      image: string;
    };
  };
};

const stack = pulumi.getStack();

const config = new pulumi.Config();

const resume = config.requireObject<Config>('resume');

const gr = new gcp.Resume(resume.gcp.domains, resume.gcp.gcs_proxy.image, stack);

// Export urls as secrets.
export const urls = pulumi.secret(gr.Deploy());
