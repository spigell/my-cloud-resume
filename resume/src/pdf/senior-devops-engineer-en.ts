import * as data from '../data/common/senior-devops-engineer-en';
import { buildResumeJson } from './build-resume-json';

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
});

console.log(jsonData);
