import * as en from '../data/common/sre-devops-en';
import { buildResumeJson } from './build-resume-json';

const skillNames = [
  'Kubernetes',
  'IaC',
  'Linux',
  'Cloud',
  'Databases',
  'CI/CD',
];

const jsonData = buildResumeJson({
  data: en.data,
  lang: 'en',
  skillNames,
});

console.log(jsonData);
