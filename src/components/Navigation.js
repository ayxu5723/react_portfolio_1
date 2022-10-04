import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';



const Navigation = ({ currentPage, handlePageChange}) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-600 text-gray-300">
      <h2 className="text-2xl">Alex Xu</h2>
      <nav>
        {/* Menu */}
        <ul className="hidden md:flex text-2xl">
          <li>
            <a className={currentPage === "About" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#about"
            onClick={() => handlePageChange('About')}>About</a>
          </li>
          <li>
          <a className={currentPage === "Projects" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#projects"
            onClick={() => handlePageChange('Projects')}>Portfolio</a>
        </li>
        <li>
        <a className={currentPage === "Contact" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#contact"
            onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>
        <li>
        <a className={currentPage === "Resume" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#resume"
            onClick={() => handlePageChange('Resume')}>Resume</a>
        </li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center"}>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "About" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#about"
            onClick={() => handlePageChange('About')}>About</a>
        </li>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "Projects" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#projects"
            onClick={() => handlePageChange('Projects')}>Portfolio</a>
        </li>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "Contact" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#contact"
            onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "Resume" ? "font-bold text-sky-600" : "font-normal text-gray-300  hover:text-blue-600"} href="#resume"
            onClick={() => handlePageChange('Resume')}>Resume</a>
        </li>
      </ul>

    </nav>
  </div>  
  )
}

export default Navigation