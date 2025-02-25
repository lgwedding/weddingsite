import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import logo from "../../public/logo.svg";
import gallery_preview from "../../public/gallery_preview.webp";
import CountdownTimer from "./_components/CountdownTimer";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro_section}>
        <div className={styles.banner_image}></div>
        <div className={styles.welcome}>
          <Image src={logo} alt="logo" width={350} />
          <h1>Köszöntünk esküvőnk weboldalán!</h1>
        </div>
      </div>
      <CountdownTimer />
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
      <section id="program" className={styles.program_section}>
        <div className={styles.program_container}>
          <h2 className={styles.section_title}>Program</h2>
          <Image
            src="/program.png"
            alt="Program schedule"
            width={250}
            height={500}
            className={styles.program_image}
          />
        </div>
      </section>
      <section id="gallery" className={styles.gallery_section}>
        <div className={styles.gallery_container}>
          <h2 className={styles.section_title}>Galéria</h2>
          <div className={styles.gallery_preview}>
            <Image
              src={gallery_preview}
              alt="Gallery preview"
              className={styles.preview_image}
              width={800}
              height={400}
              priority
            />
            <div className={styles.gallery_overlay}>
              <p className={styles.section_description}>
                Tekintsd meg közös pillanatainkat és emlékeinket
              </p>
              <Link href="/gallery" className={styles.gallery_button}>
                Galéria megtekintése
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.mapswrapper} id="location">
        <h2 style={{ marginTop: "2rem" }} className={styles.section_title}>
          Helyszín
        </h2>
        <iframe
          loading="lazy"
          className={styles.map}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bor%C3%B3ka%20T%C3%A1bor%20&zoom=15&maptype=roadmap"
        ></iframe>
      </div>
    </main>
  );
}
