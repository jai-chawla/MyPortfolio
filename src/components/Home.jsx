import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import pic from '../assets/pic.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl sm:mt-20  font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-white py-4 max-w-md text-justify'>
            I am a ReactJS developer with a strong background in full-stack development. Proficient in leveraging ReactJS
            to build dynamic and responsive user interfaces, while also adept at integrating front-end components with
            back-end services.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my pic" className='rounded-xl mx-auto w-2/3 md:w-full glow-border ' />
        </div>
      </div>
    </div>
  )
}

export default Home