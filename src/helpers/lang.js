// Locales
export const locales = [
  {
    locale: 'en',
    name: 'English (US)',
    flag: '/img/flag/united-states-of-america.png'
  },
  {
    locale: 'id',
    name: 'Bahasa Indonesia',
    flag: '/img/flag/indonesia.png'
  }
]

// Languages
const loadedLanguages = {}
for (const locale of locales) {
  loadedLanguages[locale.locale] = require(`~/constants/locales/${locale.locale}`)
}

export const languages = loadedLanguages

export default {
  locales,
  languages
}
