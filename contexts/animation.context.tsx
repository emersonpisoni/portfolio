'use client'

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

export type AnimationContextType = {
  isFirstRender: boolean,
  setIsFirstRender: Dispatch<SetStateAction<boolean>>
}

export const AnimationContext = createContext<AnimationContextType>({ isFirstRender: true, setIsFirstRender: () => { } });

export default function AnimationContextProvider({ children }: PropsWithChildren) {
  const [isFirstRender, setIsFirstRender] = useState(true)

  return (
    <AnimationContext.Provider value={{ isFirstRender, setIsFirstRender }}>
      {children}
    </AnimationContext.Provider>
  )
}