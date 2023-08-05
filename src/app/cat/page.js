import Image from 'next/image'
import { PiCatFill } from 'react-icons/pi'
import CatDetails from './CatDetail'
import Link from 'next/link'

export default async function Cat() {
  let randomResult = await getRandomResult()
  let { url, width, height } = randomResult[0]
  let { name, wikipedia_url, description, life_span, temperament, origin } =
    randomResult[0].breeds[0]

  return (
    <div className='flex-col mx-auto align-middle'>
      <nav className='flex flex-wrap items-center justify-between p-5 bg-indigo-700'>
        <div className='flex items-center flex-shrink-0 mr-5 text-pink-50'>
          <PiCatFill size={25} />
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

        <CatDetails
          name={name}
          wikipedia_url={wikipedia_url}
          description={description}
          life_span={life_span}
          temperament={temperament}
          origin={origin}
        />
      </div>
    </div>
  )
}

async function getBreeds() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}`,
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
    `https://api.thecatapi.com//v1/images/search?limit=1&breed_ids=${breeds[randomIndex].id}&api_key=${process.env.CAT_API_KEY}`,
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
