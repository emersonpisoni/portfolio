'use-client'

import { AnimationContext } from "@/contexts/animation.context";
import Image from "next/image";
import { PropsWithChildren, useContext, useEffect, useState } from "react";

export type TurnOnOffAnimation = {
  isPcOff?: boolean
}

type ComputerProps = TurnOnOffAnimation & PropsWithChildren

export default function Computer({ children, isPcOff }: ComputerProps) {
  const { isFirstRender, setIsFirstRender } = useContext(AnimationContext)
  const [monitorAnimation, setMonitorAnimation] = useState<TurnOnOffAnimation>({ isPcOff })
  const [turnOnOffAnimationClassname, setTurnOnOffAnimationClassname] = useState('')
  const [opacityAnimationClassname, setOpacityAnimationClassname] = useState('')

  useEffect(() => {
    if (isFirstRender) {
      onChangeAnimation(false)
      setIsFirstRender(false)
      return
    }

    setOpacityAnimationClassname('hidden')
  }, [])

  function onChangeAnimation(isPcOff: boolean) {
    setMonitorAnimation({ isPcOff })
    setTurnOnOffAnimationClassname(isPcOff ? 'animate-turning-off' : 'animate-turning-on')
    setOpacityAnimationClassname(isPcOff ? '' : 'animate-turning-on-opacity')
  }

  return (
    <div className={`w-screen h-screen scale-[0.909] relative flex justify-center items-center`}>
      <div className="overflow-auto flex relative w-screen h-dvh items-start bg-black border-[24px] border-black rounded shadow-lg">
        <div className={`${opacityAnimationClassname} flex items-center justify-center w-[calc(100vw-48px)] h-[calc(100dvh-48px)] fixed z-20 bg-black`}>
          <div className={`${turnOnOffAnimationClassname} bg-white`}></div>
        </div>
        {children}
      </div >
      <div onClick={() => onChangeAnimation(!monitorAnimation.isPcOff)} className={`w-5 h-5 ${monitorAnimation.isPcOff ? 'bg-red-500 shadow-red-500' : 'bg-green-500 shadow-green-500'} animate-power-button -bottom-0 right-8 absolute rounded-full hover:cursor-pointer flex justify-center items-center`}>
        <Image src={'/images/power-button.svg'} alt="power button" width={15} height={0} ></Image>
      </div>
      <div className='w-2 h-3 bg-white -bottom-0 right-16 absolute rounded-t-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-20 absolute rounded-t-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-24 absolute rounded-t-full'></div>
      <div className='w-1/4 h-40 bg-slate-100 -bottom-8 absolute clip-path-pc-base -z-10'></div>
    </div >
  )
}