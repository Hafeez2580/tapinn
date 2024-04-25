import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

function Hero() {
  return (
    <div className='container text-left lg:text-center mx-auto bg-[f7f8fa]'>
      <h1 className='font-extrabold text-gray-800 text-2xl lg:text-4xl'>Single tap solutions for your online business & <br/>Marketing. 
      </h1>
       <p className='font-semibold text-gray-500 mt-4'>Simple is a simple template with a creative design that solves all your marketing and SEO queries.</p>
       <div className='mt-4'>
        <Button variant='secondary' className='mx-2'>Get started</Button>
        <Button variant='ghost' className='mx-2'>Learn more</Button>
       </div>
       <div className='flex justify-center'>
         <Image src="/header.svg" alt="header" height={500} width={500} />
       </div>
    </div>
  )
}

export default Hero