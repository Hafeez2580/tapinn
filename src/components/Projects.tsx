import Image from 'next/image';
import React from 'react'

async function Projects() {
    const getProjects = async () => {
        const res = await fetch('https://tapinn.in/tapinn_apis/getProjects.php');
        if(!res.ok) {
          throw new Error('something went wrong');
        }
        return res.json();
      }
    
      const projects = await getProjects();
      
      return (
            <div className=' text-center mx-auto bg-white my-10'>
                <h2 className='font-bold text-gray-900 text-4xl'>Projects</h2>
                <p className='mt-4 text-center text-lg font-semibold text-gray-500 max-w-5xl px-5 lg:px-40'>
                Hear from our satisfied customers as they share their experiences & success stories with our transformative solutions.
                </p>
                <div className='flex flex-row w-full justify-between mt-14 flex-wrap' >
                {projects.map((project:any) => (
                <div className='flex flex-col w-full md:w-[48%]  justify-center bg-slate-100 py-10 my-3' key={project.id}>
                   <Image src={project.image} height={100} width={100} alt="logo" className='mx-auto rounded-full h-[100px] w-[100px]'/>
                   <p>{project?.description}</p>
                   <h2 className='mt-5'>
                    {project?.name}
                    </h2>
                </div>
              ))}
              </div>
            </div>
      );
    }

export default Projects