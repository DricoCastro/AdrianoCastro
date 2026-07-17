import { DefaultFooter } from "./components/DefaultFooter";
import { DefaultHeader } from "./components/DefaultHeader";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://adrianocastrodev.vercel.app'),
  title: "Adriano Castro | Web & Mobile Developer",
  description: "I lead the front-end architecture and development of the NAVIA platform. Welcome to my portfolio.",
  openGraph: {
    title: "Adriano Castro | Web & Mobile Developer",
    description: "I lead the front-end architecture and development of the NAVIA platform. Welcome to my portfolio.",
    url: 'https://adrianocastrodev.vercel.app',
    siteName: 'Adriano Castro Portfolio',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Adriano Castro - Front-end Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Adriano Castro | Web & Mobile Developer",
    description: "I lead the front-end architecture and development of the NAVIA platform. Welcome to my portfolio.",
    images: ['/images/profile.png'],
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DefaultHeader />
          <main>{children}</main>
          <DefaultFooter />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
