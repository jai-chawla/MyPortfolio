import React from 'react'
import dalle from '../assets/portfolio/dalle.png'
import disney from '../assets/portfolio/disney.png'
import linktree from '../assets/portfolio/linktree.png'
import netflix from '../assets/portfolio/netflix.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: disney,
      name:'Movie Streaming',
      link:'https://disneyplus-6fb54.web.app',
      code:'https://github.com/jai-chawla/movie-streaming'
    },
    {
      id: 2,
      src: dalle,
      name:'AI Image generator',
      link:'https://dall-e-client-three.vercel.app',
      code:'https://github.com/jai-chawla/dall-e'
    },
    {
      id: 3,
      src: linktree,
      name:'Linktree Frontend',
      link:'https://nexorand-intern-client.vercel.app',
      code:'https://github.com/jai-chawla/Nexorand-intern'
    },
    {
      id: 4,
      src: netflix,
      name:'Netflix clone',
      link:'https://github.com/jai-chawla/netflix-clone',
      code:'https://github.com/jai-chawla/netflix-clone'
    },
    
  ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-[450px] '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
          portfolios.map(({ id, src, name,link,code }) => (
            
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <p className='text-center mt-2'>{name}</p>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105'><a href={link} target='_blank'>Demo</a></button>
                  <button className='w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105'><a href={code} target='_blank'>Code</a></button>
                </div>
              </div>
            
          ))
        }
        </div>


      </div>
    </div>
  )
}

export default Portfolio