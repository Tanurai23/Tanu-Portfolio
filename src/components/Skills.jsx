import React from "react";
import JavaScript from "../assets/JavaScript.png";
import Tailwindcss from "../assets/Tailwindcss.png";
import Framer from "../assets/Framer.png";
import ReactIcon from "../assets/React.png";
import github from "../assets/github.png";
import State from "../assets/State.png";
import Vite from "../assets/Vite.png";
import API from "../assets/API.png";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "JavaScript", icon: JavaScript, level: 80, color: "from-orange-500 to-amber-500" },
    { name: "Tailwind CSS", icon: Tailwindcss, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Framer Motion", icon: Framer, level: 70, color: "from-yellow-500 to-amber-500" },
    { name: "React", icon: ReactIcon, level: 85, color: "from-cyan-500 to-blue-500" },
    { name: "GitHub", icon: github, level: 75, color: "from-teal-500 to-cyan-500" },
    { name: "State Management", icon: State, level: 75, color: "from-green-500 to-emerald-500" },
    { name: "Vite", icon: Vite, level: 80, color: "from-blue-500 to-indigo-500" },
    { name: "API & Async Logic", icon: API, level: 75, color: "from-red-500 to-orange-500" },
  ];

  return (
    <section
      id="skills"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">
        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1
            className="sm:text-4xl text-3xl font-bold mb-4"
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
              Skills
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
            Technologies and tools I use to build scalable, user-focused web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap -m-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
              <div
                style={{
                  background: darkMode
                    ? "linear-gradient(to bottom right, #1f2937, #111827)"
                    : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
               className="group h-full p-6 rounded-2xl border
  transition-all duration-300 hover:-translate-y-2
  hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]"
              >
                <div className="flex items-center mb-6">
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right, #374151, #1f2937)"
                        : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                    }}
                    className="w-16 h-16 rounded-xl p-3 flex items-center justify-center"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>

                  <h3
                    className="text-xl font-bold ml-4"
                    style={{ color: darkMode ? "white" : "#1f2937" }}
                  >
                    {skill.name}
                  </h3>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>
                    Proficiency
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="w-full rounded-full h-3 overflow-hidden"
                  style={{ backgroundColor: darkMode ? "#374151" : "#e5e7eb" }}
                >
                  <div
                    className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className={`mt-6 pt-4 border-t 
                ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div
  className="h-1 rounded-full opacity-70 w-1/3
  transition-all duration-500 group-hover:w-full"
  style={{
    background: "linear-gradient(to right, #f97316, #f59e0b)",
  }}
></div>


                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
