'use client'

import { useState } from 'react'
import { PiShuffle, PiEyeSlashBold, PiDogFill, PiEyeBold } from 'react-icons/pi'

export default function DogDetails({
  name,
  bred_for,
  breed_group,
  life_span,
  temperament,
}) {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='flex flex-row justify-between gap-2 p-2 px-20 m-2'>
        <button
          type='button'
          className='p-3 text-white bg-pink-600 rounded-full shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'
          onClick={() => setShow(true)}
        >
          <PiEyeBold size={30} />
        </button>
        <a
          href='/dog'
          type='button'
          className='p-3 text-white bg-pink-600 rounded-full shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'
        >
          <PiShuffle size={30} />
        </a>
      </div>
      {show && (
        <ul className='m-2 text-indigo-900'>
          <li className='text-2xl font-bold text-indigo-900'>{name}</li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Bred for:</b> {bred_for}
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Breed Group:</b> {breed_group}
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Life Span:</b> {life_span}
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Temperament: </b>
            {temperament}
          </li>
        </ul>
      )}
    </>
  )
}
