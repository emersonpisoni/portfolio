import React from 'react'
import Button from './button.component'

export default function Header() {
  return (
    <div className='h-full flex justify-evenly flex-col items-center border-black'>
      <Button id='section-about'>Sobre</Button>
      <Button id='section-skills'>Skills</Button>
      <Button id='section-projects'>Projetos</Button>
    </div>
  )
}
