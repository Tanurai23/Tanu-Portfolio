import { FaGithub } from "react-icons/fa";


const Footer = ({ darkMode }) => {
    const currentYear= new Date().getFullYear();
  return (
    <footer
    style={{
        backgroun: darkMode ?
        'linear-linear(to bottom, #000000, #111827)'
        :'linear-linear( to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
    }}
    className="border-t">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between
            items-center gap-6">
                <h3 
                className="text-2xl font-bold mb2 text-orange-500 dark:text-white"
                >
                    Portfolio
                </h3>
                <p
                className="text-sm"
                style={{
                    color: darkMode ? '#9ca3af' : '#6b7280'
                }}>
                    Frontend Developer 
                </p>
            </div>
            <div className="flex gap-4"
            >
                <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center
                justify-center hover:scale-100 transition-all
                hover:bg-linear-to-r hover:from-orange-500 
                hover:to-amber-500 hover:text-white
                bg-[#374151] dark:bg-[#f3f4f6]
                text-[#374151] dark:text-white">
                    <FaGithub />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer