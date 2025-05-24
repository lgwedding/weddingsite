import React from 'react';
import styles from './accomodationInfo.module.css';
import { useTranslations } from 'next-intl';

const AccommodationInfo = () => {
  const t = useTranslations('home.location');
  return (
    <div className={styles.accommodation_info}>
      <h3>{t('accomodation_info_title')}:</h3>
      <div className={styles.info_content}>
        <div className={styles.main_info}>
          <p>{t('accomodation_info_desc')}</p>
          <h4>{t('location')}:</h4> <p>{t('location_desc')}</p>
          <h4>{t('sights')}:</h4>
          <p>{t('sights_desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default AccommodationInfo;
