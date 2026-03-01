import * as personal from '../common/personal';
import * as en from '../common/tech-support-engineer-en';
import { HeadhunterResumeInfo } from './types';
import { workToHeadhunterExperience } from './utils';

export const resume: HeadhunterResumeInfo = {
  resumeId: '1f4cfaaaff102cf57b0039ed1f324c43394439',
  data: JSON.stringify(
    {
      title: 'Technical Support Engineer (L2) / SRE',
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
        workToHeadhunterExperience(en.data.work.freelance),
        workToHeadhunterExperience(en.data.work.amarkets),
        workToHeadhunterExperience(en.data.work.gaijin),
        workToHeadhunterExperience(en.data.work.yandex),
        workToHeadhunterExperience(en.data.work.rostelecom),
        workToHeadhunterExperience(en.data.work.equilibrium),
        workToHeadhunterExperience(en.data.work.restream),
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
            organization: 'Oil and Gas Fields',
            result: en.data.education.area,
            year: en.data.education.endDate.split('-')[0],
            education_level: {
              id: 'higher',
              name: 'Higher',
            },
          },
        ],
        additional: Object.entries(en.data.certificates).map((v) => {
          return {
            name: v[1].name,
            organization: v[1].issuer,
            year: v[1].date.split('-')[0],
          };
        }),
      },
      skills: en.data.basics.summary,
      skill_set: en.data.skills
        .flatMap((v) => [v.name, ...v.keywords])
        .slice(0, 30),
    },
    null,
    2,
  ),
};
