'use client'
import Computer from '@/components/computer.component';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Index() {
  const pathname = usePathname()
  const t = useTranslations('index');

  return <main className="bg-gradient-to-br from-sky-500 via-purple-500 to-orange-500 animate-bg-animate flex min-h-screen flex-col relative z-0 items-center justify-cente overflow-hidden">
    <Computer />
    <Link locale='pt-BR' href={pathname} className='w-40 h-20 top-0 right-0 absolute bg-white text-black font-bold'>
      Switch to {pathname}
    </Link>
  </main>
}