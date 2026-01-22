import React from "react";
import { Github, Linkedin, Twitter, Instagram, Download, Mail } from "lucide-react";
import CV from "../assets/Tanu_Rai_CV.pdf";
import HeroImage from "../assets/Me.png";
import hi from "../assets/Hi.png";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: Github, link: "https://github.com/Tanurai23" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/tanu-rai-aa3b01204/" },
    { icon: Twitter, link: "https://x.com/tanurai23" },
    { icon: Instagram, link: "https://www.instagram.com/tanurai_08/" },
  ];

  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        decorativeCircle: "from-orange-500 opacity-10",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        decorativeCircle: "from-orange-400 opacity-20",
      };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section id="home" data-aos="fade-up" data-aos-delay="250" className="body-font z-10">
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between mt-14 lg:mt-0">
          
          {/* LEFT SIDE: Text Content */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:text-left mb-12 lg:mb-0">
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1 className={`text-4xl sm:text-6xl font-bold mb-4 ${theme.textPrimary}`}>
              Hi, I'm <span className="text-orange-500">Tanu Rai</span>
            </h1>

            <h4 className="text-2xl font-bold mb-4 text-orange-500">
              Frontend Developer
            </h4>

            <p className={`mb-6 max-w-xl text-center lg:text-left ${theme.textSecondary}`}>
              I’m a frontend developer focused on building scalable, clean, and intuitive web applications.
              I specialize in React, modern CSS, and state-driven UI design. I enjoy working on
              product-focused applications, dashboards, and real-world user flows.
            </p>

            {/* Buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="700">
                <a href={CV} download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-400 to-amber-500 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-orange-500 border-2 border-orange-500 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:bg-orange-500 hover:text-white hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Image Content */}
<div
  className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
  data-aos="fade-left"
  data-aos-delay="400"
>
  {/* Standard max-width classes to remove linter warnings */}
  <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
    
    {/* Main Illustration */}
    <img
      src={HeroImage}
      alt="3D Girl Illustration"
      className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
    />

    {/* Hi Icon - Repositioned and resized to valid Tailwind classes */}
    <img 
      src={hi} 
      alt="Hi icon"
      className="absolute -top-8 -left-4 sm:-top-10 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 object-contain animate-bounce opacity-90 z-20"
    />
    
  </div>
</div>

        </div>
        
        {/* Background Decorative Element */}
        <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-64 bg-linear-to-br ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 hidden sm:block`}></div>
      </section>
    </div>
  );
};

export default Hero;