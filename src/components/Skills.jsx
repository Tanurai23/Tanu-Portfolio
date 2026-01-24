import React from 'react';
import JavaScript from '../assets/JavaScript.png';
import Tailwindcss from '../assets/Tailwindcss.png';
import Framer from '../assets/Framer.png';
import ReactIcon from '../assets/React.png';
import github from '../assets/github.png';
import State from '../assets/State.png';
import Vite from '../assets/Vite.png';
import API from '../assets/API.png';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'JavaScript', icon: JavaScript },
    { name: 'Tailwindcss', icon: Tailwindcss },
    { name: 'Framer', icon: Framer },
    { name: 'React', icon: ReactIcon },
    { name: 'GitHub', icon: github },
    { name: 'State', icon: State },
    { name: 'Vite', icon: Vite },
    { name: 'API', icon: API },
  ];

  return (
    <section
      id="skills"
      className="py-20"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
    >
      <div className="container mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{" "}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Skills
            </span>
          </h1>
       

        {/* Proof content */}
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
        >
          Technologies and tools I use to build scalable, user-focused web applications
        </p>
</div>
      </div>
    </section>
  );
};

export default Skills