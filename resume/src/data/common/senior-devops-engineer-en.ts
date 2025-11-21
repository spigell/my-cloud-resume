import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Led cross-functional delivery of Kubernetes infrastructure, ensuring reliability conversations included product, engineering, and operations.',
    'Orchestrated Pulumi and Helm automation so teammates could ship updates independently while adhering to safety checks.',
    'Maintained the pulumi-talos-cluster OSS project and mentored contributors on applying it to their stacks.',
    'Guided resilience improvements by quickly addressing API instability and sharing lessons with the wider team.',
  ]),
  amarkets: withStack('amarkets', [
    'Acted as a technical lead for broker reliability, aligning Go engineers, SRE, and product around shared incident goals.',
    'Instituted PostgreSQL/MySQL diagnostic playbooks and coached engineers on performance tuning.',
    'Owned the monolith-to-Kubernetes migration strategy, communicating architecture and rollout priorities across stakeholders.',
    'Improved MTTR via structured incident reviews and automation built into orchestration layers.',
  ]),
  gaijin: withStack('gaijin', [
    'Championed high-load multiplayer operations, mentoring on-call engineers and broadcasting incident learnings.',
    'Coordinated service discovery and reliability work across AWS and bare-metal Kubernetes deployments.',
    'Led initiatives that prioritized uptime and recovery for player-facing systems.',
  ]),
  yandex: withStack('yandex', [
    'Served as senior escalation for Managed DB, Compute, and Kubernetes incidents and documented diagnostics for the team.',
    'Coached support engineers on deep-dive analysis to elevate incident response quality.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Led monitoring and operations for the Wink API, mentoring 24/7 staff and aligning with business stakeholders.',
    'Delivered internal tooling, trained operations teams on the new platform, and coordinated hardware procurements.',
    'Systematically removed SPOFs and improved release recoverability through cross-team collaboration.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Provided senior-level guidance on blockchain node infrastructure and automation.',
    'Ensured CI/CD reliability through proactive detection and mentoring teammates on platform tooling.',
  ]),
  restream: withStack('restream', [
    'Supported the monitoring department by improving IaC workflows and mentoring teammates on system readiness.',
    'Handled provisioning and root cause detection work that stabilized cross-functional responses to incidents.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Senior DevOps Engineer',
    summary: `Senior DevOps engineer combining deep SRE expertise with leadership, mentoring, and cross-functional influence to solve complex operational challenges.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
