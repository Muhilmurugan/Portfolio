import React from 'react'
import resum from '../Assests/resum.jpg';

const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[600px] px-20' src={resum} />
        </div>
        <div className='md:w-1/2 flex justify-center '>
          <div className='flex flex-col justify-center text-white'>
              <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold'>Resume</h1>
              <p className='pb-5 text-1xl' >You can view my resume.<a className='btn' href="https://drive.google.com/file/d/1NnWZ8DV3DPLD8Q5xfK-7sPaUEYIavkNo/view?usp=drive_link">Download</a></p>
          </div>
        </div>
    </section>
  )
}


export default Resume