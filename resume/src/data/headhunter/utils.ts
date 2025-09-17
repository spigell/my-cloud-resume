import { Work } from '../common/types';
import { HeadhunterExperience } from './types';

const ensureHeadHunterDate = (value: string): string =>
  value.length === 7 ? `${value}-01` : value;

const buildDescriptionList = (work: Work): string[] => {
  const items: string[] = [];

  const summary = work.summary?.trim();
  if (summary) {
    items.push(summary);
  }

  const highlights = work.highlights
    ?.map((highlight) => highlight.trim())
    .filter((highlight) => highlight.length > 0);

  if (highlights && highlights.length > 0) {
    items.push(...highlights);
  }

  return items;
};

export const workToHeadhunterExperience = (
  work: Work,
): HeadhunterExperience => {
  return {
    company: work.name,
    position: work.position,
    industries: [],
    description: buildDescriptionList(work),
    start: ensureHeadHunterDate(work.startDate),
    ...(work.endDate ? { end: ensureHeadHunterDate(work.endDate) } : {}),
    ...(work.website ? { company_url: work.website } : {}),
  };
};
