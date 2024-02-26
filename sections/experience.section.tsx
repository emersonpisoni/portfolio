import ExperienceDivider from '@/components/experience-divider.component'
import { useTranslations } from 'next-intl';
import React from 'react'

export default function Experience() {
  const t = useTranslations('index.experience');
  return (
    <section id='section-experience' className='bg-gradient-to-b from-violet-800 to-violet-900 w-full py-20 flex justify-center items-center'>
      <div id='experience-list' className='relative w-1/2 flex flex-col'>
        <ExperienceDivider date='Nov 2019 - Jan 2024' company='CWI Software' role='Frontend Developer'>
          <ul className="list-disc">
            {t.rich('senior', {
              li: (chunks) => <li>{chunks}</li>,
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
              div: (chunks: any) => <div className='py-4'>{chunks}</div>
            })}
          </ul>
        </ExperienceDivider>
      </div>
    </section>
  )
}
