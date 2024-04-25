import Image from 'next/image'
import React from 'react'

async function Testimonials() {

  const getClients = async () => {
    const res = await fetch('https://tapinn.in/tapinn_apis/getClients.php');
    if(!res.ok) {
      throw new Error('something went wrong');
    }
    return res.json();
  }

  const clients = await getClients();
  
  return (
        <div className=' text-center mx-auto bg-white my-10'>
            <h2 className='font-bold text-gray-900 text-4xl'>What our customers have to say</h2>
            <p className='mt-4 text-center text-lg font-semibold text-gray-500 max-w-5xl px-5 lg:px-40'>
            Hear from our satisfied customers as they share their experiences & success stories with our transformative solutions.
            </p>
            <div className='flex flex-ro flex-wrap w-full justify-between mt-14'>
              {clients.map((client:any) => (
                <div className='flex flex-col w-full md:w-[48%] lg:w-[48%]  justify-center bg-slate-100 py-10 my-3' key={client.id}>
                   <Image src={client.image} height={100} width={100} alt="logo" className='mx-auto rounded-full h-[100px] w-[100px]'/>
                   <p>{client?.description}</p>
                   <h2 className='mt-5'>
                    {client?.name}
                    </h2>
                </div>
              ))}
              </div>
        </div>
  );
}

export default Testimonials