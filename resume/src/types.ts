export interface Data {
  meta: Meta;
  basics: Basics;
  languages: { [key: string]: Language };
  work: { [key: string]: Work };
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
  company: string;
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
