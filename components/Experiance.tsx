import { workExperience } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experiance = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h2 className='heading'>
                My <span className='text-purple'> Work Experiance  </span>
            </h2>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {
                    workExperience.map(({ id, title, desc, thumbnail }) => (
                        <Button key={id} borderRadius='1.7rem' duration={Math.floor(Math.random()*10000)+ 10000} className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                            

                        <div>
                            <Image width={100} height={100} src={thumbnail} alt={title} className='lg:w-32 md:w-20 w-16' />
                            {/* <h3 className='text-xl font-semibold'>{title}</h3>  
                            <p className='text-sm'>{desc}</p> */}
                        </div>
                        </Button>
                    ))
                }

            </div>
        </div>
    )
}

export default Experiance