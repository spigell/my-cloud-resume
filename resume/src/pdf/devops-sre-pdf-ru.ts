import * as ru from '../data/common/sre-devops-ru';

const version = 'v0.0.1';

const jsonData = JSON.stringify(
  {
    meta: {
      version: version,
      'x-lang': 'ru',
    },
    basics: ru.data.basics,
    work: [
      ru.data.work.freelance,
      ru.data.work.amarkets,
      {
        ...ru.data.work.gaijin,
        summary: ru.data.work.gaijin.summary.slice(0, 298),
      },
      ru.data.work.yandex,
      {
        ...ru.data.work.rostelecom,
        summary: ru.data.work.rostelecom.summary.slice(0, 265),
      },
      // ru.data.work.restream,
    ],
    skills: ru.data.skills.filter((skill) => {
      return [
        'Kubernetes',
        'IaC',
        'Linux',
        'Cloud',
        'Databases',
        'CI/CD',
      ].includes(skill.name);
    }),
    certificates: [ru.data.certificates.cka, ru.data.certificates.cks],
    languages: [ru.data.languages.russian, ru.data.languages.english],
  },
  null,
  2,
);

console.log(jsonData);
