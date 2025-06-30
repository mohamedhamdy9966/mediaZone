import React, { useEffect, useState } from 'react'
import img from '../assets/image2.png'
import img2 from '../assets/logo.png2 1.png'
import logo from '../assets/logo.png'
import dogimg from '../assets/image 23.png'
import About from '../assets/Group 114.png'
import Skipped from './Skipped'
import Studies from './Studies'
import CaseStudies from './CaseStudies'

function Home() {
  const [navOpen, setNavOpen] = useState(false)
  const [zoomIn, setZoomIn] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => setZoomIn(true), 10)
  }, [])

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center 30%",
        backgroundSize: "250%",
        willChange: 'transform',
      }}
    >
      {/* Navigation Bar */}
      <nav className="flex items-center p-4 md:p-8 sticky top-0 bg-black/40 z-30">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white text-3xl mr-4 focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        {/* Left spacer */}
        <div className="flex-1 hidden md:block" />
        {/* Centered nav links */}
        <ul className={`flex-col md:flex-row flex space-y-4 md:space-y-0 md:space-x-6 text-white justify-center text-2xl absolute md:static left-0 right-0 top-full md:top-auto bg-black/90 md:bg-transparent transition-all duration-300 ${navOpen ? 'flex' : 'hidden'} md:flex`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">ContactUs</a></li>
        </ul>
        {/* Logo on the right */}
        <div className="flex-1 flex justify-end">
          <img src={img2} alt="Logo" className="h-12" />
        </div>
      </nav>

      {/* Logo and Headline with zoom-out animation */}
      <div className="flex flex-col items-center justify-center h-[50%] pt-20">
        <div
          className={`transition-transform duration-1000 ${zoomIn ? 'scale-100' : 'scale-125'}`}
        >
          <img src={logo} className="h-[200px] md:h-[300px] mb-8 drop-shadow-lg" alt="Main Logo" />
        </div>
        <div
          className={`text-white text-[48px] md:text-[92px] font-bold leading-tight drop-shadow-lg text-left transition-transform duration-1000 ${zoomIn ? 'scale-100' : 'scale-125'}`}
        >
          We Make it simple, but..
          <br />
          <span style={{ color: "#FFD933" }}>SIGNIFICANT</span>
        </div>
      </div>

      {/* Section with yellow text and subtext */}
      <div className="pt-[10%] w-11/12 md:w-3/4 mx-auto text-white text-[32px] md:text-[70px] flex flex-col md:flex-row justify-around items-center gap-8">
        {/* left side */}
        <div>
          <h2 className="max-w-[500px] jaro flex text-[32px] md:text-[42px] text-[#FFD933]">
            we make sure your idea & Creation delivered Properly
          </h2>
        </div>
        {/* right side */}
        <div className="max-w-[580px] h-fit jaro leading-tight flex items-end">
          <span className="text-[24px] md:text-[42px] text-[#FFD933]">
            we make sure your idea & Creation delivered Properly
          </span>
          <span className="text-sm md:text-lg max-w-[180px] ml-4 text-[#9CA3AF] inline-block leading-tight">
            WE PROVIDE 360 DEGREES ADVERTISING TOOLS,
          </span>
        </div>
      </div>

      {/* Who are we section, responsive */}
      <div className="flex flex-col md:flex-row items-center relative justify-between px-4 md:px-16 py-8 md:py-12 w-full md:w-3/4 mx-auto pt-10 md:pt-20 gap-8 ">
        {/* Left side */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Who are we</h1>
          <p className="text-base md:text-lg text-[#9CA3AF]">
            MEDIAZONE IS AN INTEGRATED MARKETING SOLUTIONS AGENCY THAT PROVIDES OUTSTANDING AND EFFECTIVE SERVICES TO HELP GROW YOUR BUSINESS AND ACHIEVE OBJECTIVES, INCREASE YOUR BRAND VALUE AND AWARENESS
          </p>
        </div>
        {/* Right side */}
        <div className="flex justify-center md:justify-end items-center w-full md:w-[300px] mt-8 md:mt-0">
          <img src={dogimg} alt="Logo" className="w-40 md:w-full max-w-[220px]" />
        </div>
        {/* About image below, centered */}
      </div>
      <div className="flex justify-center w-full">
        <img src={About} alt='about' className="mx-auto" />
      </div>
      <div className="mt-40">
        <Skipped />
        <Studies />
        <CaseStudies />
      </div>
    </div>
  )
}

export default Home