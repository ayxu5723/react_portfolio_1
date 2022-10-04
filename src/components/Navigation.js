import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center"}>
        <li className='py-6 text-4xl'>About Me</li>
        <li className='py-6 text-4xl'>Portfolio</li>
        <li className='py-6 text-4xl'>Contact</li>
        <li className='py-6 text-4xl'>Resume</li>
      </ul>

    </div>
  )
}

export default Navigation