import React from 'react';
import resumeFile from '../../assets/files/sample_resume.pdf';


const Resume = () => {
  return (
    <div className="w-full h-screen">
      <div className="">Resume Page</div>
      <p className=""><a href={resumeFile} target="_blank" rel="noopener noreferrer" >Click here to download my resume</a></p>
      <div className="">
        <div className="">Skills</div>
        <div  className="">Front End:</div>
        <p>HTML, CSS, Bootstrap CSS, Tailwind CSS, JavaScript, Node.js, React.</p>
        <div className="">Back End:</div>
        <p> NodeJS, Express.js</p>
        <div className="">Database:</div>
        <p>MySQL, MongoDB, </p>
        <div className="">Architecture:</div>
        <p>RESTful API, GraphQL,</p>
      </div>
    </div>
  );
}

export default Resume