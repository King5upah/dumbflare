export type { Locale, Mood, Category, Intent, Script, UIStrings, LocaleData } from './types';

import en from './en';
import es from './es';
import fr from './fr';
import de from './de';
import ja from './ja';
import type { Locale, LocaleData } from './types';

export const LOCALES: Record<Locale, LocaleData> = { en, es, fr, de, ja };

export const getLocale = (locale: Locale): LocaleData => LOCALES[locale];
