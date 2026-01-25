import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Title */}
          <h3 className="text-2xl font-bold text-orange-500 dark:text-white">
            Portfolio
          </h3>

          {/* Role */}
          <p
            className="text-sm"
            style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
          >
            Frontend Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          {[
            { icon: <FaGithub />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-10 h-10 rounded-full flex items-center justify-center
              transition-all hover:scale-105
              bg-[#f3f4f6] dark:bg-[#374151]
              text-[#374151] dark:text-white
              hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
              hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center md:text-right">
          <p className="text-sm flex items-center justify-center md:justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
            © {currentYear} Made with
            <FaHeart className="text-red-500" />
            by
            <span className="text-[#f97316] font-medium ml-1">
              Tanu Rai
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
