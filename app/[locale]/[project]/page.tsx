'use client'

import Computer from "@/components/computer.component"
import { useTranslations } from "next-intl";
import Image from "next/image"
import BackArrow from '../../../public/images/back-arrow.svg'
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ScrollPositionContext } from "@/contexts/scrollPosition.context";

export default function Page({ params }: { params: { project: string } }) {
  const t = useTranslations('index.projects');
  const { setScrollPosition } = useContext(ScrollPositionContext)

  useEffect(() => setScrollPosition('section-projects'))

  return (
    <Computer>
      <div className="bg-gradient-to-b from-violet-700 to-violet-800 relative w-full min-h-[calc(100vh-48px)] pb-60 flex flex-col items-center">
        <header className="sticky -top-[1px] backdrop-blur-md flex justify-center w-full py-6 z-10">
          <Link href={`/`} className="flex items-center gap-4 w-1/2">
            <Image src={BackArrow} alt="back arrow icon" className="fill-white" width={30} />
            Voltar
          </Link>
        </header>
        <div className="max-w-[50%] relative flex-col flex">
          {t.rich(`${params.project}.description`, {
            h1: (chunks) => <h1 className="py-10 font-bold text-6xl ">{chunks}</h1>,
            image: (chunks) => <Image src={`${chunks}`} alt="" sizes="50%" width={0} height={0} className="w-full self-center py-10 hover:scale-125 transition-transform" />,
            p: (chunks: any) => <p className='py-5  text-xl'>{chunks}</p>,
            li: (chunks: any) => <li className='py-5  text-xl'>{chunks}</li>
          })}
        </div>
      </div>
    </Computer>
  )
}
