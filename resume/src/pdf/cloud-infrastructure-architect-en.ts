import * as data from '../data/common/cloud-infrastructure-architect-en';
import { buildResumeJson } from './build-resume-json';

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
});

console.log(jsonData);
