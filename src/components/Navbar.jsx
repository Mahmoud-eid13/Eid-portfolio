import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // ← Icons here

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Mahmoud
            <span className="text-green-700">.tech</span>
          </a>

          {/* Mobile menu toggle */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop nav + icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Icons */}
            <a
              href="https://github.com/Mahmoud-eid13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-eid-a52183231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
