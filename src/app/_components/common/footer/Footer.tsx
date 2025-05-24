import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import logo from '../../../../../public/logo.svg';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          {/* Logo and Description Section */}
          <div className={styles.footer_brand}>
            <Link href='/' className={styles.logo}>
              <Image
                src={logo} // Make sure to add your logo
                alt='Logo'
                width={120}
                height={120}
                priority
              />
            </Link>
            <p className={styles.brand_description}>{t('footer.welcome')}</p>
          </div>

          {/* Navigation Links */}
          <div className={styles.footer_nav}>
            <h3>{t('footer.navigation')}</h3>
            <ul>
              <li>
                <Link href='#questionnaire'>{t('menu.questionnaire')}</Link>
              </li>
              <li>
                <Link href='#program'>{t('menu.program')}</Link>
              </li>
              <li>
                <Link href='#gallery'>{t('menu.gallery')}</Link>
              </li>
              <li>
                <Link href='#location'>{t('menu.location')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={styles.footer_contact}>
            <h3>{t('footer.contact')}</h3>
            <ul>
              <li>
                <a href='mailto:lgpap97@gmail.com'>
                  <span className={styles.icon}>✉️</span>
                  lgpap97@gmail.com
                </a>
              </li>
              <li>
                <a href='tel:+36123456789'>
                  <span className={styles.icon}>📞</span>
                  Gergő +36 30 198 5201
                </a>
              </li>
              <li>
                <a href='tel:+36707187287'>
                  <span className={styles.icon}>📞</span>
                  Liza +36 70 718 7287
                </a>
              </li>
              <li>
                <address>
                  <span className={styles.icon}>📍</span>
                  3349, Nagyvisnyó, Bán völgye út 1
                </address>
              </li>
            </ul>
          </div>

          {/* Social Links 
          <div className={styles.footer_social}>
            <h3>Közösségi média</h3>
            <div className={styles.social_links}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_button}
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_button}
              >
                Instagram
              </a>
            </div>
          </div>*/}
        </div>

        {/* Bottom Footer */}
        <div className={styles.footer_bottom}>
          <p className={styles.copyright}>
            © {currentYear} {t('footer.copy')}
          </p>
          {/* <div className={styles.legal_links}>
            <Link href="/privacy">Adatvédelem</Link>
            <span className={styles.divider}>|</span>
            <Link href="/terms">ÁSZF</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
