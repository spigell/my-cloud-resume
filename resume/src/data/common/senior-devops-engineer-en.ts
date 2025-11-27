import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, withStack, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack('freelance', [
    'Provided consulting on Kubernetes, cloud, and platform reliability for a crypto trading bot platform integrating with CEX and DEX APIs.',
    'Designed and implemented Pulumi- and Helm-based automation for clusters and services, working mostly independently and handing over clear runbooks to clients.',
    'Maintain the pulumi-talos-cluster OSS project and used it as a foundation for client environments, incorporating lessons from real-world incidents.',
  ]),
  amarkets: withStack('amarkets', [
    'Acted as a senior engineer for broker reliability, aligning Go engineers, SRE, and product around shared incident and SLA goals.',
    'Instituted PostgreSQL/MySQL diagnostic playbooks and coached engineers on performance tuning and safe rollouts.',
    'Supported the monolith-to-Kubernetes migration strategy, facilitating design discussions and communicating rollout priorities across stakeholders.',
    'Improved MTTR via structured incident reviews, tracking action items, and pushing automation into orchestration layers.',
  ]),
  gaijin: withStack('gaijin', [
    'Grew into a reliability owner for high-load multiplayer operations, mentoring on-call engineers and broadcasting incident learnings.',
    'Proposed on-call rotations for the web team to improve system visibility and ownership.',
  ]),
  yandex: withStack('yandex', [
    'Served as an escalation point for Managed DB, Compute, and Kubernetes incidents and documented diagnostics for the team.',
  ]),
  rostelecom: withStack('rostelecom', [
    'Transitioned from hands-on operations to leading monitoring and reliability work for the Wink API.',
    'Mentored 24/7 operations staff, introduced clearer runbooks, and aligned expectations with business stakeholders.',
    'Delivered internal tooling, trained teams on the new platform, and coordinated hardware procurements for growth and resilience.',
    'Systematically removed SPOFs and improved release recoverability through cross-team collaboration and better deployment practices.',
  ]),
  equilibrium: withStack('equilibrium', [
    'Joined as a DevOps engineer focused on blockchain nodes and infrastructure automation in a small startup team.',
    'Supported the primary DevOps engineer while handling day-to-day work on node deployments, monitoring, and CI/CD pipelines.',
    'Ensured CI/CD reliability through proactive detection of issues and incremental improvements to platform tooling.',
    'This role was my first full-time (5/2) position, solidifying habits around ownership, communication, and production readiness.',
  ]),
  restream: withStack('restream', [
    'Started as a support engineer in the monitoring department, handling incident triage and communication.',
    'Learned the foundations of Linux, networking, and IaC while provisioning servers and maintaining Puppet-based inventories.',
    'Improved documentation and basic automation, which helped stabilize responses to incidents and prepared the ground for later DevOps roles.',
  ]),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Senior DevOps Engineer',
    summary: `Senior DevOps Engineer who has grown from monitoring and support to leading SRE roles. Responsible for the reliability of high-load systems, cloud and Kubernetes migrations, and internal platform development. Specialized in automation (IaC), observability, and building processes that minimize downtime. Experienced in mentoring, incident management, and coordinating cross-functional teams.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
