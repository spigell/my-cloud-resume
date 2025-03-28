import { Name } from './common';

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

interface Basics {
  name: Name;
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
