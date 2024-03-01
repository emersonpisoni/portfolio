'use client'
import Computer from '@/components/computer.component';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('index');

  return <main className="bg-gradient-to-br from-sky-500 via-purple-500 to-orange-500 animate-bg-animate flex min-h-dvh flex-col relative z-0 items-center justify-cente overflow-hidden">
    <Computer />
    <div className='flex top-1 right-1 absolute '>
      {t('switch') !== 'pt-BR' ? <Link locale={'en'} href={'/en'} className='rounded-full bg-white text-black font-bold'>
        <Image src='https://media.istockphoto.com/id/1038807838/vector/usa-flag-icon-isolated-on-white-background-united-states-round-badge-american-emblem-vector.jpg?s=612x612&w=0&k=20&c=NjjrFPQGSaD9sUJdAdbM3IQZaQcbnuV2O46oeuScWv8=' className='rounded-full' alt='user-image' width={50} height={50} />
      </Link> :
        <Link locale={'pt-BR'} href={'/pt-BR'} className='rounded-full bg-white text-black font-bold'>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brazilian_flag_icon_round.svg/1200px-Brazilian_flag_icon_round.svg.png' className='rounded-full' alt='user-image' width={50} height={50} />
        </Link>
      }
    </div>
  </main>
}