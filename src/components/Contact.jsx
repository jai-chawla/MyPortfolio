import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-60">
        <div className="pb-8 mt-[300px] sm:mt-24 md:mt-44">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/alljerma" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 text-md sm:text-xl">
          <p className="cursor-pointer hover:text-blue-500 transition duration-300" style={{
            textShadow: '0 0 20px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.6), 0 0 40px rgba(0, 0, 255, 0.4)'
          }}>Contact Me</p>
          <div className="inline-flex space-x-8">
            <p className="cursor-pointer hover:text-blue-500 transition duration-300" style={{
            textShadow: '0 0 20px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.6), 0 0 40px rgba(0, 0, 255, 0.4)'
          }}>Email-jaichawlaoffc@gmail.com</p>
            <p className="cursor-pointer hover:text-blue-500 transition duration-300" style={{
            textShadow: '0 0 20px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.6), 0 0 40px rgba(0, 0, 255, 0.4)'
          }}>Phone no- +91 8920277149</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
