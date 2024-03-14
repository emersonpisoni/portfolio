'use client'

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathName = usePathname()
  console.log(pathName);

  const t = useTranslations('index')

  const redirectedPathName = (locale: any) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    console.log(segments);

    segments[1] = locale;
    return segments.join("/");
  };

  return <div className='flex top-1 right-1 absolute '>
    {t('switch') !== 'pt-BR' ? <Link locale={'en'} href={redirectedPathName('en')} className='rounded-full bg-white text-black font-bold'>
      <Image src={'/images/usa-flag.webp'} className='rounded-full' alt='user-image' width={50} height={50} />
    </Link> :
      <Link locale={'pt-BR'} href={redirectedPathName('pt-BR')} className='rounded-full bg-white text-black font-bold'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brazilian_flag_icon_round.svg/1200px-Brazilian_flag_icon_round.svg.png' className='rounded-full' alt='user-image' width={50} height={50} />
      </Link>
    }
  </div>
}