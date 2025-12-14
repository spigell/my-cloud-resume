import * as ru from '../data/common/cloud-kubernetes-engineer-ru';
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
  data: ru.data,
  lang: 'ru',
  skillNames,
});

console.log(jsonData);
