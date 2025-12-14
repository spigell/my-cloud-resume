import * as ru from '../data/common/automation-platform-engineer-ru';
import { buildResumeJson } from './build-resume-json';

const skillNames = ['IaC', 'CI/CD', 'Cloud', 'Golang', 'Workload Orchestrator'];

const jsonData = buildResumeJson({
  data: ru.data,
  lang: 'ru',
  skillNames,
});

console.log(jsonData);
