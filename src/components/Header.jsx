import React, { useEffect, useState } from 'react';
import Logo from '../assets/S_Logo_White.svg';
import './Header.css'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


function Header() {
    const{ t } = useTranslation();
    const [isHidden, setIsHidden] = useState(false); // State to track if the header is hidden

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('portfolio');

            if (section) {
                const rect = section.getBoundingClientRect();
                
                // Hide the header when the SectionPortfolio is in view
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setIsHidden(true);
                } else {
                    // Show the header if user scrolls back up past the section
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isHidden ? 'hidden' : 'visible'}`}>
            <img src={Logo} alt="Logo" className="logo" href="/#" />
            <nav className='htext'>
                | {t('HeaderText')}
            </nav>
            <div className='htext' style={{marginLeft:'auto'}}>
            <LanguageSelector />
            </div>
        </header>
    );
}

export default Header;
