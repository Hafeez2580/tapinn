import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from './ui/button';
import Image from 'next/image';


function CaseStudies() {
  return (
    <div className='text-center mt-16 '>
        <h1 className='text-4xl text-gray-700 font-semibold te'>Our case studies</h1>
        <p className='text-lg text-gray-500 md:px-40 my-10'>Explore our case studies to witness how our solutions have transformed businesses and delivered remarkable results.</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          <div className="card w-60 glass ">
           <figure><Image src="/mobileApp.png" alt="header" width={200} height={200} className='w-40 h-40 mx-auto'/></figure>
            <div className="card-body">
              <h2 className="card-titl mt-4">Mobile Apps</h2>
              <p>Developing, Designing</p>
              <div className="card-actions justify-end">
                <Button className='mt-4' variant='secondary'>Read more</Button>
              </div>
            </div>
          </div>
          <div className="card w-60">
           <figure  ><Image src="/header.svg" alt="car!" width={200} height={200} className='w-40 h-40 mx-auto'/></figure>
            <div className="card-body">
              <h2 className="card-titl mt-4">Web Designing</h2>
              <p>Developing, Designing</p>
              <div className="card-actions justify-end">
                <Button className='mt-4' variant='secondary'>Read more</Button>
              </div>
            </div>
          </div>
          <div className="card w-60">
           <figure><Image src="/services.png" alt="car!" width={200} height={200} className='w-40 h-40 mx-auto'/></figure> 
            <div className="card-body">
              <h2 className="card-title mt-4">Software Development</h2>
              <p>Developing, Designing</p>
              <div className="card-actions justify-end">
                <Button className='mt-4' variant='secondary'>Read more</Button>
              </div>
            </div>
          </div>
          <div className="card w-60">
           <figure><Image src="/desktoplogo.svg" alt="car!" width={200} height={200} className='w-40 h-40 mx-auto'/></figure>
            <div className="card-body">
              <h2 className="card-title mt-4">Online Marketing</h2>
              <p>Developing, Designing</p>
              <div className="card-actions justify-end">
                <Button className='mt-4' variant='secondary'>Read more</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaseStudies