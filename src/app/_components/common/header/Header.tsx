'use client';
import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../../public/logo.svg';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { HU, RO } from 'country-flag-icons/react/3x2';
import { Link as IntlLink } from '../../../../navigation';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Header = () => {
  const pathname = usePathname();
  const { locale: currentLocale } = useParams();
  const desktop = useMediaQuery('(min-width: 992px)');
  const t = useTranslations('common.menu');

  const languages = [
    { code: 'ro', label: 'Román' },
    { code: 'hu', label: 'Magyar' }
  ];

  const FlagIcon = ({ locale }: { locale: string }) => {
    switch (locale) {
      case 'ro':
        return <RO width={24} height={24} />;
      case 'hu':
        return <HU width={24} height={24} />;
      default:
        return null;
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={`/`}>
          <Image src={logo} alt='Home page' width={70} />
        </Link>
        <Link href={`#questionnaire`}>{t('questionnaire')}</Link>
        <Link href={`#program`}>{t('program')}</Link>
        <Link href={`#gallery`}>{t('gallery')}</Link>
        <Link href={`#location`}>{t('location')}</Link>
      </nav>
      <Box
        sx={{
          ml: 2,
          display: 'flex',
          gap: 1,
          position: desktop ? 'absolute' : 'unset',
          right: 20,
          top: 20,
          margin: '0 auto'
        }}>
        {languages
          .filter((lang) => lang.code !== currentLocale)
          .map((lang) => (
            <IntlLink
              key={lang.code}
              href={pathname === `/${currentLocale}` ? '/' : pathname.replace(`/${currentLocale}`, '')}
              locale={lang.code as 'ro' | 'hu'}
              style={{ textDecoration: 'none' }}>
              <IconButton
                size='small'
                sx={{
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}>
                <FlagIcon locale={lang.code} />
              </IconButton>
            </IntlLink>
          ))}
      </Box>
    </header>
  );
};

export default Header;
