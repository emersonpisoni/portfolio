import React from 'react'
import Button from './button.component'
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('index');
  return (
    <header className='flex [justify-content:safe_center] items-center overflow-y-auto backdrop-blur-md z-10'>
      <Button id='section-about'>{t('header.about')}</Button>
      <Button id='section-experience'>{t('header.experience')}</Button>
      <Button id='section-projects'>{t('header.projects')}</Button>
    </header>
  )
}
