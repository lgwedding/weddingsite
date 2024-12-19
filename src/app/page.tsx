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
      <div className={styles.mapswrapper}>
        <iframe
          loading="lazy"
          className={styles.map}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bor%C3%B3ka%20T%C3%A1bor%20&zoom=15&maptype=roadmap"
        ></iframe>
      </div>
    </main>
  );
}
