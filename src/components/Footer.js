import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const Footer = () => {
  return (
  <div className="flex fixed bottom-0 w-full h-[100px] justify-center bg-slate-600">
    <ul className="flex flex-row flex-wrap justify-between items-center">
      <li className="w-[120px] flex items-center">
        <a className="flex justify-between items-center w-full text-gray-200 text-lg"
        href="https://github.com/ayxu5723" target="_blank" rel="noreferrer noopener">
          Github <FaGithub />
        </a>
      </li>
      <li className="w-[120px] flex items-center">
        <a className="flex justify-between items-center w-full text-gray-200 text-lg"
        href="https://au.linkedin.com/" target="_blank" rel="noreferrer noopener">
          Linkedin <FaLinkedin />
        </a>
      </li>
      <li className="w-[120px] flex items-center">
        <a className="flex justify-between items-center w-full text-gray-200 text-lg"
        href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer noopener">
          Twitter <FaTwitter />
        </a>
      </li>
      <li className="w-[220px] flex items-center">
        <a className="flex justify-between items-center w-full text-gray-200 text-lg"
        href="mailto: alextest@gmail.com" target="_blank" rel="noreferrer noopener">
          alextest@gmail.com <HiOutlineMail />
        </a>
      </li>
    </ul>
  </div>  
  )
}

export default Footer