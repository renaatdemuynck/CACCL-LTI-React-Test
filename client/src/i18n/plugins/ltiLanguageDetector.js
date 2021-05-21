import { getStatus } from '../../caccl';


export const ltiLanguageDetector = {
    type: 'languageDetector',
    async: true,
    init: (services, detectorOptions, i18nextOptions) => { },
    detect: (callback) => {
        getStatus().then(status => {
            const lang = status?.launchInfo?.locale;

            callback(lang);
        }).catch(err => {
            callback();
        });
    },
    cacheUserLanguage: (lang) => { }
}
