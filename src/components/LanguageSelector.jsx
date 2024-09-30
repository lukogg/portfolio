import React, { useState } from 'react';
import flagEN from '../assets/flagEN.svg'; // Import English flag
import flagUA from '../assets/flagUA.svg'; // Import Ukrainian flag
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './LanguageSelector.css'; // Ensure to include the CSS file

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button
        className={`flag-button ${selectedLanguage === 'en' ? 'active' : 'inactive'}`}
        onClick={() => handleSelect('en')}
        aria-label="English"
      >
        <img src={flagEN} alt="English" className="flag-icon" />
      </button>
      <button
        className={`flag-button ${selectedLanguage === 'ua' ? 'active' : 'inactive'}`}
        onClick={() => handleSelect('ua')}
        aria-label="Ukrainian"
      >
        <img src={flagUA} alt="Ukrainian" className="flag-icon" />
      </button>
    </div>
  );
}

export default LanguageSelector;
