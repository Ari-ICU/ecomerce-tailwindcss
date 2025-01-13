import React from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/images/en.png'; // Path to your English flag image
import khFlag from '../assets/images/kh.png'; // Path to your Khmer flag image

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const selectedLanguage = i18n.language;

    const changeLanguage = (lang) => {
        if (selectedLanguage !== lang) {
            i18n.changeLanguage(lang);
        }
    };

    return (
        <div className="space-x-4">
            <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center p-1 border rounded ${selectedLanguage === 'en' ? 'bg-gray-300 ' : ''}`}
                aria-pressed={selectedLanguage === 'en'}
                aria-label="Switch to English"
            >
                <img src={enFlag} alt="English" className="w-4 h-3" />
                <span className="sr-only">English</span>
            </button>
            <button
                onClick={() => changeLanguage('kh')}
                className={`flex items-center p-1 border rounded ${selectedLanguage === 'kh' ? 'bg-gray-300 text-black' : ''}`}
                aria-pressed={selectedLanguage === 'kh'}
                aria-label="Switch to Khmer"
            >
                <img src={khFlag} alt="Khmer" className="w-4 h-3" />
                <span className="sr-only">Khmer</span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
