import Button from '@/components/button.component'

export default function Home() {
  return (
    <main className="bg-space flex min-h-screen flex-col relative z-0 items-center justify-center bg-slate-950">
      <div className=' relative flex justify-center'>
        <div className="flex flex-col items-center relative justify-between w-96 h-60 bg-slate-200 border-8 border-black rounded shadow-lg shadow-cyan-500/50 ">
          <div className='w-full bg-teal-900 h-16 flex justify-evenly items-center blur '>
            <Button>Sobre</Button>
            <Button>Skills</Button>
            <Button>Projetos</Button>
          </div>
          <div className='w-2 h-2 bg-red-600 -bottom-2 right-5 absolute rounded-full '></div>
        </div>
        <div className='w-40 h-40 bg-slate-100 -bottom-8 absolute clip-path-pc-base -z-10'></div>
      </div>
    </main>
  )
}
