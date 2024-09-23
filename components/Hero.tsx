import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-24 pt-36'>
        <div>
          <Spotlight  className='-top-24 -left-24 h-screen' fill='white'/>
          <Spotlight  className='-top-24 -left-24 h-screen' fill='white'/>
          <Spotlight  className='-top-24 -left-24 h-screen' fill='white'/>
          <Spotlight  className='-top-24 -left-24 h-screen' fill='white'/>
          <Spotlight  className='-top-24 -left-24 h-screen' fill='white'/>
        </div>
    </div>
  )
}

export default Hero