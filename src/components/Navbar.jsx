import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// Added missing icon imports
import { Sun, Moon, Menu, X } from "lucide-react"; 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  // FIXED: Changed {} to [] for useState
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const lightColors = {
    navBg: 'bg-linear-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textActive: 'text-orange-600',
    indicator: 'from-orange-400 to-amber-500',
    button: 'from-orange-400 to-amber-500',
  };

  const darkColors = {
    navBg: 'bg-linear-to-br from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textActive: 'text-orange-300',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase()); // FIXED: was using itemName
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`flex flex-col items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          
          {/* Logo Section */}
          <motion.a href="/" whileHover={{ scale: 1.05 }} className="text-xl font-bold text-orange-500">
            Portfolio<span className="text-orange-500">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative px-2 py-1"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary
                  } hover:text-orange-500`}
                >
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${colors.indicator} rounded-full`}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </motion.button>

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-lg`}
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - FIXED: Added curly braces and AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`w-full overflow-hidden lg:hidden mt-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className={`block py-3 px-4 rounded-lg text-center font-medium ${
                      activeSection === item.name.toLowerCase() ? 'bg-orange-500/10 ' + colors.textActive : colors.textSecondary
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;