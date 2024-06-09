import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col md:flex-row min-h-screen px-5 py-32 bg-primary justify-center items-center text-white">
      <div className="md:w-1/3 flex flex-col items-center md:items-start mb-10 md:mb-0">
        <h1 className="text-4xl mb-10 font-bold">Get In Touch</h1>
        <div className="flex flex-col items-center md:items-start space-y-5">
          <div className="bg-secondary p-5 rounded-lg shadow-lg text-center md:text-left width-310">
            <div className="flex items-center space-x-3 ">
              <BiLogoGmail size={40} />
              <div>
                <h2 className="text-xl font-bold">Email</h2>
                <p>muhilmurugan31@gmail.com</p>
                <a href="mailto:muhilmurugan31@gmail.com" className="text-blue-500 hover:underline">Send a message</a>
              </div>
            </div>
          </div>
          <div className="bg-secondary p-5 rounded-lg shadow-lg text-center md:text-left width-310">
            <div className="flex items-center space-x-3">
              <FaWhatsapp size={40} />
              <div>
                <h2 className="text-xl font-bold">WhatsApp</h2>
                <p>+91 6374430245</p>
                <a href="https://wa.me/6374430245" className="text-blue-500 hover:underline">Send a message</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-4xl mb-5 font-bold">Contact Me</h1>
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Full Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your full name" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message" rows="5"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
