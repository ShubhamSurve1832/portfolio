import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h2 className='heading'>
        Kind Words from <span className='text-purple'> Satisfied Clients</span>
      </h2>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards items={testimonials} className='w-full' speed='slow' />
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10'>
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={nameImg} alt={name}  className='md:w-10 w-5' />
              <img src={img} alt={name}  className='md:w-10 w-5' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients; 