import React from "react";
import githubIcon from "../assets/socialIcons/Github.jpg";
import instagramIcon from "../assets/socialIcons/Instagram.jpg";
import linkedinIcon from "../assets/socialIcons/LinkedIN.jpg";
import twitterIcon from "../assets/socialIcons/TwitterX.jpg";
import CV from "../assets/Tanu_Rai_CV.pdf";
import { Download } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: githubIcon, alt: "GitHub", link: "https://github.com/Tanurai23" },
    { icon: linkedinIcon, alt: "LinkedIn", link: "https://www.linkedin.com/in/tanu-rai-aa3b01204/" },
    { icon: twitterIcon, alt: "Twitter", link: "https://x.com/tanurai23" },
    { icon: instagramIcon, alt: "Instagram", link: "https://www.instagram.com/tanurai_08/" },
  ];

  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
      };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between mt-14 lg:mt-0">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:text-left mb-12 lg:mb-0">

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-md"
                  />
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

            <p className={`mb-6 ${theme.textSecondary}`}>
              I’m a frontend developer focused on building scalable, clean, and intuitive web applications.
              I specialize in React, modern CSS, and state-driven UI design. I enjoy working on
              product-focused applications, dashboards, and real-world user flows.
              Currently open to frontend roles and freelance projects.
            </p>

            {/* Buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                {/* Download CV */}
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center
                    text-white bg-linear-to-r from-orange-400 to-amber-500
                    py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold
                    transition-all duration-300 transform hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </button>
                </a>

                {/* Contact */}
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center
                    text-white border-orange-500 border-2
                    py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold
                    transition-all duration-300 transform hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]"
                  >
                    
                    Contact Me
                  </button>
                </a>
              </div>
            </div>

          </div>

                           {/* Image Section */}
                           
        </div>
      </section>
    </div>
  );
};

export default Hero;
