import React, { useEffect, useState } from 'react';
import Logo from '../assets/S_Logo_White.svg';
import './Header.css'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


function Header() {
    const{ t } = useTranslation();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('portfolio');

            if (section) {
                const rect = section.getBoundingClientRect();
                
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isHidden ? 'hidden' : 'visible'}`}>
            <img src={Logo} alt="Logo" className="logo fadeIn" style={{zIndex: '50'}}/>
            <nav className='htext htitle'>
            {/* <img src={Logo} alt="Logo" className="logo" href="/#" /> */}
                <svg width='100' height='80' style={{marginLeft: '-250px', zIndex: '20', position: 'absolute'}}>
                    <rect 
                    x1="0" y1="0"
                    width="100" height="100"
                    fill='black' stroke='black'
                    />
                </svg>
            <svg className='line' width="2" height="50" viewBox="0 0 2 50" style={{ marginLeft: '5px', marginRight: '10px', zIndex: '50'}}>
                <line
                    x1="1" y1="6"
                    x2="1" y2="44"
                    stroke='white' strokeWidth="100%"
                    className="animated-line"
                /> 
            </svg>
            <div className='slideInRightSlow' style={{zIndex: '-10', position: 'relative'}}>
                {t('HeaderText')}
            </div>
            </nav>
            <div className='slideInLeft' style={{marginLeft:'auto'}}>
            <LanguageSelector />
            </div>
        </header>
    );
}

export default Header;
