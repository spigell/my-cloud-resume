export interface Data {
  meta: Meta;
  basics: Basics;
  languages: { [key: string]: Language };
  work: { [key: string]: Work };
  skills: Skill[];
  certificates: { [key: string]: Certificate };
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

interface Language {
  language: string;
  fluency: string;
}

interface Work {
  name: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
  website?: string;
}

interface Certificate {
  name: string;
  date: string;
  url: string;
  issuer: string;
}

interface Meta {
  version: string;
  lastModified: Date;
  'x-lang': string;
}

interface Basics {
  name: string;
  label: string;
  email: string;
  website: string;
  summary: string;
  profiles: Profile[];
}

type Skill = {
  name: string;
  level: string;
  keywords: string[];
};
