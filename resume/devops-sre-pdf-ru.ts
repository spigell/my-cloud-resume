import * as ru from './src/json-resume-ru';

ru.data.meta.version = 'v0.0.1';

const jsonData = JSON.stringify(
  {
    meta: ru.data.meta,
    basics: ru.data.basics,
    work: [
      ru.data.work.nda,
      ru.data.work.gaijin,
      ru.data.work.yandex,
      ru.data.work.rostelecom,
      ru.data.work.restream,
    ],
    languages: [ru.data.languages.russian, ru.data.languages.english],
    certificates: [ru.data.certificates.cka, ru.data.certificates.cks],
  },
  null,
  2,
);

console.log(jsonData);
