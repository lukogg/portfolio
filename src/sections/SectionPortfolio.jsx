import './Sections.css'; // Include CSS for grid styles

import React from 'react';
import ContentCard from '../components/ContentCard.jsx'; // Import the ContentCard component
import { useTranslation } from 'react-i18next';

import links from '../assets/links.json'

function SectionPortfolio() {
  const{ t } = useTranslation();

  return (
    <div className="section-portfolio" id="portfolio" style={{justifyContent: 'start'}}>
      <div className='h1' style={{marginTop: '1rem', marginBottom: '2rem', fontSize: '96px', textAlign:'center'}}>
      {t('PortfolioTitleMain')}
      </div>
      <div className='h1' style={{fontSize: '60px', textAlign:'center'}}>
      {t('PortfolioTitlePromo')}
      </div>
          <div className="card-container" style={{marginBottom: '2rem', gap: '3rem'}}>
            <ContentCard id="1" className='card contentcard-promo' href={links['Promo2.0-yt']} />
            <ContentCard id="2" className='card contentcard-promo' href={links['Promo2.1-yt']} />
            <ContentCard id="3" className='card contentcard-promo' href={links['Promo2.2-yt']} />

      </div>
      <div className='h1' style={{fontSize: '60px', textAlign:'center'}}>
      {t('PortfolioTitleLooped')}
      </div>
          <div className="card-container" style={{marginBottom: '2rem'}}>
            <ContentCard id="4" className='card contentcard-loop' noButton/>
            <ContentCard id="5" className='card contentcard-loop' />
            {/* <ContentCard id="6" className='contentcard-loop' /> */}
      </div>
      
    </div>
  );
}

export default SectionPortfolio;
