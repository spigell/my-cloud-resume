import * as ru from '../data/common/sre-devops-ru';
import { buildResumeJson } from './build-resume-json';

const jsonData = buildResumeJson({
  data: ru.data,
  lang: 'ru',
});

console.log(jsonData);
