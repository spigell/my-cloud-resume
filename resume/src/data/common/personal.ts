import { Skill, Profile, Certificate } from './types';

export type Name = 'Sergei Chukh' | 'Сергей Чух';

export const website = 'https://sergeichukh.cloud';
export const email = 'spigelly@gmail.com';

export const education = {
  studyType: 'Completed',
  startDate: '2009-09-01',
  endDate: '2014-05-01',
};

export const experience = {
  selfemployed: {
    startDate: '2024-12',
    stack: [
      'GCP (GKE)',
      'Talos',
      'web3.js',
      'VictoriaMetrics',
      'Typescript',
      'Nodejs',
      'Pulumi',
      'Hetzner',
      'Github',
    ],
  },
  amarkets: {
    startDate: '2023-06',
    endDate: '2024-12',
    stack: [
      'AWS',
      'Ansible',
      'kubernetes',
      'k8s (deckhouse)',
      'helm',
      'werf',
      'Golang',
      'Metatrader 5',
      'Pulumi',
      'PostgreSQL',
      'Sentry',
      'Gitlab',
      'MySQL',
      'Redis',
      'Prometheus stack',
      'RabbitMQ',
    ],
  },
  gaijin: {
    startDate: '2022-04',
    endDate: '2023-04',
    stack: [
      'Linux (CentOS 7)',
      'Redis',
      'AWS (RDS, EC2, VPC, Route53)',
      'Graphite + Telegraf',
      'Kubernetes on bare metal',
      'Docker as build environment',
      'Golang',
      'Puppet',
      'Ansible',
      'Terraform',
      'Jenkins',
      'Gerrit',
    ],
  },
  yandex: {
    startDate: '2021-12',
    endDate: '2022-03',
    stack: [],
  },
  rostelecom: {
    startDate: '2019-05',
    endDate: '2021-10',
    stack: [
      'Linux (Centos 7)',
      'PostgreSQL (+Pgbouncer)',
      'NSQ',
      'ClickHouse',
      'Nginx',
      'Reindexer (https://github.com/Restream/reindexer)',
      'Prometheus Stack (+Victoria Metrics)',
      'Opscode Chef',
      'Gitlab',
      'Golang',
    ],
  },
  equilibrium: {
    startDate: '2018-10',
    endDate: '2019-05',
    stack: [
      'Linux (Ubuntu)',
      'AWS (RDS, EC2, VPC, Route53)',
      'Docker swarm',
      'Prometheus Stack',
      'HashiCorp Vault',
      'Teamcity',
    ],
  },
  restream: {
    startDate: '2016-02',
    endDate: '2018-10',
    stack: [],
  },
} as const;

export const skills: Skill[] = [
  {
    name: 'Linux',
    level: 'advanced',
    keywords: ['Debian', 'Talos', 'RHEL'],
  },
  {
    name: 'Monitoring',
    level: 'advanced',
    keywords: ['Prometheus', 'Grafana', 'Zabbix', 'Telegraf'],
  },
  {
    name: 'Databases',
    level: 'advanced',
    keywords: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    name: 'Incident Management',
    level: 'advanced',
    keywords: ['Incident Response', 'RCA', 'Postmortem', 'On-call'],
  },
  {
    name: 'Logging',
    level: 'advanced',
    keywords: ['ELK', 'Loki', 'Datadog'],
  },
  {
    name: 'Kubernetes',
    level: 'advanced',
    keywords: ['K8S', 'Helm'],
  },
  {
    name: 'IaC',
    level: 'advanced',
    keywords: ['Pulumi', 'Terraform', 'Ansible', 'Chef'],
  },
  {
    name: 'Cloud',
    level: 'advanced',
    keywords: ['AWS', 'GCP', 'Hetzner Cloud'],
  },
  {
    name: 'Messaging',
    level: 'intermediate',
    keywords: ['RabbitMQ'],
  },
  {
    name: 'Golang',
    level: 'intermediate',
    keywords: ['Golang'],
  },
  {
    name: 'Workload Orchestrator',
    level: 'advanced',
    keywords: ['Kubernetes', 'Docker Swarm'],
  },
  {
    name: 'CI/CD',
    level: 'advanced',
    keywords: ['GitLab CI', 'TeamCity', 'GitHub Actions'],
  },
  {
    name: 'Web Servers',
    level: 'advanced',
    keywords: ['Nginx', 'Traefik'],
  },
];

export const profiles: { [key: string]: Profile } = {
  linkedin: {
    network: 'LinkedIn',
    username: 'sergei-chukh',
    url: 'https://www.linkedin.com/in/sergei-chukh',
  },
  telegram: {
    network: 'Telegram',
    username: 'sergei_chukh',
    url: 'https://t.me/sergei_chukh',
  },
  github: {
    network: 'GitHub',
    username: 'spigell',
    url: 'https://github.com/spigell',
  },
};

export const certificates: { [key: string]: Certificate } = {
  rhce: {
    name: 'RHCE (Red Hat Certified Engineer)',
    date: '2020-12-01',
    issuer: 'Unknown',
    url: '',
  },
  cka: {
    name: 'CKA (Certified Kubernetes Administrator)',
    date: '2023-12-12',
    url: 'https://www.credly.com/badges/07d6aa91-ced5-4c56-8025-2e5477446b6d',
    issuer: 'The Linux Foundation',
  },
  cks: {
    name: 'CKS (Certified Kubernetes Security Specialist)',
    date: '2024-02-12',
    url: 'https://www.credly.com/badges/339ce290-68f1-435e-a40d-88fd385165c8',
    issuer: 'The Linux Foundation',
  },
};
