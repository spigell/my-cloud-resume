import * as data from '../data/common/cloud-kubernetes-engineer-en';
import { buildResumeJson } from './build-resume-json';

const skillNames = [
  'Kubernetes',
  'IaC',
  'Cloud',
  'Workload Orchestrator',
  'CI/CD',
];

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
  skillNames,
});

console.log(jsonData);
