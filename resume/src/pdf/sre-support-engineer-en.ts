import * as data from '../data/common/sre-support-engineer-en';
import { buildResumeJson } from './build-resume-json';

const skillNames = [
  'Web3 & Blockchain',
  'Monitoring',
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
  lang: 'en',
  skillNames,
  workKeys: [...workKeys],
});

console.log(jsonData);
