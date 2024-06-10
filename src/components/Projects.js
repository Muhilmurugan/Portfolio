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
        <div className='flex flex-col md:flex-row gap-10 w-full'>
          <div className='relative w-full md:w-1/2 flex flex-col items-center'>
            <img className='h-auto w-full object-cover' src={p1} alt='Medical Awareness'/>
            <div className='project-desc p-5'>
              <h1 className='text-center py-2'>Mediware</h1>
              <p className='text-justify'>The "Medi-ware" project aims to raise awareness about various healthcare schemes and camps organized by the government. Utilizing a Laravel-based website, the project provides a user-friendly platform for accessing information on available healthcare resources. Its objective is to empower individuals with knowledge about healthcare initiatives, enabling informed decisions regarding their healthcare needs and bridging the gap between the government and the public for a healthier, more informed society.</p>
              <div className="btn-wrapper flex justify-center mt-4">
                <a href='link_to_source_file_for_p1' className='text-white bg-blue-500 px-4 py-2 rounded-md'>View Source</a>
              </div>
            </div>
          </div>
          <div className='relative w-full md:w-1/2 flex flex-col items-center'>
            <img className='h-auto w-full object-cover' src={p3} alt='Portable ECG Analysis'/>
            <div className='project-desc p-5'>
              <h2 className='text-center py-2'>Portable ECG Analysis</h2>
              <p className='text-justify'>The project's primary goal is to create an accessible and cost-effective ECG analyzer capable of real-time signal acquisition from subjects, with subsequent display on IoT devices like mobile phones. Additionally, it aims to conduct preliminary diagnoses by categorizing subjects into conditions such as arrhythmia, congestive heart failure, and normal sinus rhythm, while also measuring heart rate.</p>
              <div className="btn-wrapper flex justify-center mt-4">
                <a href='link_to_source_file_for_p3' className='text-white bg-blue-500 px-4 py-2 rounded-md'>View Source</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
