import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiMui, SiFramer, SiNodedotjs, SiExpress, SiMongodb,
  SiRedis, SiApachekafka, SiPostgresql, SiGit, SiDocker, SiCplusplus, SiLeetcode
} from 'react-icons/si';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Languages' }
  ];

  const techs = [
    // Frontend
    { id: 1, icon: <SiHtml5 size={40} />, title: 'HTML5', category: 'frontend', color: 'rgba(227, 79, 38, 0.4)', brandColor: '#E34F26' },
    { id: 2, icon: <SiCss3 size={40} />, title: 'CSS3', category: 'frontend', color: 'rgba(21, 114, 182, 0.4)', brandColor: '#1572B6' },
    { id: 3, icon: <SiJavascript size={40} />, title: 'JavaScript', category: 'frontend', color: 'rgba(247, 223, 30, 0.4)', brandColor: '#F7DF1E' },
    { id: 4, icon: <SiTypescript size={40} />, title: 'TypeScript', category: 'frontend', color: 'rgba(49, 120, 198, 0.4)', brandColor: '#3178C6' },
    { id: 5, icon: <SiReact size={40} />, title: 'React.js', category: 'frontend', color: 'rgba(97, 218, 251, 0.4)', brandColor: '#61DAFB' },
    { id: 6, icon: <SiNextdotjs size={40} />, title: 'Next.js', category: 'frontend', color: 'rgba(255, 255, 255, 0.4)', brandColor: '#FFFFFF' },
    { id: 7, icon: <SiTailwindcss size={40} />, title: 'Tailwind CSS', category: 'frontend', color: 'rgba(6, 182, 212, 0.4)', brandColor: '#06B6D4' },
    { id: 8, icon: <SiMui size={40} />, title: 'Material UI', category: 'frontend', color: 'rgba(0, 127, 255, 0.4)', brandColor: '#007FFF' },
    { id: 9, icon: <SiFramer size={40} />, title: 'Framer Motion', category: 'frontend', color: 'rgba(240, 36, 182, 0.4)', brandColor: '#F024B6' },
    
    // Backend
    { id: 10, icon: <SiNodedotjs size={40} />, title: 'Node.js', category: 'backend', color: 'rgba(51, 153, 51, 0.4)', brandColor: '#339933' },
    { id: 11, icon: <SiExpress size={40} />, title: 'Express.js', category: 'backend', color: 'rgba(255, 255, 255, 0.3)', brandColor: '#E2E8F0' },
    { id: 12, icon: <SiMongodb size={40} />, title: 'MongoDB', category: 'backend', color: 'rgba(71, 162, 72, 0.4)', brandColor: '#47A248' },
    { id: 13, icon: <SiRedis size={40} />, title: 'Redis', category: 'backend', color: 'rgba(220, 56, 45, 0.4)', brandColor: '#DC382D' },
    { id: 14, icon: <SiApachekafka size={40} />, title: 'Apache Kafka', category: 'backend', color: 'rgba(255, 255, 255, 0.4)', brandColor: '#FFFFFF' },
    { id: 15, icon: <SiPostgresql size={40} />, title: 'SQL / Databases', category: 'backend', color: 'rgba(65, 105, 225, 0.4)', brandColor: '#4169E1' },
    
    // Tools / Languages
    { id: 16, icon: <SiGit size={40} />, title: 'Git', category: 'tools', color: 'rgba(240, 80, 50, 0.4)', brandColor: '#F05032' },
    { id: 17, icon: <SiDocker size={40} />, title: 'Docker', category: 'tools', color: 'rgba(36, 150, 237, 0.4)', brandColor: '#2496ED' },
    { id: 18, icon: <SiCplusplus size={40} />, title: 'C++', category: 'tools', color: 'rgba(0, 89, 156, 0.4)', brandColor: '#00599C' },
    { id: 19, icon: <SiLeetcode size={40} />, title: 'DSA', category: 'tools', color: 'rgba(255, 161, 22, 0.4)', brandColor: '#FFA116' }
  ];

  const filteredTechs = activeTab === 'all' 
    ? techs 
    : techs.filter(tech => tech.category === activeTab);

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-gray-950 text-white flex items-center py-24 md:py-32">
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
            Skills
          </p>
          <p className="py-6 text-gray-400 text-base md:text-lg">
            These are the technologies and tools I work with to build scalable solutions.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === id 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid Display with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                key={tech.id}
                style={{ '--hover-glow': tech.color }}
                className="group relative p-6 rounded-xl glass-card text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
              >
                {/* Glow Background Indicator on Hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none filter blur-[15px]"
                  style={{ boxShadow: `0 0 25px ${tech.color}` }}
                ></div>

                {/* Skill Icon */}
                <div 
                  className="transition-transform duration-300 group-hover:scale-110 mb-4 z-10"
                  style={{ color: tech.brandColor }}
                >
                  {tech.icon}
                </div>

                {/* Skill Name */}
                <p className="text-sm font-medium text-gray-300 group-hover:text-white tracking-wide z-10">
                  {tech.title}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;