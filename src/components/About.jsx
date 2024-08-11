import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='sm:mt-0 pb-8 mt-44'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 \\'>About</p>
        </div>
        <p className='text-xl text-justify'>I am a dedicated Full Stack Developer based in Delhi, India, with a strong academic background and a passion for creating dynamic and responsive web applications. I hold a B.Tech degree in Information Technology, where I scored a CGPA of 8.4. My technical expertise lies in modern web development technologies, including React.js, Node.js, Tailwind CSS, and MongoDB, allowing me to build robust and efficient full-stack applications.</p>
        <br />
        <p className='text-xl text-justify'>In addition to my web development skills, I have a solid foundation in programming languages such as C++ and Java. I regularly practice Data Structures and Algorithms (DSA) to enhance my problem-solving abilities and ensure that my code is optimized and scalable. I am highly motivated to work in a professional environment where I can apply my knowledge and skills to real-world projects while continuing to learn and grow in this ever-evolving field.</p>
        <br />
        <p className='text-xl text-justify'>As I look forward to the next step in my career, I am eager to contribute to a team that values innovation, collaboration, and quality. My goal is to leverage my technical skills to create impactful digital solutions that drive business success.</p>
      </div>
    </div>
  )
}

export default About