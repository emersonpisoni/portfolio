import React from 'react'
import './Summary.scss'

type Props = {}

export function Summary({ }: Props) {
  return (
    <div className='summary'>
      <button>Sobre</button>
      <button>Experiência</button>
      <button>Projetos</button>
      <button>Mande um oi! 🖖</button>
    </div>
  )
}
