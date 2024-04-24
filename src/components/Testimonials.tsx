import Image from 'next/image'
import React from 'react'

function Testimonials() {
  return (
    <div className=' text-center mx-auto bg-white my-10  '>
        <h2 className='font-bold text-gray-900 text-4xl'>What our customers have to say</h2>
        <p className='mt-4 text-center text-lg font-semibold text-gray-500 max-w-5xl px-40'>
        Hear from our satisfied customers as they share their experiences & success stories with our transformative solutions.
        </p>
        <div className='grid grid-cols-2 gap-5 mt-14'>
           <div className='flex flex-col justify-center bg-slate-100 py-10'>
             <Image src="/mobilelogo.svg" height={100} width={100} alt="logo" className='mx-auto'/>
             <p>Tapinn has revolutionized my taxi booking experience with their user-friendly app and swift service</p>
             <h2 className='mt-5'>
                Zego <br/>
                Taxi Booking Services
             </h2>
           </div>
           <div className='flex flex-col justify-center bg-slate-100 py-10'>
             <Image src="/mobilelogo.svg" height={100} width={100} alt="logo" className='mx-auto'/>
             <p>Tapinn has revolutionized my taxi booking experience with their user-friendly app and swift service</p>
             <h2 className='mt-5'>
                Zego <br/>
                Taxi Booking Services
             </h2>
           </div>
        </div>
    </div>
  )
}

export default Testimonials