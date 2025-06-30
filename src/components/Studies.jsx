import React from 'react'
import img from '../assets/image2.png'

function Studies() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mx-auto px-4 md:px-16 py-8 md:py-12 gap-8">
      {/* Left side */}
      <div className="max-w-xl bg-[#F2361994] p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 jaro text-white">Our Case Studies</h1>
        <p className="text-xl md:text-4xl text-white">
          Proof of excellence? Let our work speak for itself.
        </p>
      </div>
      {/* Right side */}
      <div className="flex justify-center items-center w-full md:w-[300px]">
        <img src={img} alt="Case Study" className="w-full max-w-[220px] rounded-lg shadow-lg -rotate-12 md:-rotate-20" />
      </div>
    </div>
  )
}

export default Studies;