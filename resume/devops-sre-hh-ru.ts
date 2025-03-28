import { AxiosError } from 'axios';
import * as common from './src/data/common';
import * as ru from './src/data/sre-devops-ru';
import { HeadHunterAPI } from './src/headhunter/headhunter';

const resumeId = 'a22559aeff0d608b840039ed1f4c4137784e4a';

const jsonData = JSON.stringify(
  {
    title: 'SRE/DevOps инженер',
    site: [
      {
        type: {
          id: 'linkedin',
          name: 'LinkedIn',
        },
        url: common.profiles.linkedin.url,
      },
      {
        type: {
          id: 'personal',
          name: 'Другой сайт',
        },
        url: ru.data.basics.website,
      },
    ],
    experience: [
      {
        start: ru.data.work.nda.startDate + '-01',
        end: ru.data.work.nda.endDate + '-01',
        company: ru.data.work.nda.name,
        position: ru.data.work.nda.position,
        industries: [],
        description: ru.data.work.nda.summary,
      },
      {
        company_url: ru.data.work.gaijin.website,
        start: ru.data.work.gaijin.startDate + '-01',
        end: ru.data.work.gaijin.endDate + '-01',
        company: ru.data.work.gaijin.name,
        position: ru.data.work.gaijin.position,
        industries: [],
        description: ru.data.work.gaijin.summary,
      },
      {
        company_url: ru.data.work.yandex.website,
        start: ru.data.work.yandex.startDate + '-01',
        end: ru.data.work.yandex.endDate + '-01',
        company: ru.data.work.yandex.name,
        position: ru.data.work.yandex.position,
        industries: [],
        description: ru.data.work.yandex.summary,
      },
      {
        company_url: ru.data.work.rostelecom.website,
        start: ru.data.work.rostelecom.startDate + '-01',
        end: ru.data.work.rostelecom.endDate + '-01',
        company: ru.data.work.rostelecom.name,
        position: ru.data.work.rostelecom.position,
        industries: [],
        description: ru.data.work.rostelecom.summary,
      },
      {
        company_url: ru.data.work.equilibrium.website,
        start: ru.data.work.equilibrium.startDate + '-01',
        end: ru.data.work.equilibrium.endDate + '-01',
        company: ru.data.work.equilibrium.name,
        position: ru.data.work.equilibrium.position,
        industries: [],
        description: ru.data.work.equilibrium.summary,
      },
      {
        company_url: ru.data.work.restream.website,
        start: ru.data.work.restream.startDate + '-01',
        end: ru.data.work.restream.endDate + '-01',
        company: ru.data.work.restream.name,
        position: ru.data.work.restream.position,
        industries: [],
        description: ru.data.work.restream.summary,
      },
    ],
    languages: [ru.data.languages.russian, ru.data.languages.english],
    certificate: [ru.data.certificates.cka, ru.data.certificates.cks],
    education: {
      level: {
        id: 'higher',
        name: 'Высшее',
      },
      primary: [
        {
          name: ru.data.education.institution,
          organization: 'Нефтегазопромысловый',
          result: ru.data.education.area,
          year: ru.data.education.endDate.split('-')[0],
          education_level: {
            id: 'higher',
            name: 'Высшее',
          },
        },
      ],
      additional: [
        {
          name: ru.data.certificates.cks.name,
          organization: ru.data.certificates.cks.issuer,
          year: ru.data.certificates.cks.date.split('-')[0],
        },
        {
          name: ru.data.certificates.cka.name,
          organization: ru.data.certificates.cka.issuer,
          year: ru.data.certificates.cka.date.split('-')[0],
        },
      ],
    },
    skills: ru.data.basics.summary,
    skill_set: ru.data.skills.flatMap((v) => [v.name, ...v.keywords]),
  },
  null,
  2,
);

const token = process.env.HH_TOKEN;
if (token === undefined) {
  throw new Error('Set token via HH_TOKEN env var');
}

const api = new HeadHunterAPI(token);

(async () => {
  const status = await api
    .updateResume(resumeId, jsonData)
    .catch((err: AxiosError) => console.log(err.response?.data));
  console.log(status);
})();
