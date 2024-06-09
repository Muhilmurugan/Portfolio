import React from 'react';
import about from "../Assests/about.png";

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5'id='about'>
        <div className='py-5 md:w-1/2'>
            <img className='h-[500px] px-20' src={about} />
        </div>
        <div className='md:w-1/2 flex justify-center '>
          <div className='flex flex-col justify-center text-white'>
              <h1 className='text-4xl border-b-4 border-primary mb-5 w-[180px] font-bold'>About Me</h1>
              <p className='pb-5 text-1xl' > I am an enthusiastic and motivated Information Technology graduate from Vel Tech Multi Tech Dr Rangarajan Dr Sakunthala Engineering College, Chennai. With a strong foundation in programming languages like Python, PHP, HTML/CSS, JavaScript, and databases, I am eager to contribute my technical expertise and passion for coding to drive impactful solutions. Throughout my academic journey, I honed my skills in full-stack development, IoT, and machine learning through projects like Mediware, an informative health website, and an ECG Analyzer application. Complementing my technical abilities, I possess strong soft skills such as teamwork, time management, problem-solving, and leadership, enabling me to thrive in collaborative environments. I am actively seeking opportunities to apply my knowledge and continue expanding my horizons in the field of software development.</p>
          </div>
        </div>
    </section>
  )
}

export default About