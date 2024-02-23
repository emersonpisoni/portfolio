import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function About() {
  const t = useTranslations('index');
  return (
    <section id='section-about' className='bg-gradient-to-b from-violet-700 to-violet-800 w-full h-[calc(100vh-48px)] flex flex-col justify-center items-center'>
      <Image src='https://avatars.githubusercontent.com/u/40845046?s=400&u=53469f66cc29d7eb4921603120b92639f09415f0&v=4' className='rounded-full pb-4' alt='user-image' width={200} height={200} />
      <h1 className='text-3xl pb-4'>🙂 {t('title')}</h1><br />
      <ul className="list-disc">
        <li className='text-2xl'>Apaixonado por tecnologia, sou formado em ciência da computação e especialista em frontend</li>
      </ul>
    </section>
  )
}
