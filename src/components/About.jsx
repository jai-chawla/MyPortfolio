import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineDatabase, HiOutlineLightningBolt } from 'react-icons/hi';

const About = () => {
  const cards = [
    {
      id: 1,
      icon: <HiOutlineCode size={30} className="text-cyan-400" />,
      title: "Frontend Craftsmanship",
      description: "Building responsive, modern, and high-fidelity user interfaces using React, Next.js, and Tailwind CSS."
    },
    {
      id: 2,
      icon: <HiOutlineDatabase size={30} className="text-blue-400" />,
      title: "Scalable Systems",
      description: "Developing robust backend APIs with Node.js & Express, leveraging Redis caching, Kafka messaging, and databases."
    },
    {
      id: 3,
      icon: <HiOutlineLightningBolt size={30} className="text-amber-400" />,
      title: "Algorithms & DSA",
      description: "Strong problem-solving foundation in C++, optimizing code complexity and focusing on scalable architecture."
    }
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-gray-950 text-white flex items-center py-24 md:py-32">
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
            About Me
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-start mt-6">
          
          {/* Narrative Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg text-justify"
          >
            <p>
              I am a dedicated <strong className="text-white">Full Stack Developer</strong> based in Delhi, India, with a B.Tech degree in Information Technology (<strong className="text-cyan-400">8.4 CGPA</strong>). I design dynamic, responsive, and performance-tuned web applications.
            </p>
            <p>
              My expertise spans the entire development stack—from building modern React and Next.js user interfaces to integrating backends, microservices, and databases. I believe in writing readable, maintainable, and optimized code.
            </p>
            <p>
              Continuous learning keeps me motivated. I actively study Data Structures and Algorithms in C++ to improve my analytical reasoning, and explore modern technologies like Redis and Kafka to build scalable systems.
            </p>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {cards.map(({ id, icon, title, description }) => (
              <div 
                key={id} 
                className="p-4 rounded-xl glass-card flex items-start space-x-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 duration-300"
              >
                <div className="p-2 bg-gray-900/60 rounded-lg border border-white/5 mt-1">
                  {icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold font-display text-base">{title}</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default About;