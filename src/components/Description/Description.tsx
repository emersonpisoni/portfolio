import React, { LegacyRef, useEffect, useLayoutEffect, useRef } from 'react'
import "./Description.scss"
import emersonImage from '../../assets/emerson.jpg'

export function Description() {
  const imageRef = useRef<HTMLImageElement>(null)
  const nameRef = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    window.addEventListener('click', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  function onScroll() {
    if (imageRef.current != null) {
      imageRef.current.style.top = '-10px'
      imageRef.current.style.right = '-10px'
      imageRef.current.style.scale = `0.5`
    }
    if (nameRef.current != null) {
      nameRef.current.style.top = '-10px'
      nameRef.current.style.left = '-120px'
      nameRef.current.style.scale = `0.5`
    }
  }

  return (
    <div className='description'>
      <div ref={nameRef} className='text'>
        <p>Emerson Pisoni</p>
        <p>Sou desenvolvedor desde 2018</p>
        <p>Graduado em Ciências da Computação</p>
        <p>Trabalho com desenvolvimento Front-end</p>
        <p>Principalmente com as tecnologias ReactJS, Javascript, HTML e CSS</p>
      </div>
      <img ref={imageRef} className='image' alt='emerson' src={emersonImage} />
    </div>
  )
}