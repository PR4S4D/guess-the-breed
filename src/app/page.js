import Image from 'next/image'
import Link from 'next/link'
import { PiCatFill, PiDogFill } from 'react-icons/pi'

export default function Home() {
  return (
    <>
      <div className='flex-col mx-auto align-middle'>
        <nav class='flex items-center justify-between flex-wrap bg-indigo-700 p-5'>
          <div class='flex items-center flex-shrink-0 text-pink-50 mr-5'>
            <span class='font-semibold text-xl tracking-tight px-2'>
              Guess the breed
            </span>
          </div>
        </nav>
      </div>
      <div className='grid h-screen pb-40 text-indigo-900 place-items-center'>
        <Link href='/dog'>
          <PiDogFill size={150} className='hover:text-indigo-700' />
        </Link>
        <Link href='/cat'>
          <PiCatFill size={150} className='hover:text-indigo-700' />
        </Link>
      </div>
    </>
  )
}
