import React from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/images/en.png'; // Path to your English flag image
import khFlag from '../assets/images/kh.png'; // Path to your Khmer flag image

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="space-x-4">
            <button onClick={() => changeLanguage('en')} className="flex items-center space-x-2">
                <img src={enFlag} alt="English" className="w-6 h-4" />
                <span>EN</span>
            </button>
            <button onClick={() => changeLanguage('kh')} className="flex items-center space-x-2">
                <img src={khFlag} alt="Khmer" className="w-6 h-4" />
                <span>KH</span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
