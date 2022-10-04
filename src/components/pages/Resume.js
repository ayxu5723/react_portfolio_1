import React from 'react';
import resumeFile from '../../assets/files/sample_resume.pdf';
import HTML from '../../assets/images/html.png';
import CSS from '../../assets/images/css.png';
import JavaScript from '../../assets/images/javascript.png';
import tailwind from '../../assets/images/tailwind.png';
import Node from '../../assets/images/node.png';
import Mongo from '../../assets/images/mongo.png';
import GitHub from '../../assets/images/github.png';
import Reactimg from '../../assets/images/react.png'
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="w-full h-screen bg-zinc-500">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center content-center h-full">
        <p className="text-3xl">Click <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:font-bold inline-flex">here <FaFileDownload /> </a> to download my resume</p>
        <p className="text-2xl font-bold mt-4 mb-2 border-b-4 border-pink-600">Skills</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="text-xl font-bold">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="text-xl font-bold">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className="text-xl font-bold">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="text-xl font-bold">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="text-xl font-bold">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={Reactimg} alt="React icon" />
            <p className="text-xl font-bold">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="text-xl font-bold">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">          
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="text-xl font-bold">GitHub</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Resume