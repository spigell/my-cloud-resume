import { Work } from '../common/types';
import { HeadhunterExperience } from './types';

const buildDescription = (work: Work): string => {
  let description = work.summary?.trim();

  const highlights = work.highlights
    ?.map((highlight) => highlight.trim())
    .filter((highlight) => highlight.length > 0);

  if (highlights && highlights.length > 0) {
    description += `\n\nКлючевые достижения: \n - ${highlights.join('\n - ')}`;
  }

  return description;
};

export const workToHeadhunterExperience = (
  work: Work,
): HeadhunterExperience => {
  return {
    company: work.name,
    position: work.position,
    industries: [],
    description: buildDescription(work),
    start: `${work.startDate}-01`,
    ...(work.endDate ? { end: `${work.endDate}-01` } : {}),
    ...(work.website ? { company_url: work.website } : {}),
  };
};
