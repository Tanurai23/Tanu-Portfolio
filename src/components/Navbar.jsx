import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-linear-to-br from-orange-200 to-white",
    textSecondary: "text-gray-800",
    textActive: "text-orange-600",
    indicator: "from-orange-400 to-amber-500",
    button: "from-orange-400 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-linear-to-br from-gray-700 to-black",
    textSecondary: "text-gray-300",
    textActive: "text-orange-300",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`
      mx-auto
      max-w-3xl
      w-full
      flex flex-col
      ${colors.navBg}
      backdrop-blur-lg
      rounded-full
      px-6 lg:px-10
      py-3
      shadow-lg
    `}
  >

        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-orange-500"
          >
            Portfolio<span className="text-orange-500">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative px-2 py-1"
              >
                <motion.span
                  className={`font-medium ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  } hover:text-orange-500`}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5
                    bg-linear-to-r ${colors.indicator} rounded-full`}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Dark Mode */}
            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me (Desktop) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className={`hidden lg:block px-6 py-2 rounded-full
              bg-linear-to-r ${colors.button} text-white font-semibold`}
            >
              Hire Me
            </motion.a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full left-0 w-full mt-3 rounded-xl
              ${darkMode ? "bg-gray-800/95" : "bg-white/95"}
              backdrop-blur-md shadow-xl border
              ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className={`block text-center py-3 rounded-lg font-medium
                    ${
                      activeSection === item.name.toLowerCase()
                        ? "bg-orange-500/10 " + colors.textActive
                        : colors.textSecondary
                    }`}
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block mt-3 py-3 text-center font-bold rounded-lg
                  bg-linear-to-r ${colors.button} text-white`}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
