import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Led RCA for production incidents in a startup trading platform and implemented automated fixes to restore service quickly.',
    'Maintained runbooks for exchange API failures (REST/WebSocket) to speed up recurring incident triage.',
  ]),
  amarkets: withStack('amarkets', [
    'Diagnosed escalated production issues across PostgreSQL, MySQL, Redis, and application services, coordinating fixes with developers.',
    'Architected troubleshooting playbooks for slow queries and backend degradation, reducing time-to-resolution for recurring incidents.',
    'Improved handoff quality between support, SRE, and product teams through clear incident timelines and follow-up actions.',
  ]),
  gaijin: withStack('gaijin', [
    'Supported high-load online game backends with a focus on incident response, availability, and fast rollback decisions.',
  ]),
  yandex: withStack('yandex', [
    'Worked as an L2 support specialist for Yandex Cloud services (Managed DB, Compute, Kubernetes), handling complex escalations.',
    'Performed deep diagnostics for production Kubernetes issues and documented outcomes for repeatable incident response.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Provided operational support for Wink API services, combining incident triage, troubleshooting, and post-incident improvements.',
    'Set up and tuned monitoring/alerting to detect service degradation early and guide on-call teams during outages.',
    'Trained 24/7 operations staff, improved support runbooks, and aligned technical decisions with business priorities.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Supported blockchain infrastructure operations and resolved day-to-day incidents affecting node reliability and CI/CD stability.',
    'Improved service recoverability by hardening deployment procedures and documenting routine support actions.',
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
    label: 'Technical Support Engineer (L2) / SRE Bridge',
    summary: `Technical support engineer with hands-on L2 experience in cloud and high-load production systems. Focused on incident triage, deep diagnostics, and restoring service under pressure. Strong bridge between support, SRE, and development teams: I convert recurring incidents into runbooks, monitoring improvements, and durable operational practices.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
