import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #020617, #020617)"
          : "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
        borderColor: darkMode ? "#1f2937" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-6 py-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-orange-500">
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
            >
              Frontend Developer | React & UI Engineer
            </p>
          </div>

          {/* CENTER ICONS */}
          <div className="flex justify-center gap-4">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center
                transition-all duration-300
                ${
                  darkMode
                    ? "bg-[#111827] text-white"
                    : "bg-white text-[#374151]"
                }
                hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                hover:text-white`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <p
              className="text-sm flex items-center justify-center md:justify-end gap-1"
              style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
            >
              © {currentYear} Made with
              <FaHeart className="text-red-500" />
              by
              <span className="text-orange-500 font-medium">Tanu Rai</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
