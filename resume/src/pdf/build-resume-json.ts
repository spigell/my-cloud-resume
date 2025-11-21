import { Data } from '../data/common/types';

type WorkKey = keyof Data['work'];

export interface BuildResumeJsonOptions {
  data: Data;
  lang: string;
  version?: string;
  workKeys?: WorkKey[];
  skillNames?: string[];
  certificateKeys?: (keyof Data['certificates'])[];
  languages?: { language: string; fluency: string }[];
}

const defaultWorkKeys: WorkKey[] = [
  'freelance',
  'amarkets',
  'gaijin',
  'yandex',
  'equilibrium',
  'rostelecom',
];

const defaultSkillNames = [
  'Kubernetes',
  'IaC',
  'Linux',
  'Cloud',
  'Databases',
  'CI/CD',
];

const defaultCertificateKeys: Array<keyof Data['certificates']> = [
  'cka',
  'cks',
];

export const buildResumeJson = ({
  data,
  lang,
  version = 'v0.0.1',
  workKeys = defaultWorkKeys,
  skillNames = defaultSkillNames,
  certificateKeys = defaultCertificateKeys,
  languages,
}: BuildResumeJsonOptions): string => {
  const work = workKeys
    .map((key) => data.work[key])
    .filter((entry): entry is Data['work'][keyof Data['work']] =>
      Boolean(entry),
    );

  const certificates = certificateKeys
    .map((key) => data.certificates[key])
    .filter(
      (entry): entry is Data['certificates'][keyof Data['certificates']] =>
        Boolean(entry),
    );

  const skills = data.skills.filter((skill) => skillNames.includes(skill.name));

  const languageEntries =
    languages ??
    [data.languages.russian, data.languages.english].filter(
      (langEntry): langEntry is Data['languages'][keyof Data['languages']] =>
        Boolean(langEntry),
    );

  const payload = {
    meta: {
      version,
      'x-lang': lang,
    },
    basics: data.basics,
    work,
    skills,
    certificates,
    languages: languageEntries,
  };

  return JSON.stringify(payload, null, 2);
};
