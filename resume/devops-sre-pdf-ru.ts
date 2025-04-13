import * as ru from './src/data/common/sre-devops-ru';

const version = 'v0.0.1';

const jsonData = JSON.stringify(
  {
    meta: {
      version: version,
      'x-lang': 'ru',
    },
    basics: ru.data.basics,
    work: [
      ru.data.work.nda,
      ru.data.work.gaijin,
      ru.data.work.yandex,
      ru.data.work.rostelecom,
      ru.data.work.restream,
    ],
    skills: ru.data.skills,
    languages: [ru.data.languages.russian, ru.data.languages.english],
    certificates: [ru.data.certificates.cka, ru.data.certificates.cks],
  },
  null,
  2,
);

console.log(jsonData);
