import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-gray-950 text-white flex items-center py-24 md:py-32">
      <div className="flex flex-col p-6 justify-center max-w-screen-lg mx-auto w-full h-full">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 font-display">
            Contact
          </p>
          <p className="py-6 text-gray-400 text-base md:text-lg">
            Submit the form below or reach out directly to start a conversation.
          </p>
        </motion.div>

        {/* Content Box */}
        <div className="grid md:grid-cols-2 gap-12 items-start mt-6">
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <form 
              action="https://getform.io/f/alljerma" 
              method="POST" 
              className="flex flex-col w-full space-y-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
              />
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Enter your message"
                className="p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300 font-medium text-sm w-fit mr-auto"
              >
                Let's Talk
              </button>
            </form>
          </motion.div>

          {/* Quick Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:pl-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">Direct Connect</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Feel free to email me directly or reach out via my phone. I am available for opportunities, project contracts, and discussions.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a 
                href="mailto:jaichawlaoffc@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg text-cyan-400">
                  <HiOutlineMail size={20} />
                </div>
                <span className="text-sm font-medium">jaichawlaoffc@gmail.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+918920277149" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg text-cyan-400">
                  <HiOutlinePhone size={20} />
                </div>
                <span className="text-sm font-medium">+91 8920277149</span>
              </a>
            </div>

            {/* Social Grid (Responsive helper for smaller screens) */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Social Links</p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/jai-chawla-373886216/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 text-gray-300 hover:text-white rounded-lg transition-all duration-350"
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href="https://github.com/jai-chawla" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white rounded-lg transition-all duration-350"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>

      </div>
    </div>
  );
};

export default Contact;
