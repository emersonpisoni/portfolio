import ExperienceDivider from '@/components/experience-divider.component'
import DownloadIcon from '@/components/icons/download.icon';
import { useTranslations } from 'next-intl';
import React, { useEffect, useReducer, useRef, useState } from 'react'

export default function Experience() {
  const t = useTranslations('index.experience');
  const ref = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [currentHeight, setCurrentHeight] = useState<string | undefined>('400px')

  const showMoreLessText = collapsed ? t('showMoreLessButton.more') : t('showMoreLessButton.less')

  useEffect(() => {
    window.addEventListener('resize', resizeWindow)

    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  function resizeWindow() {
    if (ref.current && !collapsed) {
      const height = ref.current?.scrollHeight.toString() + 'px'

      setCurrentHeight(height)
    }
  }

  function scrollTo() {
    const element = document.getElementById('section-experience')

    element?.scrollIntoView({ behavior: 'smooth' })
  }

  function showHideXP(collapsed: boolean) {
    if (ref.current) {
      setCurrentHeight(collapsed ? '400px' : `${ref.current.scrollHeight}px`)
      setCollapsed(collapsed)
      if (collapsed) scrollTo()
    }
  }

  return (
    <section id='section-experience' className={`bg-violet-800 w-full py-28 flex flex-col justify-center items-center`}>
      <div className='flex w-1/2 pb-10 items-center gap-4 flex-wrap'>
        <a className='p-4 rounded text-black font-bold transition-colors bg-violet-100 hover:bg-violet-200 flex justify-center items-center gap-4' href='/documents/cv_emerson_ptbr.pdf' download>CV Português<DownloadIcon width={20} height={20} /> </a>
        <a className='p-4 rounded text-black font-bold transition-colors bg-violet-100 hover:bg-violet-200 flex justify-center items-center gap-4' href='/documents/cv_emerson_en.pdf' download>Resume English<DownloadIcon width={20} height={20} /></a>
      </div>
      <div className='relative w-1/2 flex flex-col'>
        <div ref={ref} id='experience-list' style={{ maxHeight: currentHeight }} className={`transition-[max-height] duration-500  ${collapsed && 'overflow-hidden'} `}>
          <ExperienceDivider date='Nov 2019 - Jan 2024' company='CWI Software' role='Frontend Developer'>
            <ul className="list-disc">
              {t.rich('senior', {
                li: (chunks) => <li>{chunks}</li>,
                div: (chunks: any) => <div className='py-4 font-bold text-xl'>{chunks}</div>
              })}
            </ul>
          </ExperienceDivider>
          <ExperienceDivider date='Jan 2019 - Nov 2019' company='CWI Software' role='Frontend Developer Junior'>
            <ul className="list-disc">
              {t.rich('junior', {
                li: (chunks) => <li>{chunks}</li>,
              })}
            </ul>
          </ExperienceDivider>
          <ExperienceDivider date='Set 2018 - Dez 2018' company='CWI Software' role='Projeto Crescer'>
            <ul className="list-disc">
              {t.rich('crescer', {
                li: (chunks) => <li>{chunks}</li>,
                div: (chunks: any) => <div className='py-4 font-bold'>{chunks}</div>
              })}
            </ul>
          </ExperienceDivider>
        </div>
        {<div className={`bg-gradient-to-b from-transparent ${collapsed ? 'to-violet-800' : 'to-transparent'} content-[""] w-full h-full absolute`}></div>}
        <button onClick={() => showHideXP(!collapsed)} className='absolute -bottom-6 right-0  p-2 rounded'>{showMoreLessText}</button>
      </div>
    </section>
  )
}
