import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Led RCA for production incidents in a startup trading platform and implemented proactive health checks to restore service and prevent recurring outages.',
    'Maintained runbooks for exchange API failures (REST/WebSocket) to speed up triage in high-frequency crypto trading workloads.',
  ]),
  amarkets: withStack('amarkets', [
    'Diagnosed escalated production issues across PostgreSQL, MySQL, Redis, and application services, reducing MTTR by 20% through standardized troubleshooting playbooks.',
    'Architected playbooks for slow queries and backend degradation to resolve recurring incidents with predictable results.',
    'Improved handoff quality between support, SRE, and product teams through clear incident timelines and actionable post-mortems.',
  ]),
  gaijin: withStack('gaijin', [
    'Supported high-load online game backends with a focus on rapid incident response, 99.9% availability, and fast rollback decisions.',
  ]),
  yandex: withStack('yandex', [
    'Worked as an L2 support specialist for Yandex Cloud services (Managed DB, Compute, Kubernetes), handling critical escalations for Enterprise clients.',
    'Performed deep diagnostics for production Kubernetes issues and documented outcomes for repeatable incident response.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Provided operational support for Wink API services, combining incident triage, troubleshooting, and systemic post-incident improvements.',
    'Set up and tuned monitoring/alerting to detect service degradation early and guide on-call teams during outages.',
    'Trained 10+ NOC engineers on platform internals, improving runbooks and reducing the escalation rate to core engineering.',
    'Performed capacity planning for critical nodes (CPU/RAM/Disk) and coordinated hardware procurement to sustain platform growth.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Supported blockchain infrastructure and resolved day-to-day incidents affecting node reliability (ETH/Parity, EOS/Nodeos).',
    'Diagnosed P2P connectivity issues and JSON-RPC API latency to ensure stable network synchronization and validator uptime.',
    'Improved service recoverability by hardening deployment procedures and documenting routine support actions for blockchain nodes.',
  ]),
  restream: withStack('restream', [
    'Started in monitoring and technical support, processing tickets and triaging incidents in the Interactive TV platform.',
    'Provisioned and maintained CentOS hosts, tracked configuration via Puppet, and handled first-line diagnostics for service issues.',
    'Established foundational expertise in Linux diagnostics, host provisioning, and large-scale monitoring operations.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'SRE / Support Engineer',
    summary: `SRE / Support Engineer with hands-on L2 experience in cloud and high-load production systems. Focused on incident triage, deep diagnostics, and service restoration under pressure. Strong bridge between support, SRE, and development teams, including crypto trading and blockchain infrastructure domains: I convert recurring incidents into runbooks, monitoring improvements, and durable operational practices.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
