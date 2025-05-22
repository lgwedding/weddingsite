import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/_components/common/header/Header';
import Footer from '@/app/_components/common/footer/Footer';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Liza és Gergő',
  description: 'Liza és Gergő esküvőjének weboldala, minden amit tudni kell a lagzinkról'
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hu' }];
}

type Params = Promise<{ locale: 'en' | 'hu' }>;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
