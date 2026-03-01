import * as personal from '../common/personal';
import * as ru from '../common/sre-devops-ru';
import { HeadhunterResumeInfo } from './types';
import { workToHeadhunterExperience } from './utils';

const ruExperience = (work: (typeof ru.data.work)[keyof typeof ru.data.work]) =>
  workToHeadhunterExperience(work, { highlightsTitle: 'Ключевые моменты' });

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
        ruExperience(ru.data.work.freelance),
        ruExperience(ru.data.work.amarkets),
        ruExperience(ru.data.work.gaijin),
        ruExperience(ru.data.work.yandex),
        ruExperience(ru.data.work.rostelecom),
        ruExperience(ru.data.work.equilibrium),
        ruExperience(ru.data.work.restream),
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
