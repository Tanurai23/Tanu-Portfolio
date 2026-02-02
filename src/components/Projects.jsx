import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// ✅ Correct image imports
import interviewAI from "../assets/intervuAi.png";
import pixelForecast from "../assets/Pixy.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "AI Interview Simulator",
      desc:
        "Built a production-ready AI Interview Simulator using React, featuring timed interview sessions, state-driven navigation, AI-based scoring, and a responsive SaaS-style UI.",
      tags: ["React", "Tailwind CSS", "Zustand", "Vercel"],
      image: interviewAI,
      github: "https://github.com/Tanurai23/AI-Interview-Experience-Simulator",
      demo: "https://ai-interview-experience-simulator.vercel.app/",
    },
    {
      id: 2,
      title: "Pixy Weather",
      desc:
        "A modern, pixel-inspired weather app built with React & Vite, featuring live weather, 7-day forecasts, AQI, weather data visualization (charts) and responsive design using OpenWeatherMap API.",
      tags: ["React", "OpenWeather API", "Zustand", "Vercel"],
      image: pixelForecast,
      github: "https://github.com/Tanurai23/Pixy-Weather",
      demo: "https://pixy-weather.vercel.app/",
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
        <div className="text-center mb-12">
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
            A showcase of real-world, production-ready applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f3f4f6)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2
                      px-3 py-2 text-sm rounded-lg
                      bg-gray-200 dark:bg-slate-700
                      text-gray-800 dark:text-white
                      hover:opacity-90 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2
                      px-3 py-2 text-sm rounded-lg text-white
                      bg-linear-to-r from-orange-500 to-amber-500
                      hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Tanurai23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3
              px-8 py-4 rounded-full text-white font-semibold
              bg-linear-to-r from-orange-500 to-amber-500
              hover:shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            <FaGithub />
            View All Projects
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
