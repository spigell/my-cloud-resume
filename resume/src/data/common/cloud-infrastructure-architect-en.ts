import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Architected multi-cloud Kubernetes platforms on GKE and Hetzner/Talos to deliver reproducible infrastructure across providers.',
    'Turned business reliability goals into Pulumi and Helm guardrails for safe deployments.',
    'Directed the pulumi-talos-cluster OSS project to capture best practices for Talos-based control planes.',
  ]),
  amarkets: withStack('amarkets', [
    'Modeled AWS and Kubernetes infrastructure to satisfy brokerage SLAs through resilient service meshes.',
    'Defined Deckhouse migration architecture, including service interaction patterns and rollout strategies.',
    'Aligned Go teams with architectural guardrails that balanced reliability and velocity.',
    'Embedded orchestration policies to enforce safe deployment practices.',
  ]),
  gaijin: withStack('gaijin', [
    'Designed high-load infrastructure for AWS and bare-metal Kubernetes platforms running War Thunder and Enlisted.',
    'Engineered etcd-powered service discovery so distributed services tracked in sync with the architecture vision.',
    'Promoted resilient design through structured observability, on-call readiness, and rapid recovery.',
  ]),
  yandex: withStack('yandex', [
    'Shaped incident-informed architecture by analyzing Managed DB, Compute, and Kubernetes failure patterns.',
    'Documented production cluster hardening recommendations for Yandex Cloud teams.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Led architecture updates for Wink API monitoring (Zabbix, Prometheus, VictoriaMetrics) to align observability with resilience.',
    'Instituted on-call and alerting frameworks that informed recoverable system architecture.',
    'Owned PostgreSQL architecture, including backups, replication, and performance tuning.',
    'Systematically eliminated SPOFs and formalized architecture patterns for release reliability.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Architected blockchain node deployments and CI pipelines for a resilient crypto-fintech platform.',
    'Designed infrastructure to withstand edge-case failures while preserving data integrity.',
  ]),
  restream: withStack('restream', [
    'Defined monitoring architecture, provisioning nodes via Puppet and maintaining consistent OS configuration.',
    'Refined RCA workflows so architecture and automation stayed aligned during incidents.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Cloud Infrastructure Architect',
    summary: `Cloud infrastructure architect focused on strategic design and implementation of scalable, resilient solutions across providers with a focus on observability and automation.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
