import React, { createContext, useContext, useMemo } from 'react';
import { getLocale } from './i18n';
import { detectLocale } from './NLPEngine';
import type { Locale, LocaleData } from './i18n/types';

interface LocaleContextValue {
  locale: Locale;
  data: LocaleData;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  data: getLocale('en'),
});

export const LocaleProvider: React.FC<{ locale?: Locale; children: React.ReactNode }> = ({
  locale: localeProp,
  children,
}) => {
  const locale = useMemo(() => localeProp ?? detectLocale(), [localeProp]);
  const data   = useMemo(() => getLocale(locale), [locale]);
  return <LocaleContext.Provider value={{ locale, data }}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextValue => useContext(LocaleContext);
