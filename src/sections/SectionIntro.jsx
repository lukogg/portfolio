import ViewPortfolioButton from "../components/ViewPortfolioButton";
import CVButton from "../components/CVButton";
import { useTranslation } from 'react-i18next';

function SectionIntro() {
    const{ t } = useTranslation();

  return (
    <div className="section-intro">
      <h1 className=''>{t('Intro_h1')}</h1>
      <h2 className='' style={{color:'#ffffff70'}}>{t('Intro_h2')}</h2>
      <div className='herobuttons' style={{ marginTop: '1rem' }}>
        <ViewPortfolioButton />
        <CVButton />
      </div>
    </div>
  );
}

export default SectionIntro;
