'use-client'

import About from "@/sections/about.section";
import Header from "./header.component";
import Projects from "@/sections/projects.section";
import Experience from "@/sections/experience.section";
import { useState } from "react";

interface TurnOnOfAnimation {
  isPcOff: boolean
  isFirstAnimation: boolean
}

export default function Computer() {
  const [monitorAnimation, setMonitorAnimation] = useState<TurnOnOfAnimation>({ isPcOff: false, isFirstAnimation: true })

  const turnOnOffAnimationClassname = monitorAnimation.isPcOff ? 'animate-turning-off' : monitorAnimation.isFirstAnimation ? 'animate-delayed-turning-on' : 'animate-turning-on'
  const opacityAnimationClassname = monitorAnimation.isPcOff ? 'animate-turning-off-opacity' : monitorAnimation.isFirstAnimation ? 'animate-delayed-turning-on-opacity' : 'animate-turning-on-opacity'

  return (
    <div className='animate-zoom w-screen h-screen scale-[0.909] relative flex justify-center items-center'>
      <div className="overflow-auto flex relative w-screen h-screen items-start bg-black border-[24px] border-black rounded shadow-lg">
        <div className={`${opacityAnimationClassname} flex items-center justify-center w-[calc(100vw-48px)] h-[calc(100vh-48px)] fixed z-20 bg-black`}>
          <div className={`${turnOnOffAnimationClassname} bg-white`}></div>
        </div>
        <div className="fixed top-[23px] left-[24px] right-[30px] z-10">
          <Header />
        </div>
        <div className="flex flex-col w-full">
          <About />
          <Experience />
          <Projects />
        </div>
      </div >
      <div onClick={() => setMonitorAnimation({ isPcOff: !monitorAnimation.isPcOff, isFirstAnimation: false })} className={`w-2 h-4 ${monitorAnimation.isPcOff ? 'bg-red-500' : 'bg-green-500'} -bottom-0 right-10 absolute rounded-full`}></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-16 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-20 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-24 absolute rounded-full'></div>
      <div className='w-1/4 h-40 bg-slate-100 -bottom-8 absolute clip-path-pc-base -z-10'></div>
    </div >
  )
}