import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='container text-center mx-auto bg-white     mt-10  '>
        <h2 className='font-semibold text-gray-900 text-4xl'>How does Tapinn works</h2>
        <p className='mt-4 text-center text-lg font-semibold text-gray-500 max-w-5xl'>
        We provides a user-friendly, all-in-one operational toolkit designed meet our customers' needs effectively. With a seamless interface and comprehensive features,our theme empowers businesses to optimize their operations effortlessly.
        </p>
        <div className='py-5 my-5 grid grid-cols-3 gap-3'>
           <div className='flex text-left flex-col'>
              <Image src="/mobilelogo.svg" alt="mobileApp" height={80} width={80}/>
              <h3 className='text-lg font-semibold my-3'>Mobile App Development</h3>
              <p className='font-light'>Custom mobile app development for businesses - innovative solutions delivered on time by our expert team. Elevate your online presence and stay ahead in the mobile landscape with our high-quality apps.</p>
           </div>
           <div className='flex text-left flex-col'>
              <Image src="/desktoplogo.svg" alt="mobileApp" height={80} width={80}/>
              <h3 className='text-lg font-semibold my-3'>Website Development</h3>
              <p className='font-light'>We offer website development services - creating stunning, functional websites tailored to your business needs. Our expert team ensures timely delivery and a seamless user experience to enhance your online presence.</p>
           </div>
           <div className='flex text-left flex-col'>
              <Image src="/digitalMarketingLogo.svg" alt="mobileApp" height={80} width={80}/>
              <h3 className='text-lg font-semibold my-3'>Digital Marketing</h3>
              <p className='font-light'>Our digital marketing services drive results - from strategic campaigns to social media management, we optimize your online presence for maximum impact and growth. Reach your target audience and achieve your business goals with our expert team.</p>
           </div>
        </div>
    </div>
  )
}

export default About