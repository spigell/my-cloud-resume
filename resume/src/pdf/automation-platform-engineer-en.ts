import * as data from '../data/common/automation-platform-engineer-en';
import { buildResumeJson } from './build-resume-json';

const skillNames = ['IaC', 'CI/CD', 'Cloud', 'Golang', 'Workload Orchestrator'];

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
  skillNames,
});

console.log(jsonData);
