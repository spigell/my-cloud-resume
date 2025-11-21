import * as personal from './personal';
import { Data } from './types';
import { data as baseData } from './sre-devops-en';

export type WorkKey = keyof typeof baseData.work;

const experienceKeyMap: Record<WorkKey, keyof typeof personal.experience> = {
  freelance: 'selfemployed',
  amarkets: 'amarkets',
  gaijin: 'gaijin',
  yandex: 'yandex',
  rostelecom: 'rostelecom',
  equilibrium: 'equilibrium',
  restream: 'restream',
};

const stackLine = (key: WorkKey): string | undefined => {
  const experience = personal.experience[experienceKeyMap[key]];
  const stack = experience?.stack ?? [];
  if (!stack.length) {
    return undefined;
  }
  return `Stack: ${stack.join(', ')}`;
};

export const withStack = (key: WorkKey, highlights: string[]): string[] => {
  const stack = stackLine(key);
  return stack ? [...highlights, stack] : highlights;
};

export const createVariantWork = (
  variantHighlights: Partial<Record<WorkKey, string[]>>,
): Data['work'] =>
  Object.fromEntries(
    Object.entries(baseData.work).map(([key, entry]) => [
      key,
      {
        ...entry,
        highlights: (variantHighlights[key as WorkKey] ??
          entry.highlights ??
          []) as string[],
      },
    ]),
  ) as Data['work'];
