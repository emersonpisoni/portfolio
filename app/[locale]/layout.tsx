import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Roboto_Mono } from "next/font/google";
import '../globals.css'

export const metadata: Metadata = {
  title: 'Emerson Pisoni',
  description: 'Portfolio',
}

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages()

  return (
    <html lang={locale} className={robotoMono.className}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}