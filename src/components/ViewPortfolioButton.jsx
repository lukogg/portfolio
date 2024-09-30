import './ViewPortfolioButton.css'
import Button from 'react-bootstrap/Button';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


function ViewPortfolioButton() {
  const{ t } = useTranslation();
  return (
    <>
      <Button variant="primary" href='#portfolio'>
        
      {t('Button1')}
      <FaGlobe style={{ marginLeft: '8px' }} />
      </Button>
    </>
  );
}

export default ViewPortfolioButton;