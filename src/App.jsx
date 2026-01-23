import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'


const App = () => {
  const[darkMode, setDarkMode] = useState (true);
  
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // This ensures it doesn't disappear when you scroll back up
    });
  }, []);

  const toggleDarkMode = () => {  
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className={
      darkMode
       ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen'
        : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
     <Hero darkMode={darkMode} />
     <About darkMode={darkMode} />
     <Skills darkMode={darkMode} />
    </div>
  )
}

export default App