import * as personal from './personal';
import { Data } from './types';
import { data as baseData } from './sre-devops-en';

export type WorkKey = keyof typeof baseData.work;

export enum StackLabel {
  English = 'Stack',
  Russian = 'Стек',
}

const experienceKeyMap: Record<WorkKey, keyof typeof personal.experience> = {
  trading_startup: 'selfemployed',
  amarkets: 'amarkets',
  gaijin: 'gaijin',
  yandex: 'yandex',
  rostelecom: 'rostelecom',
  equilibrium: 'equilibrium',
  restream: 'restream',
};

const stackLine = (
  key: WorkKey,
  label: StackLabel | string,
): string | undefined => {
  const experience = personal.experience[experienceKeyMap[key]];
  const stack = experience?.stack ?? [];
  if (!stack.length) {
    return undefined;
  }
  return `${label}: ${stack.join(', ')}`;
};

export const withStack = (
  key: WorkKey,
  highlights: string[],
  label: StackLabel | string = StackLabel.English,
): string[] => {
  const stack = stackLine(key, label);
  return stack ? [...highlights, stack] : highlights;
};

export const createVariantWork = (
  variantHighlights: Partial<Record<WorkKey, string[]>>,
  baseWork: Data['work'] = baseData.work,
): Data['work'] =>
  Object.fromEntries(
    Object.entries(baseWork).map(([key, entry]) => [
      key,
      {
        ...entry,
        highlights: (variantHighlights[key as WorkKey] ??
          entry.highlights ??
          []) as string[],
      },
    ]),
  ) as Data['work'];
