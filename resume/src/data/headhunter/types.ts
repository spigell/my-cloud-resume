export type HeadhunterExperience = {
  start: string;
  end?: string;
  company: string;
  company_url?: string;
  position: string;
  industries: unknown[];
  description: string[];
};

export type HeadhunterResumeInfo = {
  resumeId: string;
  data: string;
};
