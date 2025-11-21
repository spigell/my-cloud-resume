import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Diagnosed PostgreSQL/MySQL degradations within Kubernetes workloads before they impacted the trading platform.',
    'Automated Pulumi and Helm provisioning to include database replication checks and configuration validation.',
    'Captured telemetry from pulumi-talos-cluster deployments to surface storage health trends early.',
    'Implemented retry/backoff layers so downstream data services stayed reliable despite unstable APIs.',
  ]),
  amarkets: withStack('amarkets', [
    'Triaged PostgreSQL, MySQL, and Redis performance incidents, tuning query patterns and resource allocations.',
    'Introduced PostgreSQL query audit tooling to detect missing indexes and query anti-patterns before production deploys.',
    'Partnered with Go teams on MetaTrader 5 services to align application and database health signals.',
    'Architected service interaction patterns for the Deckhouse migration, isolating database tiers within Kubernetes.',
    'Reduced MTTR by proactively diagnosing backend slowdowns and validating fixes off-line.',
  ]),
  gaijin: withStack('gaijin', [
    'Sustained high-load game backends by analyzing storage performance and implementing rapid recovery playbooks.',
    'Built etcd-backed service discovery to prevent propagation of database pressure across services.',
    'Maintained uptime in live multiplayer environments by combining telemetry with on-call readiness.',
  ]),
  yandex: withStack('yandex', [
    'Resolved Managed DB, Compute, and Kubernetes incidents, documenting diagnostics for future response.',
    'Specialized in deep-dive analyses that shortened MTTR for production Kubernetes clusters.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Monitored PostgreSQL clusters (backups, replication, performance) and responded to alerts before user impact.',
    'Configured Zabbix/Prometheus/VictoriaMetrics dashboards to surface database anomalies rapidly.',
    'Delivered internal tooling so teams could self-serve database operations with predictable outcomes.',
    'Systematically eliminated SPOFs and baked recoverability into database-heavy APIs.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Maintained blockchain node integrity (Parity, Geth, nodeos) and reinforced CI pipelines against data corruption.',
    'Hardened infrastructure to keep critical data services online even when facing edge-case failures.',
  ]),
  restream: withStack('restream', [
    'Processed Jira incidents with an eye toward monitoring database and node anomalies.',
    'Provisioned CentOS hosts and managed IaC (Puppet) so monitoring collectors remained consistent.',
    'Improved observability thresholds and RCA practices to speed recovery of monitoring nodes.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'SRE & Database Reliability Engineer',
    summary: `SRE and database reliability engineer concentrating on incident response, diagnostics, and PostgreSQL/MySQL/Redis tuning to lower MTTR and keep data systems stable.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
