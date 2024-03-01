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

  return <button onClick={scrollTo} className="font-bold transition hover:bg-purple-600 p-4 text-xl">{children}</button>
}
