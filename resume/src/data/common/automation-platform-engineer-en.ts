import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Automated Kubernetes infrastructure provisioning with Pulumi and Helm to accelerate multi-cloud deployments.',
    'Templated stacks for GKE and Hetzner/Talos to make infrastructure reproducible and scriptable.',
    'Maintained pulumi-talos-cluster OSS tooling so Talos bootstraps now fit seamlessly into CI workflows.',
    'Designed automation to isolate flaky APIs and recover workloads with retry/backoff policies.',
  ]),
  amarkets: withStack('amarkets', [
    'Codified broker infrastructure with Pulumi to enable repeatable builds and safe rollouts.',
    'Developed Helm and Deckhouse scaffolding that automated configuration drift checks.',
    'Scripted reliability checks for Go services so platform deployments matched operational expectations.',
    'Orchestrated automation for the monolith-to-Kubernetes migration, packaging service interaction patterns into reusable flows.',
  ]),
  gaijin: withStack('gaijin', [
    'Automated high-load backend deployments and formalized IaC practices for game infrastructure.',
    'Built etcd-powered service discovery that let Kubernetes workloads self-configure without manual intervention.',
    'Documented platform tooling to support on-call teams with repeatable recovery steps.',
  ]),
  yandex: withStack('yandex', [
    'Automated diagnostics and remediation playbooks for Kubernetes clusters, Managed DB, and Compute incidents.',
    'Standardized response scripts so second-line support could execute consistent fixes under pressure.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Provisioned monitoring and alerting automation for Wink APIs to keep observability pipelines reliable.',
    'Built tooling that let product and operations teams self-serve internal environments and releases.',
    'Coordinated platform planning with automation that tied hardware procurement to deployment pipelines.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Automated blockchain node deployments and CI/CD pipelines for the crypto-fintech product.',
    'Reinforced CI flows with scripts that recovered from edge-case failures and infrastructure flakiness.',
  ]),
  restream: withStack('restream', [
    'Provisioned CentOS hosts and managed configuration via Puppet to keep monitoring collectors consistent.',
    'Streamlined incident response by refining automation around monitoring thresholds and root cause detection.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Automation & Platform Engineer',
    summary: `Automation and platform engineer focused on Infrastructure as Code, CI/CD pipelines, scripting, and internal tooling to accelerate delivery and platform development.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
