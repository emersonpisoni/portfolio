import Button from '@/components/button.component'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full bg-teal-900 h-16 flex justify-evenly items-center'>
        <Button>Sobre</Button>
        <Button>Skills</Button>
        <Button>Projetos</Button>
      </div>
    </main>
  )
}
