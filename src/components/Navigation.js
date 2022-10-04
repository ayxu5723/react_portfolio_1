import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';



const Navigation = ({ currentPage, handlePageChange}) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <nav>
      {/* Menu */}
      <ul className="hidden md:flex text-2xl">
        <li>
          <a className={currentPage === "About" ? "nav-link active text-reset" : "nav-link text-reset"} href="#about"
            onClick={() => handlePageChange('About')}>About</a>
        </li>
        <li>
        <a className={currentPage === "Projects" ? "nav-link active text-reset" : "nav-link text-reset"} href="#projects"
            onClick={() => handlePageChange('Projects')}>Portfolio</a>
        </li>
        <li>
        <a className={currentPage === "Contact" ? "nav-link active text-reset" : "nav-link text-reset"} href="#contact"
            onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>
        <li>
        <a className={currentPage === "Resume" ? "nav-link active text-reset" : "nav-link text-reset"} href="#resume"
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
        <a className={currentPage === "About" ? "nav-link active text-reset" : "nav-link text-reset"} href="#about"
            onClick={() => handlePageChange('About')}>About</a>
        </li>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "Projects" ? "nav-link active text-reset" : "nav-link text-reset"} href="#projects"
            onClick={() => handlePageChange('Projects')}>Portfolio</a>
        </li>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "Contact" ? "nav-link active text-reset" : "nav-link text-reset"} href="#contact"
            onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>
        <li className='py-6 text-4xl'>
        <a className={currentPage === "Resume" ? "nav-link active text-reset" : "nav-link text-reset"} href="#resume"
            onClick={() => handlePageChange('Resume')}>Resume</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navigation