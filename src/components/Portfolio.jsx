import React from 'react';
import dalle from '../assets/portfolio/dalle.png';
import disney from '../assets/portfolio/disney.png';
import linktree from '../assets/portfolio/linktree.png';
import netflix from '../assets/portfolio/netflix.png';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: disney,
      name: 'Disney+ Clone',
      tags: ['React', 'Redux', 'Firebase', 'Styled Components'],
      link: 'https://disneyplus-6fb54.web.app',
      code: 'https://github.com/jai-chawla/movie-streaming'
    },
    {
      id: 2,
      src: dalle,
      name: 'DALL-E AI Image Generator',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'OpenAI'],
      link: 'https://dall-e-client-three.vercel.app',
      code: 'https://github.com/jai-chawla/dall-e'
    },
    {
      id: 3,
      src: linktree,
      name: 'Linktree Frontend',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://nexorand-intern-client.vercel.app',
      code: 'https://github.com/jai-chawla/Nexorand-intern'
    },
    {
      id: 4,
      src: netflix,
      name: 'Netflix Clone',
      tags: ['React.js', 'TMDB API', 'Tailwind CSS', 'Firebase'],
      link: 'https://github.com/jai-chawla/netflix-clone',
      code: 'https://github.com/jai-chawla/netflix-clone'
    },
  ];

  return (
    <div name="portfolio" className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-slate-900 text-white flex items-center py-24 md:py-32">
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 font-display">
            Portfolio
          </p>
          <p className="py-6 text-gray-400 text-base md:text-lg">
            Take a look at some of the systems and applications I have worked on and engineered.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8 px-2 sm:px-0">
          {portfolios.map(({ id, src, name, tags, link, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              className="rounded-xl overflow-hidden glass-card flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/5 group"
            >
              {/* Image Box */}
              <div className="overflow-hidden relative aspect-video border-b border-white/5 bg-gray-950">
                <img 
                  src={src} 
                  alt={name} 
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Content Box */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {name}
                </h3>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Buttons (Pinned to Bottom) */}
                <div className="flex items-center space-x-4 mt-auto">
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm font-medium text-cyan-400 text-center"
                  >
                    <span>Demo</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                  <a 
                    href={code} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 transition-all duration-300 text-sm font-medium text-gray-300 text-center hover:text-white"
                  >
                    <span>Code</span>
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;