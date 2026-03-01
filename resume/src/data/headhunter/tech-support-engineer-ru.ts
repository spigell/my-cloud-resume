import * as personal from '../common/personal';
import * as ru from '../common/tech-support-engineer-ru';
import { HeadhunterResumeInfo } from './types';
import { workToHeadhunterExperience } from './utils';

export const resume: HeadhunterResumeInfo = {
  resumeId: '71576be1ff102cf4f40039ed1f336a7861507a',
  data: JSON.stringify(
    {
      title: 'Инженер технической поддержки (L2) / SRE',
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
        workToHeadhunterExperience(ru.data.work.freelance),
        workToHeadhunterExperience(ru.data.work.amarkets),
        workToHeadhunterExperience(ru.data.work.gaijin),
        workToHeadhunterExperience(ru.data.work.yandex),
        workToHeadhunterExperience(ru.data.work.rostelecom),
        workToHeadhunterExperience(ru.data.work.equilibrium),
        workToHeadhunterExperience(ru.data.work.restream),
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
      skill_set: ru.data.skills
        .flatMap((v) => [v.name, ...v.keywords])
        .slice(0, 30),
    },
    null,
    2,
  ),
};
