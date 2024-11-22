import React from 'react'
import Particles from '@/components/ui/particles'
import SparklesText from '@/components/ui/sparkles-text'
import { RainbowButtonDemo } from './RainbowButton'
import { ShinyButtonDemo } from './ShinyButton'

const HeroSection = () => {
  return (
    <div className='container'>
        <Particles className="absolute inset-0" quantity={100} ease={80} color="#000000" refresh />
        <section className='flex flex-col justify-center items-center gap-y-8  '>
            <SparklesText text="Bakery Management System" className='mx-' />
            <p className='text-center text-[18px] text-gray-700 mx-[350px] leading-[2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cum minus tempora quo corporis exercitationem velit quis, necessitatibus debitis vitae asperiores deserunt rerum. Ducimus voluptates cum commodi rerum tenetur quis?</p>
            <div className='flex gap-x-8'>
                <RainbowButtonDemo />
                <ShinyButtonDemo />
            </div>
        </section>
        
    </div>
  )
}

export default HeroSection
