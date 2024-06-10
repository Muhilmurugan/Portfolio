import React, { useState } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center min-h-screen px-5 py-32 bg-secondary justify-center text-white">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold mb-5">Get In Touch</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 w-full max-w-2xl">
        <div className="bg-primary p-5 rounded-lg shadow-lg text-center flex flex-col items-center w-full md:w-1/2">
          <div className="flex flex-col items-center space-y-3">
            <BiLogoGmail size={40} />
            <div>
              <h2 className="text-xl font-bold">Email</h2>
              <p>muhilmurugan31@gmail.com</p>
              <a href="mailto:muhilmurugan31@gmail.com" className="text-blue-300 hover:underline">Send a message</a>
            </div>
          </div>
        </div>
        <div className="bg-primary p-5 rounded-lg shadow-lg text-center flex flex-col items-center w-full md:w-1/2">
          <div className="flex flex-col items-center space-y-3">
            <FaWhatsapp size={40} />
            <div>
              <h2 className="text-xl font-bold">WhatsApp</h2>
              <p>+91 6374430245</p>
              <a href="https://wa.me/6374430245" className="text-blue-300 hover:underline">Send a message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
