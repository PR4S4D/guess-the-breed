import Image from 'next/image'
import React from 'react'
import { PiShuffle, PiEyeSlashBold, PiDogFill, PiEyeBold } from 'react-icons/pi'
import DogDetails from './DogDetails'
import Link from 'next/link'

export default async function Dog() {
  let randomResult = await getRandomResult()
  let { url, width, height } = randomResult[0]
  let { name, bred_for, breed_group, life_span, temperament } =
    randomResult[0].breeds[0]

  return (
    <div className='flex-col mx-auto align-middle'>
      <nav className='flex flex-wrap items-center justify-between p-5 bg-indigo-700 '>
        <div className='flex items-center flex-shrink-0 mr-5 text-pink-50'>
          <PiDogFill size={25} />
          <span className='px-2 text-xl font-semibold tracking-tight'>
            <Link href='/'>Guess the breed</Link>
          </span>
        </div>
      </nav>

      <div className='mx-auto align-middle lg:max-w-lg md:max-w-md'>
        <Image
          src={url}
          width={width}
          height={height}
          className='object-cover p-2 align-middle max-h-90'
          priority
        />

        <DogDetails
          name={name}
          bred_for={bred_for}
          breed_group={breed_group}
          life_span={life_span}
          temperament={temperament}
        />
      </div>
    </div>
  )
}

async function getBreeds() {
  const res = await fetch(
    `https://api.thedogapi.com/v1/breeds?api_key=${process.env.DOG_API_KEY}`,
    {
      cache: 'force-cache',
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getRandomResult() {
  const breeds = await getBreeds()
  let numOfBreeds = breeds.length
  let randomIndex = Math.random() * numOfBreeds
  randomIndex = parseInt(randomIndex)
  const res = await fetch(
    `https://api.thedogapi.com//v1/images/search?limit=1&breed_ids=${breeds[randomIndex].id}&api_key=${process.env.DOG_API_KEY}`,
    {
      cache: 'no-store',
      next: {
        tags: ['dogs'],
      },
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
