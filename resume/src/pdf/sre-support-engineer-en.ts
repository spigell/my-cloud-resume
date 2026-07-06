import * as data from '../data/common/sre-support-engineer-en';
import { buildResumeJson } from './build-resume-json';
const workKeys = [
  'uspio',
  'trading_startup',
  'amarkets',
  'gaijin',
  'yandex',
  'rostelecom',
  'equilibrium',
] as const;

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'en',
  workKeys: [...workKeys],
});

console.log(jsonData);
