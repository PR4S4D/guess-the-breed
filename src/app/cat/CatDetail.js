'use client'

import { useState } from 'react'
import { PiShuffle, PiEyeSlashBold, PiDogFill, PiEyeBold } from 'react-icons/pi'

export default function CatDetails({
  name,
  wikipedia_url,
  description,
  life_span,
  temperament,
  origin,
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
          href='/cat'
          type='button'
          className='p-3 text-white bg-pink-600 rounded-full shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'
        >
          <PiShuffle size={30} />
        </a>
      </div>
      {show && (
        <ul className='m-2 text-indigo-900'>
          <li className='text-2xl font-bold text-indigo-900'>
            {name}
            <p className='text-base font-medium'>{description}</p>
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Origin:</b> {origin}
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Life Span:</b> {life_span}
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>Temperament: </b>
            {temperament}
          </li>
          <li className='text-lg text-indigo-800'>
            <b className='text-indigo-900'>
              <a target='#' href={wikipedia_url}>
                Wikipedia
              </a>
            </b>
          </li>
        </ul>
      )}
    </>
  )
}
