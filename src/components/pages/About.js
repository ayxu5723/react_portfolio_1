import React from 'react';
import avatar1 from '../../assets/images/avatar1.png';

const About = () => {
  return (
  <div name="about" className="w-full h-screen bg-zinc-500"> 

    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"> 
      
      <div className="flex px-8 columns-2 items-center">
        <img src={avatar1} alt="avatar" className="w-[200px] h-[200px]"/>      
        <p className="text-sky-400 font-bold text-2xl break-after-column">Hello, my name is</p>
        <p>  </p>
        <p className="text-sky-300 font-bold text-8xl w-full">Alex Xu</p>
      </div>

      <h3 className="text-gray-300 font-bold text-4xl mt-4 mb-2">I am a Full Stack Developer</h3>
      <p className="text-gray-200 font-bold text-2xl">This is a short bio about me. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

  </div>
  )
  
}

export default About