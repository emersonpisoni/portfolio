'use client'

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

export type ScrollPositionType = {
  scrollPosition: string,
  setScrollPosition: Dispatch<SetStateAction<string>>
}

export const ScrollPositionContext = createContext<ScrollPositionType>({ scrollPosition: '', setScrollPosition: () => { } });

export default function ScrollPositionContextProvider({ children }: PropsWithChildren) {
  const [scrollPosition, setScrollPosition] = useState('')

  return (
    <ScrollPositionContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollPositionContext.Provider>
  )
}