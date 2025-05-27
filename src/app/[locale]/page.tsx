import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import gallery_preview from '../../../public/gallery_preview (1).jpg';
import CountdownTimer from '../_components/landing_components/Countdown/CountdownTimer';
import Program from '../_components/landing_components/Program/Program';
import Carousel from '../_components/landing_components/Carousel/Carousel';
import AccommodationInfo from '../_components/landing_components/Accomodation/AccomodationInfo';
import { getTranslations } from 'next-intl/server';
import { Params } from '@/types/params';
export default async function Home({ params }: { params: Params }) {
  // Fetch translations for the 'home' namespace
  const { locale } = await params;
  const t = await getTranslations('home');
  return (
    <main className={styles.main}>
      <div className={styles.intro_section}>
        <div className={styles.banner_image}></div>
        <div className={styles.welcome}>
          <Image src={logo} alt='logo' width={350} />
          <h1>{t('hero.title')}</h1>
        </div>
      </div>
      <CountdownTimer />
      <section id='questionnaire' className={styles.questionnaire_section}>
        <div className={styles.questionnaire_container}>
          <h2 className={styles.section_title}>{t('questionnaire.title')}</h2>
          <p className={styles.section_description}>{t('questionnaire.subtitle')}</p>
          <a
            href={locale == 'ro' ? 'https://forms.gle/w9Xigkq2VnH7rtbQ6' : 'https://forms.gle/FLMQjhdFXxcngAer6'}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.questionnaire_button}>
            {t('questionnaire.btn')}
          </a>
        </div>
      </section>
      <section id='program' className={styles.program_section}>
        <Program />
      </section>
      <section id='gallery' className={styles.gallery_section}>
        <div className={styles.gallery_container}>
          <h2 className={styles.section_title}>t{t('gallery.title')}</h2>
          <div className={styles.gallery_preview}>
            <Image
              src={gallery_preview}
              alt='Gallery preview'
              className={styles.preview_image}
              width={800}
              height={400}
              priority
            />
            <div className={styles.gallery_overlay}>
              <p className={styles.section_description}>{t('gallery.subtitle')}</p>
              <Link
                href='https://sonder83.pixieset.com/lizaandgergo/'
                target='_blank'
                className={styles.gallery_button}>
                {t('gallery.btn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.mapswrapper} id='location'>
        <h2 style={{ marginTop: '2rem' }} className={styles.section_title}>
          {t('location.title')}
        </h2>
        <div className={styles.accommodation_section}>
          <Carousel />
          <div className={styles.accommodation_info} style={{ lineHeight: locale === 'ro' ? '1.1rem' : '1.3rem' }}>
            <div className={styles.main_info}>
              <h4>{t('location.accomodation_title')}:</h4>
              <ul>
                <li>{t('location.accomodation_desc1')}</li>
                <li>{t('location.accomodation_desc2')}</li>
                <li>{t('location.accomodation_desc3')}</li>
                <li>{t('location.accomodation_desc4')}</li>
                <li>{t('location.accomodation_desc5')}</li>
              </ul>
              <h4>{t('location.room_title')}:</h4>
              <ul>
                <li>{t('location.room_desc1')}</li>
                <li>{t('location.room_desc2')}</li>
                <li>{t('location.room_desc3')}</li>
              </ul>
            </div>
          </div>
        </div>
        <AccommodationInfo />
        <iframe
          loading='lazy'
          className={styles.map}
          src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bor%C3%B3ka%20T%C3%A1bor%20&zoom=15&maptype=roadmap'></iframe>
      </div>
    </main>
  );
}
