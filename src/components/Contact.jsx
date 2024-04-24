import React from 'react'
import { Button } from './ui/button'

function Contact() {
  return (
    <div className='flex flex-col align-middle justify-center' style={{backgroundImage: "url('/gdpr.jpg'); padding-top: 100px; padding-bottom:100px"}}>
        <div className='text-center font-bold text-3xl '>Do you have any projects?</div>
        <div className='font-bold text-3xl mt-5 text-center'>Contact Us</div>
        <Button variant='outline' className='mx-auto mt-10 bg-red-100 hover:bg-red-400 hover:text-white'>Contact Us</Button>
   </div>
  )
}

export default Contact