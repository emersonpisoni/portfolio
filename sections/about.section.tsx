import { useTranslations } from 'next-intl';
import Image from 'next/image'
import JS from '../public/images/js.png'
import React from '../public/images/react.svg'
import TS from '../public/images/typescript.svg'
import Next from '../public/images/next-js.svg'
import Flutter from '../public/images/flutter.svg'
import Node from '../public/images/node.png'

export default function About() {
  const t = useTranslations('index');
  return (
    <section id='section-about' className='bg-gradient-to-b from-violet-700 to-violet-800 w-full py-40 h-[calc(100vh-48px)] flex justify-center items-center'>
      <Image src='https://avatars.githubusercontent.com/u/40845046?s=400&u=53469f66cc29d7eb4921603120b92639f09415f0&v=4' className='animate-border-gradient border-gradient' alt='user-image' width={300} height={300} />
      <div className='flex flex-col pl-24 w-[700px]'>
        <h1 className='text-6xl pb-8'>🙂 {t('title')}</h1>
        <span className='text-2xl'>{t('description')}</span>
        <div className='flex items-center pt-8'>
          <Image className='mr-8' src={JS} alt='js-image' width={50} height={50} />
          <Image className='mr-8' src={React} alt='react-image' width={50} height={50} />
          <Image className='mr-8' src={TS} alt='typescript-image' width={50} height={50} />
          <Image className='mr-8' src={Next} alt='next-image' width={50} height={50} />
          <Image className='mr-8' src={Node} alt='node-image' width={50} height={50} />
          <Image className='mr-8' src={Flutter} alt='flutter-image' width={50} height={50} />
        </div>
      </div>
    </section>
  )
}
