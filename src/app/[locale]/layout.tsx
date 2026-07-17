import { DefaultFooter } from "./components/DefaultFooter";
import { DefaultHeader } from "./components/DefaultHeader";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: "Adriano Castro",
  description: "Profile site developed by Adriano Castro",
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
