import React from 'react';
import Gratitude from "../../assets/images/Gratitude_home.png"
import Jate from "../../assets/images/jate1.png"
import Notetaker from "../../assets/images/notetaker.png"
import Pwgen from "../../assets/images/Pwgen1.png"
import Satisfy from "../../assets/images/satisfy.jpeg"
import Techblog from "../../assets/images/techblog.png"

const Projects = () => {
  return (
  <div className="w-full h-screen bg-zinc-500"> 

    <div className="max-w-1000px mx-auto px-8 flex flex-col justify-center h-full w-full"> 
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Portfolio</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        <div style={{backgroundImage: `url(${Gratitude})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/* Hover */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Gratitude
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Repository</button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${Jate})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/* Hover */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Just Another Text Editor
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Repository</button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${Notetaker})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/* Hover */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Notetaker
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Repository</button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${Pwgen})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/* Hover */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Password Generator
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Repository</button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${Satisfy})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/* Hover */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Satisfy
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Repository</button>
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${Techblog})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/* Hover */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Tech Blog
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Repository</button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  )
  
}

export default Projects