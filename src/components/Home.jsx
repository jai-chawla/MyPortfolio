import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/heroImage2.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Next.js & React Specialist",
    "Backend & Systems Engineer",
    "DSA & C++ Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div name="home" className="relative min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-950 to-slate-900 flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-6 md:flex-row md:space-x-12 z-10 w-full py-12 md:py-0">
        
        {/* Left Content (Text) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center h-full md:w-1/2 text-left"
        >
          <span className="text-cyan-400 font-display font-medium tracking-widest text-sm uppercase mb-3">Welcome to my Space</span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display leading-tight min-h-[120px] sm:min-h-[150px] md:min-h-[160px]">
            Hi, I'm Jai Chawla
            <br />
            <span className="text-xl sm:text-2xl text-gray-400 font-normal mt-2 block">I am a </span>
            <span className="relative inline-block mt-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          
          <p className="text-gray-400 py-6 max-w-md text-justify text-base md:text-lg leading-relaxed">
            I build high-performance React and Next.js interfaces seamlessly integrated with scalable Node.js, Express, MongoDB, and Redis systems. Passionate about optimal software architecture and clean coding structures.
          </p>
          
          <div>
            <Link 
              to="portfolio" 
              smooth 
              duration={500} 
              offset={-80}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={22} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Content (Hero Image) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="relative p-2 rounded-2xl glass-card glow-border max-w-[280px] sm:max-w-[340px] overflow-hidden"
          >
            <img 
              src={HeroImage} 
              alt="Jai Chawla Profile" 
              className="rounded-xl w-full h-auto object-cover hover:scale-105 duration-500" 
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;