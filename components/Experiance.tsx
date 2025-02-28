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
                        <Button>
                            

                        <div key={id}>
                            <Image width={10} height={10} src={thumbnail} alt={title} className='lg:w-32 md:w-20 w-16' />
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