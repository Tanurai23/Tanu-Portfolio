import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/AboutMe1.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
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
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
          font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
          data-aos="fade-up"
          data-aos-delay="400"
          >About Me</h1>
          <p className="text-lg mb-6">
         I’m a frontend developer focused on building clean, scalable,
         and user-centric web applications. I specialize in React, modern CSS,
          and state-driven UI development, with an emphasis on performance, accessibility, and real-world user flows.
            </p>
          <p className="text-lg">
          I’ve built projects such as an AI Interview Simulator and a weather application using the OpenWeather API, focusing on responsive design, 
          component architecture, and intuitive user experiences with React and Tailwind CSS.
       

          </p>
          <p className="mt-6 text-lg">
           I’m currently open to frontend roles and freelance opportunities, and I enjoy contributing to 
           product-driven teams focused on building meaningful user experiences.
            </p>
        </article>
      </div>
    </section>
  );
};

export default About;
