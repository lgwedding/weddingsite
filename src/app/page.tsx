import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import banner from "../../public/landing_banner.jpg";
import logo from "../../public/logo.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro_section}>
        <div className={styles.banner_image}></div>
        <div className={styles.welcome}>
          <Image src={logo} alt="logo" width={250} />
          <h1>Köszöntünk esküvőnk weboldalán!</h1>
        </div>
      </div>
      <section id="questionnaire" className={styles.questionnaire_section}>
        <div className={styles.questionnaire_container}>
          <h2 className={styles.section_title}>Kérdőív</h2>
          <p className={styles.section_description}>
            Szeretnénk, ha részesei lennétek ennek a különleges napnak. Kérjük,
            töltsétek ki kérdőívünket, hogy minden tökéletes legyen!
          </p>
          <a
            href="https://forms.gle/FLMQjhdFXxcngAer6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.questionnaire_button}
          >
            Kérdőív kitöltése
          </a>
        </div>
      </section>
      {/* <div className={styles.mapswrapper} id="location">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfUC0aLUovqn8S9e4U1BW2TvsyDb6ZDQM5CvHSCLw0TBF73Kg/viewform?embedded=true"
          width="640"
          height="1644"
        >
          Betöltés…
        </iframe>
      </div> */}
      <div className={styles.mapswrapper} id="location">
        <iframe
          loading="lazy"
          className={styles.map}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bor%C3%B3ka%20T%C3%A1bor%20&zoom=15&maptype=roadmap"
        ></iframe>
      </div>
    </main>
  );
}
