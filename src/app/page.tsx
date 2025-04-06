import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import logo from "../../public/logo.svg";
import gallery_preview from "../../public/gallery_preview (1).jpg";
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
          <div className={styles.program_inner_container}>
            <div className={styles.program}>
              <Image
                src="/church.jpg"
                alt="curch icon"
                className={styles.church_image}
                width={100}
                height={100}
              />
              <Image
                src="/rings.jpg"
                alt="curch icon"
                className={styles.rings_image}
                width={100}
                height={100}
              />
              <Image
                src="/cake.jpg"
                alt="curch icon"
                className={styles.cake_image}
                width={100}
                height={100}
              />
              <Image
                src="/plate.jpg"
                alt="curch icon"
                className={styles.plate_image}
                width={100}
                height={100}
              />
              <Image
                src="/footsteps.png"
                alt="Program schedule"
                width={250}
                height={500}
                className={styles.footsteps_image}
              />
              <Image
                src="/glasses.jpg"
                alt="curch icon"
                className={styles.glasses_image}
                width={100}
                height={100}
              />
              <Image
                src="/camera.jpg"
                alt="curch icon"
                className={styles.camera_image}
                width={100}
                height={100}
              />
              <Image
                src="/spoonandfork.jpg"
                alt="curch icon"
                className={styles.spoonandfork_image}
                width={100}
                height={100}
              />
            </div>
            {/* 
            <div className={styles.program_card}>
              <p className={styles.program_text}>15:00: Templomi szertartás</p>
              <p className={styles.program_text}>16:00: Vendégfogadás</p>
              <p className={styles.program_text}>17:30: Polgári ceremónia</p>
              <p className={styles.program_text}>18:00: Fotózás</p>
              <p className={styles.program_text}>19:30: Ünnepi vacsora</p>
              <p className={styles.program_text}>22:00: Esküvői torta</p>
              <p className={styles.program_text}>00:00: Éjféli falatozás</p>
            </div> */}
          </div>
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
              <Link
                href="https://sonder83.pixieset.com/lizaandgergo/"
                target="_blank"
                className={styles.gallery_button}
              >
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
