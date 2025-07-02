import { Name } from './personal';

export interface Data {
  basics: Basics;
  languages: { [key: string]: Language };
  work: { [key: string]: Work };
  skills: Skill[];
  education: Education;
  certificates: { [key: string]: Certificate };
}

export type Education = {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  score?: string;
  courses?: string[];
};

export type Profile = {
  network: string;
  username: string;
  url: string;
};

interface Language {
  language: string;
  fluency: string;
}

export interface Work {
  name: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
  website?: string;
}

export type Certificate = {
  name: string;
  date: string;
  url: string;
  issuer: string;
};

interface Basics {
  name: Name;
  label: string;
  email: string;
  website: string;
  summary: string;
  profiles: Profile[];
}

export type Skill = {
  name: string;
  level: string;
  keywords: string[];
};
