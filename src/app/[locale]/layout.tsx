import { Inter } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}


export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<RootLayoutProps>) {
  const isRTL = locale === 'ar';
  const messages = await getMessages();
  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={inter.className}> 
      <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

