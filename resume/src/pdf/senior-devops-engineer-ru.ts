import * as ru from '../data/common/senior-devops-engineer-ru';
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
  data: ru.data,
  lang: 'ru',
  skillNames,
});

console.log(jsonData);
