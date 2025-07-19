import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '@/shared/locales/en.json'
import ruCommon from '@/shared/locales/ru.json'
import kzCommon from '@/shared/locales/kz.json'

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  resources: {
    en: {
      translation: enCommon,
    },
    ru: {
      translation: ruCommon,
    },
    kz: {
      translation: kzCommon,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
