import Button from "./button.component";

export default function Computer() {
  return (
    <div className='animate-zoom w-screen h-screen scale-90 relative flex justify-center items-center'>
      <div className="overflow-auto flex flex-col  items-center relative w-full h-full bg-white border-[20px] border-black rounded shadow-lg shadow-cyan-500/50">
        <div className='w-full bg-gradient-to-b from-violet-950 to-violet-900 min-h-screen h-svh flex justify-evenly items-center -m-1'>
          <Button>Sobre</Button>
          <Button>Skills</Button>
          <Button>Projetos</Button>
        </div>
        <div className='w-full bg-gradient-to-b from-violet-900 to-violet-800 min-h-screen h-svh flex justify-evenly items-center -m-1 '>
          <Button>Sobre</Button>
          <Button>Skills</Button>
          <Button>Projetos</Button>
        </div>
      </div >
      <div className='w-2 h-4 bg-red-600 -bottom-0 right-10 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-16 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-20 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-24 absolute rounded-full'></div>
      <div className='w-1/4 h-40 bg-slate-100 -bottom-8 absolute clip-path-pc-base -z-10'></div>
    </div >
  )
}