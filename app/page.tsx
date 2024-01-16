import Button from '@/components/button.component'

export default function Home() {
  return (
    <main className="bg-space flex min-h-screen flex-col relative z-0 items-center justify-center bg-slate-950 overflow-hidden">
      {/* computer */}
      <div className='animate-zoom w-screen h-screen relative flex justify-center items-center'>
        {/* Screen */}
        <div className="overflow-auto flex flex-col  items-center relative justify-between w-full h-full bg-slate-200 border-[20px] border-black rounded shadow-lg shadow-cyan-500/50 ">
          <div className='w-full bg-teal-900 min-h-screen h-screen flex justify-evenly items-center animate-blur'>
            <Button>Sobre</Button>
            <Button>Skills</Button>
            <Button>Projetos</Button>
          </div>
          <div className='w-full bg-teal-900 min-h-screen h-screen flex justify-evenly items-center animate-blur'>
            <Button>Sobre</Button>
            <Button>Skills</Button>
            <Button>Projetos</Button>
          </div>
        </div>
        <div className='w-2 h-4 bg-red-600 -bottom-0 right-10 absolute rounded-full '></div>
        <div className='w-2 h-3 bg-white -bottom-0 right-16 absolute rounded-full '></div>
        <div className='w-2 h-3 bg-white -bottom-0 right-20 absolute rounded-full '></div>
        <div className='w-2 h-3 bg-white -bottom-0 right-24 absolute rounded-full '></div>
        {/* base */}
        <div className='w-1/4 h-40 bg-slate-100 -bottom-8 absolute clip-path-pc-base -z-10'></div>
      </div>
    </main>
  )
}
