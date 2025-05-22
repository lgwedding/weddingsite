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
export default async function Home() {
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
            href='https://forms.gle/FLMQjhdFXxcngAer6'
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
          <h2 className={styles.section_title}>Galéria</h2>
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
              <p className={styles.section_description}>Tekintsd meg közös pillanatainkat és emlékeinket</p>
              <Link
                href='https://sonder83.pixieset.com/lizaandgergo/'
                target='_blank'
                className={styles.gallery_button}>
                Galéria megtekintése
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.mapswrapper} id='location'>
        <h2 style={{ marginTop: '2rem' }} className={styles.section_title}>
          Helyszín
        </h2>
        <div className={styles.accommodation_section}>
          <Carousel />
          <div className={styles.accommodation_info}>
            <div className={styles.main_info}>
              <h4>A szállásról:</h4>
              <ul>
                <li>A tábor 2 hektár területen fekszik</li>
                <li>120 fő elszállásolására van lehetőség egyidejűleg</li>
                <li>10 faház található a táborban, házanként 3 szobával</li>
                <li>4 ágyas szobákban történik az elhelyezés</li>
                <li>Páronként, családonként 1 szoba biztosított</li>
              </ul>
              <h4>Szobák felszereltsége:</h4>
              <ul>
                <li>Ágy, Ágybetét, Takaró, Párna, Ágyhuzat</li>
                <li>Szekrény, Szék, Asztal</li>
                <li>Faházanként közös wc., mosdó</li>
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
