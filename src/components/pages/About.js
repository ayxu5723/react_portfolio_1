import React from 'react';
import avatar1 from '../../assets/images/avatar1.png';

const About = () => {
  return (
  <div name="about" className="w-full h-screen"> 

    <div className="max-w-1000px mx-auto px-8 flex flex-col justify-center h-full"> 
      <img src={avatar1} alt="avatar" className="w-[120px] h-[120px]"/>
      <h2>Hi, my name is Alex Xu</h2>
      <h3>I am a Full Stack Developer</h3>
    </div>

  </div>
  )
  
}

export default About