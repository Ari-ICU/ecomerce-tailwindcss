import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationKH from './locales/kh/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        kh: {
            translation: translationKH,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

// Listen for language change and update class on <body>
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
    document.body.classList.remove('khmer-font', 'english-font');
    document.body.classList.add(lng === 'kh' ? 'khmer-font' : 'english-font');
});

export default i18n;
