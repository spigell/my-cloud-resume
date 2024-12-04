import * as ru from './src/json-resume-ru';

ru.data.meta.version = 'v0.0.1';

const jsonData = JSON.stringify(
  {
    experience: [
      {
        company_url: ru.data.work.gaijin.website,
        start: ru.data.work.gaijin.startDate + '-01',
        end: null,
        company: ru.data.work.gaijin.company,
        position: ru.data.work.gaijin.position,
        industries: [],
        description: ru.data.work.gaijin.summary,
      },
    ],
    languages: [ru.data.languages.russian, ru.data.languages.english],
    certificates: [ru.data.certificates.cka, ru.data.certificates.cks],
  },
  null,
  2
);

console.log(jsonData);
