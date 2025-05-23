import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={`/`}>
          <Image src={logo} alt="Home page" width={70} />
        </Link>
        <Link href={`#questionnaire`}>{"Kérdőív"}</Link>
        <Link href={`#program`}>{"Program"}</Link>
        <Link href={`#gallery`}>{"Galéria"}</Link>
        <Link href={`#location`}>{"Helyszín"}</Link>
      </nav>
    </header>
  );
};

export default Header;
