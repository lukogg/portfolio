import { useTranslation } from 'react-i18next';
import { FaTelegramPlane, FaEnvelope } from 'react-icons/fa'; // Import icons

import "./Footer.css"
import links from '../assets/links.json'


function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer" style={{padding: '1rem'}}>
      <strong >
        {t('Contact')}
      </strong>
      <div>
      <div>
        <a href={links['Telegram-footer-link']} className='link-white-blue' style={{ display: 'flex', alignItems: 'center'}}>
          <FaTelegramPlane style={{ marginRight: '0.5rem', }} />
          {links['Telegram-footer-tag']}
        </a>
      </div>
      <div>
        <a href={`mailto:${links['Email']}`} className='link-white-blue' style={{ display: 'flex', alignItems: 'center' }}>
          <FaEnvelope style={{ marginRight: '0.5rem' }} />
          {links['Email']}
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
