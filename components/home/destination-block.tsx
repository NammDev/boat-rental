'use client'

import Section from '../ui/section'

export const destinations = [
  {
    name: 'Miami',
    slug: '/explore?location=Miami',
    location: 'Long Island city',
    thumbnail: '/images/destinations/miami.png',
  },
  {
    name: 'Seattle Beach',
    slug: '/explore?location=Long-Island',
    location: 'Long Island city',
    thumbnail: '/images/destinations/longIsland.png',
  },
  {
    name: 'Atlantis Dubai',
    slug: '/explore?location=Dubai',
    location: 'Long Island city',
    thumbnail: '/images/destinations/dubai.png',
  },
  {
    name: 'Australian Beach',
    slug: '/explore?location=Australia',
    location: 'Long Island city',
    thumbnail: '/images/destinations/australia.png',
  },
  {
    name: 'Bol Croatia',
    slug: '/explore?location=croatia',
    location: 'Long Island city',
    thumbnail: '/images/destinations/croatia.jpg',
  },
  {
    name: 'Atoll Maldives',
    slug: '/explore?location=maldive',
    location: 'Long Island city',
    thumbnail: '/images/destinations/maldive.jpg',
  },
  {
    name: 'Kijal Malaysia',
    slug: '/explore?location=malaysia',
    location: 'Long Island city',
    thumbnail: '/images/destinations/malaysia.jpg',
  },
  {
    name: 'Dalmatia Croatia',
    slug: '/explore?location=croatia',
    location: 'Long Island city',
    thumbnail: '/images/destinations/dalmatia.jpg',
  },
]

export default function DestinationBlock() {
  return (
    <Section
      title='Top destinations for boat rentals'
      description='Unsatiable it considered invitation he traveling insensible.'
      className='pl-4 mt-12 lg:container-fluid sm:pl-6 lg:mt-16'
      headerClassName='mb-4 md:mb-5 xl:mb-6'
    >
      {/* {!state && <BlockLoader />} */}
      {/* {destinations && <DestinationCarousel data={destinations} />} */}
    </Section>
  )
}
