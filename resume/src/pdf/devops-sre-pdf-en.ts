import * as en from '../data/common/sre-devops-en';

const version = 'v0.0.1';

const jsonData = JSON.stringify(
  {
    meta: {
      version: version,
      'x-lang': 'en',
    },
    basics: en.data.basics,
    work: [
      en.data.work.freelance,
      en.data.work.amarkets,
      {
        ...en.data.work.gaijin,
        summary: en.data.work.gaijin.summary,
      },
      en.data.work.yandex,
      {
        ...en.data.work.rostelecom,
        summary: en.data.work.rostelecom.summary,
      },
      //en.data.work.equilibrium,
    ],
    skills: en.data.skills.filter((skill) => {
      return [
        'Kubernetes',
        'IaC',
        'Linux',
        'Cloud',
        'Databases',
        'CI/CD',
      ].includes(skill.name);
    }),
    certificates: [en.data.certificates.cka, en.data.certificates.cks],
    languages: [en.data.languages.russian, en.data.languages.english],
  },
  null,
  2,
);

console.log(jsonData);
