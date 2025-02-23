import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='projects'>
      <h2 className='heading'>
        Kinjd Words from <span className='text-purple'> Satisfied Clients</span>
      </h2>
      <div className='flex flex-col items-center max-lg:mt-10'>
       
        <InfiniteMovingCards items={testimonials} className='w-full' speed='slow' />
        
      </div>
    </div>
  )
}

export default Clients