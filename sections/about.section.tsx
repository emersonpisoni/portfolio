import React from 'react'

export default function About() {
  return (
    <section id='section-about' className='bg-gradient-to-b from-violet-700 to-violet-800 w-full h-[calc(100vh-48px)] flex flex-col justify-center items-center'>
      <h1 className='text-3xl pb-4'>🙂 Olá, sou Emerson</h1><br />
      <ul className="list-disc">
        <li className='text-2xl'>Apaixonado por tecnologia, sou formado em ciência da computação e sou especialista em frontend</li>
      </ul>
    </section>
  )
}
