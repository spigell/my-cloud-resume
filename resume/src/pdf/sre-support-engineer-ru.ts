import * as data from '../data/common/sre-support-engineer-ru';
import { buildResumeJson } from './build-resume-json';
const workKeys = [
  'trading_startup',
  'amarkets',
  'gaijin',
  'yandex',
  'rostelecom',
  'equilibrium',
] as const;

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'ru',
  workKeys: [...workKeys],
});

console.log(jsonData);
