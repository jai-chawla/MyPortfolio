import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: 'https://www.linkedin.com/in/jai-chawla-373886216/',
      style: 'rounded-tr-lg border-t border-r border-b border-cyan-500/30 bg-blue-600/10 hover:bg-blue-600/30'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/jai-chawla',
      style: 'border-t border-r border-b border-white/10 bg-white/5 hover:bg-white/15'
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jaichawlaoffc@gmail.com",
      style: 'border-t border-r border-b border-red-500/30 bg-red-500/10 hover:bg-red-500/30'
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: 'Jai%20chawla%20-%20Resume.pdf',
      style: 'rounded-br-lg border-t border-r border-b border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/30',
      download: true
    }
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <motion.li
            key={id}
            initial={{ x: -100 }}
            animate={{ x: -90 }}
            whileHover={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`flex justify-between items-center w-36 h-12 px-4 backdrop-blur-md transition-all duration-300 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray-200 hover:text-white font-medium text-sm"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;