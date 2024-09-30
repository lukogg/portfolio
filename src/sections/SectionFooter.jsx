import { useTranslation } from 'react-i18next';


function SectionFooter() {
  const{ t } = useTranslation();
  return (
    <footer className="section-footer">
      <strong style={{marginLeft:'4rem', marginRight:'4rem'}}>{t('Contact')}<a href="mailto:symonenkorostyslav@gmail.com">symonenkorostyslav@gmail.com</a></strong>
    </footer>
  );
}

export default SectionFooter;
