import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Designed Kubernetes infrastructure across GKE and Hetzner cloud to deliver reproducible, multi-cloud deployments.',
    'Automated provisioning with Pulumi and Helm so every release flowed through predictable pipelines with rollback controls.',
    'Maintained the pulumi-talos-cluster OSS project to streamline Talos-backed Kubernetes control planes.',
    'Hardened the platform by isolating flaky external APIs and adding retry/backoff layers for critical services.',
    // fix spelling below
    'FinOps: budget management',
  ]),
  amarkets: withStack('amarkets', [
    'Translated broker infrastructure into Pulumi-managed AWS and Kubernetes constructs for reliable trading deployments.',
    'Standardized Helm and Deckhouse configurations to simplify staged rollouts of mission-critical pods.',
    'Advocated Kubernetes observability and automated remediation with Go teams to solidify service reliability.',
    'Architected the monolith-to-Kubernetes migration, defining service patterns and rollout gates for cloud-native workloads.',
    // fix spelling below
    'FinOps: budget management',
  ]),
  gaijin: withStack('gaijin', [
    'Sustained high-load game backends by orchestrating AWS and bare-metal Kubernetes clusters with robust failover plans.',
    'Reinforced uptime via resilient infrastructure design, structured on-call rotations, and rapid recovery practices.',
    // fix spelling below
    'Provide packer templates for creating games servers quickly',
  ]),
  yandex: withStack('yandex', [
    'Resolved Yandex Cloud incidents spanning Managed DB, Compute, and Kubernetes while capturing lessons for cloud hygiene.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Modernized Wink API observability (Zabbix, Prometheus, VictoriaMetrics) to visualize Kubernetes and cloud workloads.',
    'Led on-call responses with tuned automation and alerts that surfaced configuration drift before outages.',
    'Administered PostgreSQL fleets with failover automation and replication monitoring across datacenters.',
    'Delivered internal automation tooling and training so teams could self-serve deployments and hardware planning.',
    // fix spelling below
    'Using internal cloud (VMWare Vsphere) order new vms',
    'Eliminated single points of failure and strengthened recoverability via resilient service design and controlled releases.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Managed blockchain node fleets and CI pipelines to keep crypto-fintech infrastructure stable under volatility.',
    'Hardened infrastructure by stress-testing node deployments and fortifying CI/CD flows against edge-case failures.',
    // fix spelling below
    'Manage aws node via ansible and Chef',
  ]),
  restream: withStack('restream', [
    'Provisioned CentOS nodes and tracked configuration via Puppet to align monitoring infrastructure with cloud-ready processes.',
    'Refined observability thresholds and RCA methods to accelerate recovery of monitoring clusters.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Cloud & Kubernetes Engineer',
    // Fix spelling below
    summary: `Designs resilient multi-cloud platforms (AWS, GCP) with a Kubernetes-first mindset (Deckhouse, Talos), leveraging Terraform, Pulumi and Helm, and automation-driven workflows to ship reliable infrastructure.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
