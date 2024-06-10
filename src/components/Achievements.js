import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faerLogo from "../Assests/faerLogo.png";
import a2 from "../Assests/a2.png";
import tn from "../Assests/tn.png";

const achievements = [
  {
    title: "FAER Scholar Award 2023-24",
    description: `My project, titled "Real-time Detection of Normal Sinus Rhythm, Arrhythmias, and Congestive Heart Failure from ECG," has successfully advanced to the first stage of the FAER Scholar Award 2023-24. The list of shortlisted projects, including mine, can be found as the 18th project on the FAER Scholar Awards website: https://www.faer.ac.in/2324-faer-scholar-awards.`,
    logo: faerLogo,
    link: "https://www.faer.ac.in/2324-faer-scholar-awards"
  },
  {
    title: "2nd Prize, Internal Smart India Hackathon (SIH) 2023",
    description: `Awarded 2nd prize in the internal Smart India Hackathon 2023 for innovative solutions in the healthcare sector.`,
    logo: a2, // Replace with actual logo if available
    link: "#"
  },
  {
    title: "HSC, English, District 1st Mark 2020",
    description: `Achieved the highest mark in English in the district during HSC in 2020.`,
    logo: tn, // Replace with actual logo if available
    link: "#"
  }
];

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section id="achievements" className="flex flex-col items-center bg-secondary px-5 py-16 md:py-32 text-white">
      <div className="flex flex-col items-center mb-10">
        
        <h1 className="text-3xl md:text-4xl border-b-4 border-primary mb-5 font-bold text-center">Achievements</h1>
      </div>
      <Slider {...settings} className="w-full max-w-lg md:max-w-2xl">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-primary p-5 md:p-10 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <img src={achievement.logo} alt={`${achievement.title} Logo`} className="mx-auto mb-5" style={{ height: '80px' }} />
              <h2 className="text-xl md:text-2xl font-bold mb-3">{achievement.title}</h2>
              <p className="mb-5">{achievement.description}</p>
            </div>
            {achievement.link && (
              <a href={achievement.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {achievement.link}
              </a>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Achievements;
