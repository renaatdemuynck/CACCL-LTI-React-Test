import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ltiLanguageDetector } from './plugins/ltiLanguageDetector';


i18n
    .use(initReactI18next)
    .use(ltiLanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translations: require('./locales/en.json')
            },
            nl: {
                translations: require('./locales/nl.json')
            }
        },
        ns: ['translations'],
        defaultNS: 'translations'
    });

i18n.languages = ['en', 'nl'];

export default i18n;
