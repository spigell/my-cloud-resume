import * as data from '../data/common/senior-devops-engineer-en';
import { buildResumeJson } from './build-resume-json';

const skillNames = [
  'Kubernetes',
  'IaC',
  'CI/CD',
  'Monitoring',
  'Logging',
  'Workload Orchestrator',
];

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
  skillNames,
});

console.log(jsonData);
