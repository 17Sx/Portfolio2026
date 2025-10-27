import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import translations from './translations.json'

type Language = 'en' | 'fr'
type TranslationKey = string
type Translations = typeof translations.en

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => any
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null
    return saved || 'en'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, key) => current?.[key], obj) || path
  }

  const t = (key: TranslationKey): any => {
    const translation = translations[language]
    return getNestedValue(translation, key)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useTranslations must be used within an I18nProvider')
  }
  return context
}
