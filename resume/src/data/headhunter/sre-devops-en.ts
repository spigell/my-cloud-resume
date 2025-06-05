import * as personal from '../common/personal';
import * as en from '../common/sre-devops-en';
import { HeadhunterResumeInfo } from './types';

export const resume: HeadhunterResumeInfo = {
  resumeId: '59b9dc79ff09cc48d80039ed1f7864386c7758',
  data: JSON.stringify(
    {
      title: 'SRE/DevOps engineer',
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
          url: en.data.basics.website,
        },
      ],
      experience: [
        {
          start: en.data.work.freelance.startDate + '-01',
          company: en.data.work.freelance.name,
          position: en.data.work.freelance.position,
          industries: [],
          description: en.data.work.freelance.summary,
        },
        {
          start: en.data.work.nda.startDate + '-01',
          end: en.data.work.nda.endDate + '-01',
          company: en.data.work.nda.name,
          position: en.data.work.nda.position,
          industries: [],
          description: en.data.work.nda.summary,
        },
        {
          company_url: en.data.work.gaijin.website,
          start: en.data.work.gaijin.startDate + '-01',
          end: en.data.work.gaijin.endDate + '-01',
          company: en.data.work.gaijin.name,
          position: en.data.work.gaijin.position,
          industries: [],
          description: en.data.work.gaijin.summary,
        },
        {
          company_url: en.data.work.yandex.website,
          start: en.data.work.yandex.startDate + '-01',
          end: en.data.work.yandex.endDate + '-01',
          company: en.data.work.yandex.name,
          position: en.data.work.yandex.position,
          industries: [],
          description: en.data.work.yandex.summary,
        },
        {
          company_url: en.data.work.rostelecom.website,
          start: en.data.work.rostelecom.startDate + '-01',
          end: en.data.work.rostelecom.endDate + '-01',
          company: en.data.work.rostelecom.name,
          position: en.data.work.rostelecom.position,
          industries: [],
          description: en.data.work.rostelecom.summary,
        },
        {
          company_url: en.data.work.equilibrium.website,
          start: en.data.work.equilibrium.startDate + '-01',
          end: en.data.work.equilibrium.endDate + '-01',
          company: en.data.work.equilibrium.name,
          position: en.data.work.equilibrium.position,
          industries: [],
          description: en.data.work.equilibrium.summary,
        },
        {
          company_url: en.data.work.restream.website,
          start: en.data.work.restream.startDate + '-01',
          end: en.data.work.restream.endDate + '-01',
          company: en.data.work.restream.name,
          position: en.data.work.restream.position,
          industries: [],
          description: en.data.work.restream.summary,
        },
      ],
      languages: [en.data.languages.russian, en.data.languages.english],
      certificate: [en.data.certificates.cka, en.data.certificates.cks],
      education: {
        level: {
          id: 'higher',
          name: 'Higher',
        },
        primary: [
          {
            name: en.data.education.institution,
            organization: 'Oli and Gas Fields',
            result: en.data.education.area,
            year: en.data.education.endDate.split('-')[0],
            education_level: {
              id: 'higher',
              name: 'Higher',
            },
          },
        ],
        additional: [
          {
            name: en.data.certificates.cks.name,
            organization: en.data.certificates.cks.issuer,
            year: en.data.certificates.cks.date.split('-')[0],
          },
          {
            name: en.data.certificates.cka.name,
            organization: en.data.certificates.cka.issuer,
            year: en.data.certificates.cka.date.split('-')[0],
          },
        ],
      },
      skills: en.data.basics.summary,
      skill_set: en.data.skills.flatMap((v) => [v.name, ...v.keywords]),
    },
    null,
    2,
  ),
};
