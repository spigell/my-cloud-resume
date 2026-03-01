import { Work } from '../common/types';
import { HeadhunterExperience } from './types';

export interface WorkToHeadhunterExperienceOptions {
  highlightsTitle?: string;
}

const buildDescription = (
  work: Work,
  options: WorkToHeadhunterExperienceOptions = {},
): string => {
  let description = work.summary?.trim();
  const highlightsTitle = options.highlightsTitle ?? 'Key highlights';

  const highlights = work.highlights
    ?.map((highlight) => highlight.trim())
    .filter((highlight) => highlight.length > 0);

  if (highlights && highlights.length > 0) {
    description += `\n\n${highlightsTitle}:\n - ${highlights.join('\n - ')}`;
  }

  return description;
};

export const workToHeadhunterExperience = (
  work: Work,
  options: WorkToHeadhunterExperienceOptions = {},
): HeadhunterExperience => {
  return {
    company: work.name,
    position: work.position,
    industries: [],
    description: buildDescription(work, options),
    start: `${work.startDate}-01`,
    ...(work.endDate ? { end: `${work.endDate}-01` } : {}),
    ...(work.website ? { company_url: work.website } : {}),
  };
};
