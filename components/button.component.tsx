'use client'

import { PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
  id: string
}

export default function Button({ children, id }: IButton) {
  function scrollTo() {
    const element = document.getElementById(id)

    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return <button onClick={scrollTo} className="h-full w-full font-bold bg-gradient-to-br from-violet-700 to-violet-950  filter hover:hue-rotate-15 p-8 ">{children}</button>
}
