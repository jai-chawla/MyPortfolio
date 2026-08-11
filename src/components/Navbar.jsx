import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white fixed top-0 left-0 z-50 glass backdrop-blur-md bg-black/40 border-b border-white/5">
      <div>
        <Link to="home" smooth duration={500}>
          <h1 className="text-2xl font-display font-bold ml-2 cursor-pointer tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all duration-300">
            JAI CHAWLA
          </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm tracking-wider"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
        
        {/* Extra Links Dropdown for Large Screens */}
        <li className="relative">
          <button 
            onClick={toggleDropdown}
            className="cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm tracking-wider"
          >
            Links
          </button>
          
          {isOpen && (
            <div 
              onMouseLeave={closeDropdown} 
              className="absolute right-0 mt-3 w-48 rounded-lg glass bg-gray-950/90 shadow-2xl border border-white/10 overflow-hidden py-1"
            >
              <a
                href="./Jai%20chawla%20-%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-white transition-colors duration-200"
                download={true}
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/jai-chawla-373886216/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jai-chawla/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          )}
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 hover:text-white transition-colors duration-300 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu Overlay */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-950/95 backdrop-blur-lg text-gray-350 z-40 space-y-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize text-3xl hover:text-cyan-400 transition-colors duration-300"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer capitalize text-3xl hover:text-cyan-400 transition-colors duration-300">
            <a href="./Jai%20chawla%20-%20Resume.pdf" download={true} target="_blank" rel="noopener noreferrer" onClick={() => setNav(false)}>
              Resume
            </a>
          </li>
          <li className="cursor-pointer capitalize text-3xl hover:text-cyan-400 transition-colors duration-300">
            <a
              href="https://www.linkedin.com/in/jai-chawla-373886216/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNav(false)}
            >
              LinkedIn
            </a>
          </li>
          <li className="cursor-pointer capitalize text-3xl hover:text-cyan-400 transition-colors duration-300">
            <a href="https://github.com/jai-chawla" target="_blank" rel="noopener noreferrer" onClick={() => setNav(false)}>
              GitHub
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
