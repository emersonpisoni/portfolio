import { Metadata } from "next";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import { Roboto_Mono } from "next/font/google";
import '../globals.scss'
import AnimationContextProvider from "@/contexts/animation.context";
import ScrollPositionContextProvider, { ScrollPositionContext } from "@/contexts/scrollPosition.context";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/language-switcher.component";

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
      <body className="bg-gradient-to-br from-sky-500 via-purple-500 to-orange-500 animate-bg-animate">
        <ScrollPositionContextProvider>
          <AnimationContextProvider>
            <NextIntlClientProvider messages={messages} locale={locale}>
              {children}
              <LanguageSwitcher />
            </NextIntlClientProvider>
          </AnimationContextProvider>
        </ScrollPositionContextProvider>
      </body>
    </html>
  );
}