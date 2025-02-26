import { workExperience } from '@/data'
import React from 'react'

const Experiance = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h2 className='heading'>
                My <span className='text-purple'> Work Experiance  </span>
            </h2>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {
                    workExperience.map(({ id, title, desc, thumbnail }) => (
                        <div key={id} className='flex flex-col gap-4'>
                            <img src={thumbnail} alt={title} className='md:w-10 w-5' />
                            <h3 className='text-xl font-semibold'>{title}</h3>  
                            <p className='text-sm'>{desc}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Experiance