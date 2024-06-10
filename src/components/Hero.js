import React from 'react'
import hero from  '../Assests/hero.png';
import { BiLogoGmail,} from "react-icons/bi";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const config={
    subtitle:'Developer'
  }
  return ( 
        <section  className='flex flex-col md:flex-row items-center justify-center px-5 py-32 bg-primary'>
           <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left '>
                <h1 className=' text-white text-2xl font-hero-font'>
                    <p className='text-2xl px-9'>Hello I`m</p>
                    <p className='text-4xl px-6'>Muhilan</p>
                    <p className='text-2xl px-8'>{config.subtitle}</p> 
                </h1>
                <div className='flex py-5'>
                    <a href='mailto:muhilmurugan31@gmail.com'className='pr-5 hover:text-white'><BiLogoGmail size={40}/></a>
                    <a href='https://www.linkedin.com/in/muhilanm/'className='pr-5  hover:text-white'><FaLinkedin size={40}/></a>
                    <a href='https://github.com/Muhilmurugan'className='pr-5  hover:text-white'><FaGithub size={40}/></a>
                    
                </div>
           </div>
           <img className=' md:w-1/4 ' src={hero} />
        </section>
    
  )
}

export default Hero