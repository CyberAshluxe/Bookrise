import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Locale } from './translations'
import { translations, languageNames } from './translations'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  languageNames: typeof languageNames
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  const t = useMemo(
    () => (key: string) => translations[locale][key] ?? translations.en[key] ?? key,
    [locale],
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, languageNames }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
