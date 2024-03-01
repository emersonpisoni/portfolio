import React, { PropsWithChildren } from 'react'

interface IExperienceDivider extends PropsWithChildren {
  date: string,
  company: string,
  role: string
}

export default function ExperienceDivider({ date, company, role, children }: IExperienceDivider) {
  return (
    <div className='relative py-3'>
      <div className='xl:absolute -left-14 xl:border-r-4 border-white h-full '>
        <div className='xl:absolute bg-violet-800 p-2 mb-6 flex justify-center border-2 border-white -left-60'>{date}</div>
      </div>
      <div id='experience-crescer'>
        <div className='flex items-end pb-6 flex-wrap'>
          <h2 className='text-3xl font-bold pr-2'>{company} -</h2>
          <h3 className='text-2xl text-slate-300'>{role}</h3>
        </div>
        {children}
      </div>
    </div>
  )
}
