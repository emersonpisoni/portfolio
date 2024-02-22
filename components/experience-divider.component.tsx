import React, { PropsWithChildren } from 'react'

interface IExperienceDivider extends PropsWithChildren {
  date: string,
  company: string,
  role: string
}

export default function ExperienceDivider({ date, company, role, children }: IExperienceDivider) {
  return (
    <div className='relative pb-6'>
      <div className='absolute -left-14 border-r-4 border-white h-full'>
        <div className='absolute bg-violet-800 p-4 w-60 flex justify-center -left-60'>{date}</div>
      </div>
      <div id='experience-crescer'>
        <div className='flex items-end pb-6'>
          <h2 className='text-3xl font-bold pr-2'>{company} -</h2>
          <h3 className='text-2xl text-slate-300'>{role}</h3>
        </div>
        {children}
      </div>
    </div>
  )
}
