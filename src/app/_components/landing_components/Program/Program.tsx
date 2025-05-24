'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './program.module.css';
import { Menu, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const Program = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState('');
  const { locale: currentLocale } = useParams();
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
            <p>{t('temple')}</p>
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
                {t('temple')}
              </Typography>
              <Typography variant='body2'>{t('temple_desc')}</Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_rings}
            onClick={(e) => handleClick(e, 'rings')}
            style={{ cursor: 'pointer' }}>
            <Image src='/rings.jpg' alt='rings icon' className={styles.rings_image} width={100} height={100} />
            <p>17:00</p>
            <p>{t('ceremony')}</p>
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
                {t('ceremony')}
              </Typography>
              <Typography variant='body2'>{t('ceremony_desc')}</Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_cake}
            onClick={(e) => handleClick(e, 'cake')}
            style={{ cursor: 'pointer' }}>
            <Image src='/cake.jpg' alt='cake icon' className={styles.cake_image} width={100} height={100} />
            <p>22:00</p>
            <p>{t('cake')}</p>
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
                {t('cake')}
              </Typography>
              <Typography variant='body2'>{t('cake_desc')}</Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_plate}
            onClick={(e) => handleClick(e, 'plate')}
            style={{ cursor: 'pointer', left: currentLocale === 'ro' ? '2rem' : '4rem' }}>
            <Image src='/plate.jpg' alt='plate icon' className={styles.plate_image} width={100} height={100} />
            <p>0:00</p>
            <p>{t('midnight')}</p>
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
                {t('midnight')}
              </Typography>
              <Typography variant='body2'>{t('midnight_desc')}</Typography>
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
            <p>{t('reception')}</p>
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
                {t('reception')}
              </Typography>
              <Typography variant='body2'>{t('reception_desc')}</Typography>
            </div>
          </Menu>
          <div
            className={styles.program_icon_camera}
            onClick={(e) => handleClick(e, 'camera')}
            style={{ cursor: 'pointer' }}>
            <Image src='/camera.jpg' alt='camera icon' className={styles.camera_image} width={100} height={100} />
            <p>18:00</p>
            <p>{t('photo')}</p>
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
                {t('photo')}
              </Typography>
              <Typography variant='body2'>{t('photo_desc')}</Typography>
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
            <p>{t('dinner')}</p>
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
                {t('dinner')}
              </Typography>
              <Typography variant='body2'>{t('dinner_desc')}</Typography>
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
