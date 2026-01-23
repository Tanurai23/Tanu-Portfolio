import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/AboutMe1.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`relative py-20 flex items-center justify-center px-4 sm:px-6 
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Image Placeholder */}
            <div
  className="absolute -inset-4 lg:-inset-20 
  bg-linear-to-l from-orange-500 via-orange-400 to-amber-500
  rotate-12 star-shape z-0"
  data-aos="zoom-in"
  data-aos-delay="600"
></div>
        <img src={about}
                alt="About Image" 
                className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="400"
                />  


          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className='text-center lg:text-left relative order-1 lg:order-2'
        >
            <header>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
          font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
          data-aos="fade-up"
          data-aos-delay="400"
          >About Me</h1></header>
          <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-8 leading-relaxed
          bg-linear-to-r from-orange-900/10 to-orange-900/5
          p-4 sm:p-6 rounded-xl sm:rounded-2xl
          backdrop-blur-sm
          ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          data-aos='fade-up'
          data-aos-delay='500'
          >
         I’m a frontend developer focused on building clean, scalable,
         and user-centric web applications. I specialize in React, modern CSS,
          and state-driven UI development, with an emphasis on performance, accessibility, and real-world user flows.
           I’ve built projects such as an AI Interview Simulator and a weather application using the OpenWeather API, focusing on responsive design, 
          component architecture, and intuitive user experiences with React and Tailwind CSS.

           I’m currently open to frontend roles and freelance opportunities, and I enjoy contributing to 
           product-driven teams focused on building meaningful user experiences.
            </p>
        <div className='flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 mb-8'>
  {/* Years of Experience */}
  <div
    className='flex flex-col items-center lg:items-start'
    data-aos='zoom-in'
    data-aos-delay='600'
  >
    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>
      2+
    </div>
    <div className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      Years of Experience
    </div>
  </div>

  {/* Completed Projects - Changed delay to 800 for better effect */}
  <div
    className='flex flex-col items-center lg:items-start'
    data-aos='zoom-in'
    data-aos-delay='800' 
  >
    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>
      5+
    </div>
    <div className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      Completed Projects
    </div>
  </div>
</div>

<button 
className={`w-full sm:w-auto border-2 border-orange-500 
inline-flex items-center justify-center  py-2 px-4 sm:px-6 
rounded-full text-base sm:text-lg font-semibold transition-all 
duration-300 transform hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
          ${darkMode ?
          'text-white bg-orange-500/10'
          : 'text-gray-800 bg-white/90'}`}
          data-aos='fade-up'
          data-aos-delay='800'>Learn More</button>
        </article>
      </div>
    </section>
  );
};

export default About;
