import type { Locale, Intent } from './i18n/types';

const SUPPORTED: Locale[] = ['en', 'es', 'fr', 'de', 'ja'];

const intentPatterns: Record<Locale, { yes: RegExp; no: RegExp }> = {
  en: {
    yes: /\b(yes|yeah|yep|yup|yass|sure|correct|absolutely|of course|true|affirmative|duh|obviously|definitely|totally|ofc|aha|yessir|ok|okay|mhm|uh.?huh)\b/i,
    no:  /\b(no|nope|nah|never|negative|not really|of course not|absolutely not|hell no|false)\b/i,
  },
  es: {
    yes: /\b(si|sí|claro|por supuesto|obvio|afirmativo|exacto|cierto|dale|sale|va|órale|ándale|simón)\b/i,
    no:  /\b(no|nunca|jamas|jamás|para nada|falso|claro que no|nel|nel pastel|nop|de ninguna manera)\b/i,
  },
  fr: {
    yes: /\b(oui|ouais|bien sûr|absolument|évidemment|effectivement|certes|tout à fait|affirmatif|ok|d'accord)\b/i,
    no:  /\b(non|nan|jamais|absolument pas|bien sûr que non|négatif|pas du tout|en aucun cas)\b/i,
  },
  de: {
    yes: /\b(ja|jawohl|natürlich|selbstverständlich|klar|absolut|genau|richtig|affirmativ|ok|okay|sicher)\b/i,
    no:  /\b(nein|nee|niemals|auf keinen fall|natürlich nicht|negativ|keineswegs|überhaupt nicht)\b/i,
  },
  ja: {
    yes: /(はい|ええ|そうです|そうだ|もちろん|確かに|正しい|肯定|うん|そうですね)/,
    no:  /(いいえ|いや|ちがう|違う|違います|絶対に違う|否定|そうではない|まさか|ノー)/,
  },
};

export const detectLocale = (override?: string): Locale => {
  if (override && SUPPORTED.includes(override as Locale)) return override as Locale;

  const lang = (typeof navigator !== 'undefined' ? navigator.language : 'en') ?? 'en';
  const tag = lang.split('-')[0].toLowerCase();

  if (SUPPORTED.includes(tag as Locale)) return tag as Locale;
  return 'en';
};

export const classifyIntent = (text: string, locale: Locale): Intent => {
  const patterns = intentPatterns[locale] ?? intentPatterns.en;
  if (patterns.yes.test(text)) return 'yes';
  if (patterns.no.test(text))  return 'no';

  // Fallback: also check English patterns for bilingual users
  if (locale !== 'en') {
    if (intentPatterns.en.yes.test(text)) return 'yes';
    if (intentPatterns.en.no.test(text))  return 'no';
  }

  return 'indeterminate';
};

export const nlpLabel = (locale: Locale): string => {
  const labels: Record<Locale, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    ja: '日本語',
  };
  return labels[locale];
};
