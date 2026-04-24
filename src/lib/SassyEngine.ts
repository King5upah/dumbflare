export type { Mood, Category } from './i18n/types';

import { getLocale } from './i18n';
import type { Mood, Category, Locale } from './i18n/types';

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const MOOD_POOL: Mood[] = [
  'hostile', 'hostile', 'hostile',
  'exasperated', 'exasperated',
  'paranoid', 'paranoid',
  'bored',
  'corrupt',
];

export const pickMood = (): Mood => pick(MOOD_POOL);

export const getSassyResponse = (category: Category, mood?: Mood, locale: Locale = 'en'): string => {
  const m = mood ?? pickMood();
  return pick(getLocale(locale).sassyResponses[category][m]);
};

export const getHumanityScore = (failCount: number): number =>
  Math.min(failCount * 34, 100);

export const getHumanityLabel = (score: number, locale: Locale = 'en'): { label: string; color: string } => {
  const ui = getLocale(locale).ui;
  if (score >= 100) return { label: ui.barelyHuman,          color: 'text-emerald-400' };
  if (score >= 67)  return { label: ui.suspiciouslyOrganic,  color: 'text-yellow-400'  };
  if (score >= 34)  return { label: ui.biologicalAnomaly,    color: 'text-orange-400'  };
  return               { label: ui.confirmedClanker,       color: 'text-red-400'     };
};
