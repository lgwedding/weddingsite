import React from 'react';
import styles from './accomodationInfo.module.css';

const AccommodationInfo = () => {
  return (
    <div className={styles.accommodation_info}>
      <h3>Szállással kapcsolatos tudnivalók:</h3>
      <div className={styles.info_content}>
        <div className={styles.main_info}>
          <p>A Boróka Táborban tudunk biztosítani szállást vendégeink számára szombat (08.30-a) estére. Aki igényelni szeretné, az kérjük jelezze a kérdőívben is, illetve egyeztessen velünk is (akár Gergőnek, akár Lizának szóljon). Fontos, hogy az itt elszállásolt vendégeink már 13:00-14:00 óra között érkezhetnek, hogy elfoglalják szobáikat, elkészüljenek. Innen indulhatnak a szilvásváradi templomba, ahol 15 órakor kezdődik az egyházi esküvő. Szilvásvárad mindössze 8 kilométerre van Nagyvisnyótól, így egyszerűen el lehet jutni egyik településről a másikra. 😊 </p>
    <h4>A helyszínről:</h4> <p>Nagyvisnyó a Bükki Nemzeti Park területén fekszik, Heves megye legészakibb részén, melynek legszebb része a Nagyvölgy. A falut két patak szeli át, a Szilvás-patak és a Nagyvölgy-patak, melyek a Bánvölgy-patakba torkollanak és a Lázbérci-víztározó vizét táplálják. Nagyvisnyó közigazgatási területéhez tartozik Bánkút, a &lsquo;síparadicsom&lsquo;. Természetes növényzetét sokféle erdő társulás alkotja, tölgyesekkel, bükkösökkel. Állatai nagy- és kisvadak, hüllők, madárfajok, rovarok.
</p>
          <h4>Látnivalók a környéken:</h4>
          <p>Szilvásvárad, Szalajka-völgy, Dédesi várrom, Lázbérci víztározó, Lillafüred, Eger</p>          
        </div>
      
      </div>
    </div>
  );
};

export default AccommodationInfo;