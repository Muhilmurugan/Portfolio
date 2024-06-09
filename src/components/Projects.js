import React from 'react'
import p1 from '../Assests/p1.png'
import p3 from '../Assests/p3.png'

const Project = () => {
  return (
    <section  id='projects' className='flex flex-col flex py-5 px-5 justify-center bg-primary text-white'>
        <div className='w-full'>
            <div className='flex flex-col px-15 py-5'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                <p>These are some of my best projects. Check them out.</p>
            </div> 
        </div>
        <div className='w-full'>
          <div className='flex flex-col md:flex-row px-80 gap-20'>
            <div className='relative'>
                <img className='h-[300px] w-[500]' src={p1}></img>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Medical Awareness</p>
                    <p></p>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[300px] w-[500]' src={p3}></img>
                <div className='project-desc'>
                      <p className='text-center px-5 py-5'>Portable ECG Analysis</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Project