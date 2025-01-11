import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import logo from "../../../../../public/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          {/* Logo and Description Section */}
          <div className={styles.footer_brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src={logo} // Make sure to add your logo
                alt="Logo"
                width={120}
                height={120}
                priority
              />
            </Link>
            <p className={styles.brand_description}>
              Fedezd fel velünk a legszebb pillanatokat és oszd meg emlékeidet
              másokkal.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.footer_nav}>
            <h3>Navigáció</h3>
            <ul>
              <li>
                <Link href="#questionnaire">Kérdőív</Link>
              </li>
              <li>
                <Link href="#gallery">Galéria</Link>
              </li>
              <li>
                <Link href="#location">Helyszín</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={styles.footer_contact}>
            <h3>Kapcsolat</h3>
            <ul>
              <li>
                <a href="mailto:lgpap97@gmail.com">
                  <span className={styles.icon}>✉️</span>
                  lgpap97@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+36123456789">
                  <span className={styles.icon}>📞</span>
                  +36 30 198 5201
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

          {/* Social Links */}
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
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.footer_bottom}>
          <p className={styles.copyright}>
            © {currentYear} Liza és Gergő esküvője. Minden jog fenntartva.
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
