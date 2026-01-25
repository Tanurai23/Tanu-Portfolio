import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "AI Interview Simulator",
      desc:
        "Built a production-ready AI Interview Simulator using React, featuring timed interview sessions, state-driven navigation, progress tracking, and responsive UI.",
      tags: ["React", "Tailwind CSS", "Zustand", "Vercel"],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Pixel Forecast",
      desc:
        "A React-based platform simulating real interview flows with timed questions, state-driven navigation, and a polished UI.",
      tags: ["React", "OpenWeatherAPI", "Zustand", "Vercel"],
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f3f4f6)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border transition-all duration-300 hover:border-orange-500/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5
                    px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  {/*Demo*/}
                  <a
                    href="#"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5
                    px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
        className='text-center mt-10'>
             <a
                    href="#"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                      
                    }}
                    className="inline-flex items-center font-semibold gap-2
                    px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaGithub />
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm' />

                  </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;
