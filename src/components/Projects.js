import React from 'react';
import p1 from '../Assests/p1.png';
import p3 from '../Assests/p3.png';

const Project = () => {
  return (
    <section id='projects' className='flex flex-col py-5 px-5 justify-center bg-primary text-white'>
      <div className='w-full'>
        <div className='flex flex-col items-center px-5 py-5'>
          <h1 className='text-4xl border-b-4 border-secondary mb-5 font-bold'>Projects</h1>
          <p className='text-center'>These are some of my best projects. Check them out.</p>
        </div> 
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='relative w-full md:w-1/2 flex flex-col items-center'>
            <img className='h-auto w-full object-cover' src={p1} alt='Medical Awareness'/>
            <div className='project-desc'>
              <p className='text-center px-5 py-5'>Medical Awareness</p>
            </div>
          </div>
          <div className='relative w-full md:w-1/2 flex flex-col items-center'>
            <img className='h-auto w-full object-cover' src={p3} alt='Portable ECG Analysis'/>
            <div className='project-desc'>
              <p className='text-center px-5 py-5'>Portable ECG Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
