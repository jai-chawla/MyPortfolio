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
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <div>
        <Link to="home" smooth duration={500}>
          <h1
            className="text-5xl font-signature ml-2 cursor-pointer hover:text-blue-500 transition duration-300 md:text-4xl lg:text-5xl"
            style={{
              textShadow:
                "0 0 20px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.6), 0 0 40px rgba(0, 0, 255, 0.4)",
            }}
          >
            Jai Chawla
          </h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="lg:hidden px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white" onClick={toggleDropdown}>Links</li>
        {
          isOpen&&(
            <div  onMouseLeave={closeDropdown} className="absolute right-0 mt-6 mr-4 w-48 bg-gray-600 rounded-md shadow-lg border b">

<a
              href="Jai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-white hover:bg-gray-200" 
              download={true}
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jai-chawla-373886216/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-white hover:bg-gray-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jai-chawla/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-white hover:bg-gray-200"
            >
              GitHub
            </a>

            </div>
          )
        }

      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href="Jai_Resume.pdf" download={true} target="_blank">
              Resume
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a
              href="https://www.linkedin.com/in/jai-chawla-373886216/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href="https://github.com/jai-chawla" target="_blank">
              Github
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
