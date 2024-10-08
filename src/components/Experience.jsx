import React from 'react'
import html from'../assets/experience/html.png'
import css from'../assets/experience/css.png'
import javascript from'../assets/experience/javascript.png'
import reactImg from'../assets/experience/react.png'
import github from'../assets/experience/github.png'
import tailwind from'../assets/experience/tailwind.png'
import node from'../assets/experience/node.png'
import mongo from '../assets/experience/mongodb.png'
import cplus from '../assets/experience/c++.png'
import java from '../assets/experience/java.png'
import sql from '../assets/experience/sql.png'

const Experience = () => {

  const techs=[
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:javascript,
      title:'JAVASCRIPT',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:reactImg,
      title:'REACT',
      style:'shadow-blue-600'
    },
    {
      id:5,
      src:tailwind,
      title:'TAILWIND CSS',
      style:'shadow-sky-400'
    },
    {
      id:8,
      src:github,
      title:'GITHUB',
      style:'shadow-gray-400'
    },
    {
      id:9,
      src:mongo,
      title:'MONGODB',
      style:'shadow-green-800'
    },
    {
      id:10,
      src:node,
      title:'NODE.JS',
      style:'shadow-green-500'
    },
    {
      id:11,
      src:cplus,
      title:'C++',
      style:'shadow-blue-800'
    },
  
    {
      id:12,
      src:java,
      title:'JAVA',
      style:'shadow-orange-800'
    },
    {
      id:13,
      src:sql,
      title:'SQL',
      style:'shadow-blue-300'
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

      <div className='mt-[600px] sm:mt-56 md:mt-[700px]'>
        <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline  '>Experience</p>
        <p className='py-6'>These are the Technolgoies I've worked with.</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {techs.map(({id,src,title,style})=>(

          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} alt="" className='w-20 mx-auto' />
          <p className='mt-4'>{title}</p>
        </div>

        ))}
      </div>
    </div>
    </div>
  )
}

export default Experience