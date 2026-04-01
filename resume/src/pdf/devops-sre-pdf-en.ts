import * as en from '../data/common/sre-devops-en';
import { buildResumeJson } from './build-resume-json';

const jsonData = buildResumeJson({
  data: en.data,
  lang: 'en',
});

console.log(jsonData);
