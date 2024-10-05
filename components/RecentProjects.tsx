import React from 'react'
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h2 className='heading'>
                A Small Collection Of <span className='text-purple'> Recent Projects</span>
            </h2>
            <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map((project) => {
                    const { id, title, des, img, iconLists, link } = project;
                    return (
                        <div key={id} className=' sm:h-[41rem] h-[32rem]  lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                            <PinContainer title={link} href={link}>
                                <div className=' relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                        <img src='bg.png' alt={title} className='w-full h-full object-cover object-center' />
                                    </div>
                                    <img src={img} alt={title} className='z-10 absolute bottom-0' />
                                </div>
                                <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'> {title}</h2>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                                <div className='flex items-center justify-center mt-7 mb-3'>
                                    <div className='flex items-center'>
                                        {
                                            iconLists.map((icon, index) => {
                                                return (
                                                    <div className='flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8' style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                                        <img key={index} src={icon} alt={title} className='p-2' />
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='flex justify-center items-center '>
                                            <p className=' flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                            <FaLocationArrow className='ms-3 color-[#CBACF9]' />
                                        </div>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentProjects;