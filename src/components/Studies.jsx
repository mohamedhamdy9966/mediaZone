import React from "react";
import img from "../assets/image2.png";
import scrroll from "../assets/scrroll.png";

function Studies() {
  return (
    <div className="studies-container flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mx-auto px-4 md:px-16 py-8 md:py-12 gap-8">
      {/* Left side */}
      <div className="studies-text max-w-xl bg-[#F2361994] p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 jaro text-white">
          Our Case Studies
        </h1>
        <p className="text-xl md:text-4xl text-white">
          Proof of excellence? Let our work speak for itself.
        </p>
      </div>
      {/* Right side */}
      <div className="studies-image flex justify-center items-center w-full md:w-[300px]">
        <img
          src={img}
          alt="Case Study"
          className="w-full max-w-[220px] rounded-lg shadow-lg -rotate-12 md:-rotate-20"
        />
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src={scrroll}
            alt="Scroll indicator"
            className="w-28 h-20 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}

export default Studies;
