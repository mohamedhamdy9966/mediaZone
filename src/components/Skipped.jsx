import React from "react";
import and from "../assets/and.png";
import client from "../assets/clients.png";
import project from "../assets/Group-40.png";
import rectangle from "../assets/Rectangle-66.png";
import rectangle2 from "../assets/Rectangle-67.png";
import our from "../assets/MEDIAZONE.png";
import caseStudies from "../assets/case-studies.png";

function Skipped() {
  return (
    <div className="flex flex-col items-center justify-center my-16 pt-40 w-full">
      <div className="flex items-center mb-4">
        <div className="relative flex items-center mr-4">
          <img src={rectangle2} className="absolute w-64 h-32 object-contain" />
          <img
            src={caseStudies}
            className="relative z-10 w-48 h-auto mx-auto"
          />
        </div>
        <div>
          <img src={our} className="w-32 h-auto" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {/* Project Container */}
        <div className="flex w-96 items-center justify-center h-48 rounded-full mr-[-40px] z-20">
          <img
            src={project}
            alt="Project"
            className="w-full h-full object-contain"
          />
        </div>

        {/* & Symbol */}
        <span className="text-5xl font-bold text-white select-none z-50 relative ml-[-80px] mb-[-80px]">
          <img src={and} alt="And" className="w-16 h-auto" />
        </span>

        {/* Client Container with Rectangle background and client inside */}
        <div className="relative w-80 h-48 flex items-center justify-center ml-[-40px] mb-[-90px] z-10">
          <img
            src={rectangle}
            alt="Rectangle"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <img src={client} alt="Client" className="z-20 w-60 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Skipped;
