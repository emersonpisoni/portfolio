'use client'

import Computer from '@/components/computer.component';
import Header from '@/components/header.component';
import { ScrollPositionContext } from '@/contexts/scrollPosition.context';
import About from '@/sections/about.section';
import Contact from '@/sections/contact.section';
import Education from '@/sections/education.section';
import Experience from '@/sections/experience.section';
import Projects from '@/sections/projects.section';
import { scrollToUtil } from '@/utils/scrollTo.util';
import { useTranslations } from 'next-intl';
import { useContext, useEffect } from 'react';

export default function Index() {
  const t = useTranslations('index');
  const { scrollPosition } = useContext(ScrollPositionContext)

  useEffect(() => {
    scrollToUtil(scrollPosition)
  }, [])

  return <main className=" flex max-h-dvh flex-col relative z-0 items-center justify-cente overflow-hidden">
    <Computer>
      <>
        <div className="fixed top-[23px] left-[24px] right-[30px] z-10">
          <Header />
        </div>
        <div className="flex flex-col w-full">
          <About />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </div>
      </>
    </Computer>

  </main>
}