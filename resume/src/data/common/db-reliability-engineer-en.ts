import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Monitored the health and latency of a crypto trading bot platform integrated with centralized and decentralized exchanges.',
    'Set up metrics, logs, and alerts around exchange API calls, order execution flow, and error rates.',
    'Improved incident response by tuning alert thresholds and runbooks for failed API calls and degraded platform performance.',
    'Implemented retry/backoff and circuit-breaker logic so downstream services stayed reliable despite unstable exchange APIs.',
  ]),
  amarkets: withStack('amarkets', [
    'Triaged PostgreSQL, MySQL, and Redis performance incidents, tuning query patterns and resource allocations.',
    'Introduced PostgreSQL query audit tooling to detect missing indexes and query anti-patterns before production deploys.',
    'Partnered with Go teams on MetaTrader 5 services to align application and database health signals.',
    'Architected service interaction patterns for the Deckhouse migration, isolating database tiers within Kubernetes.',
    'Reduced MTTR by proactively diagnosing backend slowdowns and validating fixes off-line.',
    'Planned and executed PostgreSQL and MySQL version upgrades and schema changes in production using replication, phased rollouts, and rollback strategies to avoid downtime.',
  ]),
  gaijin: withStack('gaijin', [
    'Sustained high-load game backends by analyzing storage and service performance and refining rapid recovery playbooks.',
    'Built an etcd-backed service discovery layer that reduced cascading failures across services during incidents.',
    'Enhanced monitoring for critical game components so on-call engineers could quickly isolate performance bottlenecks.',
    'Maintained uptime in live multiplayer environments by combining telemetry, targeted rollbacks, and on-call readiness.',
  ]),
  yandex: withStack('yandex', [
    'Resolved Managed DB, Compute, and Kubernetes incidents, documenting diagnostics for future response.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Monitored PostgreSQL clusters (backups, replication, performance) and responded to alerts before user impact.',
    'Configured Zabbix/Prometheus/VictoriaMetrics dashboards to surface database anomalies rapidly.',
    'Delivered internal tooling so teams could observe and operate the underlying infrastructure more independently.',
    'Systematically eliminated SPOFs and baked recoverability into database-heavy APIs.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Maintained blockchain node integrity (Parity, Geth, nodeos) and reinforced CI pipelines against data corruption.',
    'Hardened infrastructure to keep critical data services online even when facing edge-case failures.',
  ]),
  restream: withStack('restream', [
    'Processed Jira incidents with an eye toward monitoring database and node anomalies.',
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
