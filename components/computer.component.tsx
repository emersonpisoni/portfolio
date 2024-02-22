import About from "@/sections/about.section";
import Header from "./header.component";
import Projects from "@/sections/projects.section";
import Experience from "@/sections/experience.section";

export default function Computer() {
  return (
    <div className='animate-zoom w-screen h-screen scale-[0.909] relative flex justify-center items-center'>
      <div className="overflow-auto flex  relative w-screen h-screen items-start bg-black border-[24px] border-black rounded shadow-lg">
        <div className="h-full sticky top-0">
          <Header />
        </div>
        <div className="overflow-auto flex flex-col w-full">
          <About />
          <Experience />
          <Projects />
        </div>
      </div >
      <div className='w-2 h-4 bg-green-500 -bottom-0 right-10 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-16 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-20 absolute rounded-full'></div>
      <div className='w-2 h-3 bg-white -bottom-0 right-24 absolute rounded-full'></div>
      <div className='w-1/4 h-40 bg-slate-100 -bottom-8 absolute clip-path-pc-base -z-10'></div>
    </div >
  )
}