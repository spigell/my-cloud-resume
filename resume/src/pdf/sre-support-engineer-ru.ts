import * as data from '../data/common/sre-support-engineer-ru';
import { buildResumeJson } from './build-resume-json';

const skillNames = [
  'Web3 & Блокчейн',
  'Мониторинг',
  'Linux',
  'AI',
  'Kubernetes',
];
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
  skillNames,
  workKeys: [...workKeys],
});

console.log(jsonData);
