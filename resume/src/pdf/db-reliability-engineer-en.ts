import * as data from '../data/common/db-reliability-engineer-en';
import { buildResumeJson } from './build-resume-json';

const skillNames = ['Databases', 'Linux', 'Monitoring', 'Cloud', 'CI/CD'];

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
  skillNames,
});

console.log(jsonData);
