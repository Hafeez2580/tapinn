import Image from 'next/image';
import React from 'react'

function Features() {
  return (
    <>
    <div className='container grid  grid-cols-1 lg:grid-cols-2 gap-5  mt-10'>
      <div>
        <h2 className='text-3xl font-semibold'>We builts Mobile Apps <br />& Websites for Business Solution.</h2>
        <p className='max-w-xs my-2 text-gray-500'>Elevate your business with our tailored mobile apps and websites. Drive engagement and achieve measurable results with our expert team. Stay ahead in the digital age.</p>
        <p className='max-w-xs my-3 text-gray-700 font-semibold'>- partner with us for cutting-edge solutions. Unlock your brand's full potential in the digital landscape.</p>
      </div>
      <div className='flex justify-center'>
        <Image src="/mobileApp.png" alt="mobileapp" height={320} width={320}/>
      </div>
    </div>
    <div className='container grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
     <div className='flex '>
        <Image src="/services.png" alt="mobileapp" height={270} width={270}/>
      </div>
      <div>
        <h2 className='text-3xl font-semibold'>We Offer a Full Range <br />of Digital Marketing Services!</h2>
        <p className='max-w-xs my-6 text-gray-500'>Unlock your brand's full potential with our comprehensive digital marketing services. From strategic campaigns to social media management, our expert team drives impactful results. Stay ahead in the digital landscape.</p>
        <p className='max-w-xs my-6 text-gray-700 font-semibold'>- p- partner with us for success.</p>
      </div>
    </div>
    </>
  )
}

export default Features;