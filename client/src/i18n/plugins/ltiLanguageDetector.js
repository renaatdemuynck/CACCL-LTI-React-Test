import { getStatus } from '../../caccl';


export const ltiLanguageDetector = {
    type: 'languageDetector',
    async: true,
    init: (services, detectorOptions, i18nextOptions) => { },
    detect: (callback) => {
        const browserLang = window.navigator.language;

        getStatus().then(status => {
            // Get language from LTI launch info, fallback to browser language
            const lang = status?.launchInfo?.locale || browserLang;

            callback(lang);
        }).catch(err => {
            // Fallback to browser language on error
            callback(browserLang);
        });
    },
    cacheUserLanguage: (lang) => { }
}
