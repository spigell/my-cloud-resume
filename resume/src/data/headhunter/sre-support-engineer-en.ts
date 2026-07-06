import * as personal from '../common/personal';
import * as en from '../common/sre-support-engineer-en';
import { HeadhunterResumeInfo } from './types';
import { workToHeadhunterExperience } from './utils';

export const resume: HeadhunterResumeInfo = {
  resumeId: '1f4cfaaaff102cf57b0039ed1f324c43394439',
  data: JSON.stringify(
    {
      title: en.data.basics.label,
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
        workToHeadhunterExperience(en.data.work.trading_startup),
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
      skill_set: [
        'Web3.js',
        'Ethereum',
        'Solana',
        'Blockchain',
        'Node Operations',
        'Claude (AI)',
        'Gemini (AI)',
        'Linux',
        'Prometheus',
        'Grafana',
        'ELK',
        'Loki',
        'Sentry',
        'PostgreSQL',
        'Incident Response',
        'Troubleshooting',
        'Root Cause Analysis',
        'Kubernetes',
        'Docker',
        'REST API',
        'WebSocket',
        'JSON-RPC',
        'GitLab CI',
        'GitHub Actions',
        'Ansible',
        'Pulumi',
        'Terraform',
        'Redis',
        'Python',
        'Golang',
      ],
    },
    null,
    2,
  ),
};
