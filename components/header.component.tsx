import React from 'react'
import Button from './button.component'
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('index');
  return (
    <div className='h-full flex justify-evenly flex-col items-center border-black'>
      <Button id='section-about'>{t('header.about')}</Button>
      <Button id='section-experience'>{t('header.experience')}</Button>
      <Button id='section-projects'>{t('header.projects')}</Button>
    </div>
  )
}
