import { trpc } from '@/utils/trpc'

export default function Home() {

     return(
        <div className='h-screen w-screen flex flex-col justify-center items-center relative'>
          <div className='text-2xl text-center'>Which pokemon is Rounder</div>
          <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
            <div className='w-16 h-16 bg-red-200'></div>
            <div className='p-8'>Vs</div>
            <div className='w-16 h-16 bg-red-200'></div>
          </div>
        </div>

    )
  }
