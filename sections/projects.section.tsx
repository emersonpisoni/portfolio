import EmblaCarousel from '@/components/carousel.component'
import { EmblaOptionsType } from 'embla-carousel'
import TCC from '../public/images/tcc.png'
import Crescer from '../public/images/aula-crescer.png'
import ModelPerson from '../public/images/model-person.png'
import { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'

export type CarouselContent = {
  image: StaticImageData,
  title: string,
  routeTo: string,
  description: string
}

export default function Projects() {
  const t = useTranslations('index.projects');

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES: CarouselContent[] = [
    {
      image: ModelPerson,
      title: t('crescer-final.carousel.title'),
      routeTo: "crescer-final",
      description: t('crescer-final.carousel.description')
    },
    {
      image: TCC,
      title: t('tcc.carousel.title'),
      routeTo: "tcc",
      description: t('tcc.carousel.description')
    },
    {
      image: Crescer,
      title: t('crescer.carousel.title'),
      routeTo: "crescer",
      description: t('crescer.carousel.description')
    }
  ]

  return (
    <section id='section-projects' className='bg-violet-800 w-full min-h-[calc(100vh-48px)] flex justify-center items-center'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  )
}
