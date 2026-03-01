import * as data from '../data/common/tech-support-engineer-ru';
import { buildResumeJson } from './build-resume-json';

const skillNames = [
  'Monitoring',
  'Logging',
  'Linux',
  'Databases',
  'Cloud',
  'CI/CD',
];
const workKeys = [
  'freelance',
  'amarkets',
  'gaijin',
  'yandex',
  'rostelecom',
  'equilibrium',
  'restream',
] as const;

const jsonData = buildResumeJson({
  data: data.data,
  lang: 'ru',
  skillNames,
  workKeys: [...workKeys],
});

console.log(jsonData);
