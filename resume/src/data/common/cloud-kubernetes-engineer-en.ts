import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Designed Kubernetes infrastructure across GKE and Hetzner/Talos to deliver reproducible, multi-cloud deployments.',
    'Automated provisioning with Pulumi and Helm so every release flowed through predictable pipelines with rollback controls.',
    'Maintained the pulumi-talos-cluster OSS project to streamline Talos-backed Kubernetes control planes.',
    'Hardened the platform by isolating flaky external APIs and adding retry/backoff layers for critical services.',
  ]),
  amarkets: withStack('amarkets', [
    'Translated broker infrastructure into Pulumi-managed AWS and Kubernetes constructs for reliable trading deployments.',
    'Standardized Helm and Deckhouse configurations to simplify staged rollouts of mission-critical pods.',
    'Advocated Kubernetes observability and automated remediation with Go teams to solidify service reliability.',
    'Architected the monolith-to-Kubernetes migration, defining service patterns and rollout gates for cloud-native workloads.',
    'Reduced MTTR by baking automated diagnostics and health checks directly into orchestration layers.',
  ]),
  gaijin: withStack('gaijin', [
    'Sustained high-load game backends by orchestrating AWS and bare-metal Kubernetes clusters with robust failover plans.',
    'Built etcd-backed service discovery to align Kubernetes workloads with live multiplayer services.',
    'Reinforced uptime via resilient infrastructure design, structured on-call rotations, and rapid recovery practices.',
  ]),
  yandex: withStack('yandex', [
    'Resolved Yandex Cloud incidents spanning Managed DB, Compute, and Kubernetes while capturing lessons for cloud hygiene.',
    'Documented production Kubernetes failure modes and shared runbooks to speed recovery of critical clusters.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Modernized Wink API observability (Zabbix, Prometheus, VictoriaMetrics) to visualize Kubernetes and cloud workloads.',
    'Led on-call responses with tuned automation and alerts that surfaced configuration drift before outages.',
    'Administered PostgreSQL fleets with failover automation and replication monitoring across datacenters.',
    'Delivered internal automation tooling and training so teams could self-serve deployments and hardware planning.',
    'Eliminated single points of failure and strengthened recoverability via resilient service design and controlled releases.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Managed blockchain node fleets and CI pipelines to keep crypto-fintech infrastructure stable under volatility.',
    'Hardened infrastructure by stress-testing node deployments and fortifying CI/CD flows against edge-case failures.',
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
    summary: `Designs resilient multi-cloud platforms with a Kubernetes-first mindset (GKE, Talos), leveraging Pulumi, Helm, and automation-driven workflows to ship reliable infrastructure.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
