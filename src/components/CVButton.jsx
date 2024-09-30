import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaDownload } from 'react-icons/fa';
import CV_Eng from '../files/CV_Rostyslav_Symonenko_Eng.pdf';
import CV_Ukr from '../files/CV_Rostyslav_Symonenko_Ukr.pdf';
import '../app.css';
import { useTranslation } from 'react-i18next';


function CVButton() {
  const{ t } = useTranslation();
  return (
    <DropdownButton id="dropdown-basic-button" variant='success' title={t('Button2')}
    menuAlign="left">
          <Dropdown.Item 
            href={CV_Eng} 
            className="compact-dropdown-item"
            target="_blank" 
            rel="noopener noreferrer"
            >
            {t('CVLang1')}
            <FaDownload />
          </Dropdown.Item>
          <Dropdown.Item 
            href={CV_Ukr} 
            className="compact-dropdown-item" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            {t('CVLang2')}
            <FaDownload />
          </Dropdown.Item>
    </DropdownButton>
  );
}

export default CVButton;
