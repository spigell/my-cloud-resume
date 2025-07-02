import * as personal from '../common/personal';
import * as ru from '../common/sre-devops-ru';
import { HeadhunterResumeInfo } from './types';

export const resume: HeadhunterResumeInfo = {
  resumeId: 'a22559aeff0d608b840039ed1f4c4137784e4a',
  data: JSON.stringify(
    {
      title: 'SRE/DevOps инженер',
      site: [
        {
          type: {
            id: 'linkedin',
            name: 'LinkedIn',
          },
          url: personal.profiles.linkedin.url,
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
          start: ru.data.work.freelance.startDate + '-01',
          company: ru.data.work.freelance.name,
          position: ru.data.work.freelance.position,
          industries: [],
          description: ru.data.work.freelance.summary,
        },
        {
          start: ru.data.work.amarkets.startDate + '-01',
          end: ru.data.work.amarkets.endDate + '-01',
          company: ru.data.work.amarkets.name,
          position: ru.data.work.amarkets.position,
          industries: [],
          description: ru.data.work.amarkets.summary,
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
        additional: Object.entries(ru.data.certificates).map((v) => {
          return {
            name: v[1].name,
            organization: v[1].issuer,
            year: v[1].date.split('-')[0],
          };
        }),
      },
      skills: ru.data.basics.summary,
      skill_set: ru.data.skills.flatMap((v) => [v.name, ...v.keywords]),
    },
    null,
    2,
  ),
};
