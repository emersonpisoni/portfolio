'use client'

import { useTranslations } from "next-intl"
import Image from "next/image"
import { PropsWithChildren } from "react"

type EducationDividerType = {
  src: string,
  alt: string,
  title: string,
  description: string,
  time: string,
  docImage: string
}

export default function Education() {
  const t = useTranslations('index.education')

  return <section id='section-education' className="flex flex-col items-center justify-center gap-10 py-24 w-full bg-gradient-to-b from-violet-700 to-violet-800">
    <div className="w-full flex justify-center gap-10 flex-wrap">
      <EducationDivider docImage="/images/diploma-facul.png" src='/images/ulbra.jpeg' alt='ulbra logo' title="ULBRA" description={t('badge.ulbra')} time="2017 - 2022" />
      <EducationDivider docImage="/images/diploma-ingles.jpeg" src='/images/uptime.jpg' alt='uptime logo' title="UPTIME" description={t('badge.uptime')} time="2019 - 2020" />
      <EducationDivider docImage="/images/diploma-tecnico.jpeg" src='/images/qi.jpeg' alt='qi logo' title='QI Escolas e Faculdades' description={t('badge.qi')} time="2014 - 2015" />
    </div>
  </section>
}

function EducationDivider({ src, alt, title, description, time, docImage }: EducationDividerType) {
  return (
    <div className="education-divider flex flex-col justify-center items-center gap-8">
      <PictureOnTheWall>
        <Image src={docImage} alt="teste" fill />
      </PictureOnTheWall>
      <div className="flex items-center rounded border border-violet-400/25 mx-2">
        <Image src={src} alt={alt} width={100} height={100} objectFit="contain" sizes="50%" className="rounded" />
        <div className="px-4">
          <h1 className="text-4xl text-yellow-100 font-bold">{title}</h1>
          <p>{description}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  )
}

function PictureOnTheWall({ children }: PropsWithChildren) {
  return <div className="picture animate-frame-shaking">
    <div className="hook"></div>
    <div className="frame">
      <div className="inside">{children}</div>
    </div>
  </div>
}