'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './program.module.css';
import { Menu, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const Program = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState('');
  const t = useTranslations('home.program');
  const handleClick = (event: any, menuId: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu('');
  };
  return (
    <div className={styles.program_container}>
      <h2 className={styles.section_title}>{t('title')}</h2>
      <p>{t('subtitle')}</p>
      <div className={styles.program_inner_container}>
        <div className={styles.program}>
          <div
            className={styles.program_icon_church}
            onClick={(e) => handleClick(e, 'curch')}
            style={{ cursor: 'pointer' }}>
            <Image src='/church.jpg' alt='curch icon' className={styles.church_image} width={100} height={100} />
            <p>15:00</p>
            <p>Templomi szertartás</p>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'curch'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Templomi szertartás
              </Typography>
              <Typography variant='body2'>
                Esküvőnk első helyszíne a szilvásváradi Református Kerektemplom, ahol 15 órától kezdődik a szertartás.
                Az egyházi esküvőt követően néhány közös kép készül a templom előtt, majd a vendégek egyidőben
                elindulnak a Boróka Táborba, Nagyvisnyóra, amely mindössze 8 kilométerre található Szilvásváradtól.
              </Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_rings}
            onClick={(e) => handleClick(e, 'rings')}
            style={{ cursor: 'pointer' }}>
            <Image src='/rings.jpg' alt='rings icon' className={styles.rings_image} width={100} height={100} />
            <p>17:00</p>
            <p>Polgári ceremónia</p>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'rings'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Polgári ceremónia
              </Typography>
              <Typography variant='body2'>
                A Boróka Tábor lankás, füves területén, a szabad ég alatt (remélhetőleg) 17 órától kezdetét veszi a
                hivatalos polgári esküvő.
              </Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_cake}
            onClick={(e) => handleClick(e, 'cake')}
            style={{ cursor: 'pointer' }}>
            <Image src='/cake.jpg' alt='cake icon' className={styles.cake_image} width={100} height={100} />
            <p>22:00</p>
            <p>Esküvői Torta</p>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'cake'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Esküvői Torta
              </Typography>
              <Typography variant='body2'>
                Előreláthatólag 22:00 óra magasságában érkezik a 3 különböző ízesítésben készített esküvői torta. 😊
              </Typography>
              <Typography variant='body2'>Torta ízesítés: Hamarosan...</Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_plate}
            onClick={(e) => handleClick(e, 'plate')}
            style={{ cursor: 'pointer' }}>
            <Image src='/plate.jpg' alt='plate icon' className={styles.plate_image} width={100} height={100} />
            <p>0:00</p>
            <p>Éjféli falatozás</p>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'plate'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Éjféli falatozás
              </Typography>
              <Typography variant='body2'>
                Éjféli falatozás keretében töltött káposztát kínálunk majd vendégeinknek. Előtte, utána és akár közben
                is, mehet az ünneplés!
              </Typography>
            </div>
          </Menu>
          <Image
            src='/footsteps.png'
            alt='Program schedule'
            width={250}
            height={500}
            className={styles.footsteps_image}
          />
          <div
            className={styles.program_icon_glasses}
            onClick={(e) => handleClick(e, 'glasses')}
            style={{ cursor: 'pointer' }}>
            <Image src='/glasses.jpg' alt='glasses icon' className={styles.glasses_image} width={100} height={100} />
            <p>16:00</p>
            <p>Vendégfogadás</p>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'glasses'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Vendégfogadás
              </Typography>
              <Typography variant='body2'>
                A tábor területére megérkezve, szabadtéren, egy kis vendégfogadással várjuk a násznépet, ahol lehet
                falatozni, beszélgetni, előkészülni a polgári ceremóniára.
              </Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_camera}
            onClick={(e) => handleClick(e, 'camera')}
            style={{ cursor: 'pointer' }}>
            <Image src='/camera.jpg' alt='camera icon' className={styles.camera_image} width={100} height={100} />
            <p>18:00</p>
            <p>Fotózás</p>
          </div>

          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'camera'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Fotózás
              </Typography>
              <Typography variant='body2'>
                A boldogító igenek után következhetnek a közös képek a násznéppel, illetve csoportosan, egyénileg. 😊 Az
                ifjú pár ekkor majd elmegy a fotós-videós csapattal kettesben is megörökíteni házasságuk első néhány
                percét az aranyóra meghitt fényeiben, ezalatt a vendégeknek különböző játékokkal is lehetőségük lesz
                elfoglalni magukat.
              </Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_spoonandfork}
            onClick={(e) => handleClick(e, 'spoonandfork')}
            style={{ cursor: 'pointer' }}>
            <Image
              src='/spoonandfork.jpg'
              alt='spoonandfork icon'
              className={styles.spoonandfork_image}
              width={100}
              height={100}
            />
            <p>19:30</p>
            <p>Ünnepi vacsora</p>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={activeMenu === 'spoonandfork'}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div style={{ padding: '1rem', maxWidth: 300 }}>
              <Typography variant='h6' gutterBottom>
                Ünnepi Vacsora
              </Typography>
              <Typography variant='body2'>
                A Boróka Tábor rendezvényhelyszínén 19:30-tól kezdődik majd a háromfogásos, hagyományos, ünnepi vacsora.
                A menüről bővebben majd az asztalokon elhelyezett táblákon olvashatnak a vendégek. A vacsora mellé Dudás
                Ferenc családi borászatának borkülönlegességei közül válogathatnak, illetve a Szabó család pálinkáiból.
                Emellett különböző röviditalok, sörök, és üdítők is lesznek az italkínálatban.
                <br />A vacsorán kívül természetesen az ünneplésen, szórakozáson és örömteli pillanatokon lesz a
                hangsúly! 😊
              </Typography>
            </div>
          </Menu>
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
  );
};

export default Program;
