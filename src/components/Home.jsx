import React, { useEffect, useState, useRef } from "react";
import img from "../assets/img3.png";
import img2 from "../assets/logo.png2 1.png";
import logo from "../assets/logo.png";
import scroll from "../assets/scroll.png";
import dogimg from "../assets/image 23.png";
import About from "../assets/Group 114.png";
import Skipped from "./Skipped";
import Studies from "./Studies";
import CaseStudies from "./CaseStudies";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  // Refs for different sections
  const whoAreWeRef = useRef(null);
  const whoAreWeTextRef = useRef(null);
  const whoAreWeImageRef = useRef(null);
  const aboutImageRef = useRef(null);
  const yellowSectionLeftRef = useRef(null);
  const yellowSectionRightRef = useRef(null);
  const skippedRef = useRef(null);
  const studiesRef = useRef(null);
  const caseRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setZoomIn(true), 10);

    // Animation for yellow section
    if (yellowSectionLeftRef.current) {
      gsap.fromTo(
        yellowSectionLeftRef.current,
        { opacity: 0, x: -150, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: yellowSectionLeftRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (yellowSectionRightRef.current) {
      gsap.fromTo(
        yellowSectionRightRef.current,
        { opacity: 0, x: 150, rotation: 10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: yellowSectionRightRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Who are we section animations
    if (whoAreWeTextRef.current) {
      gsap.fromTo(
        whoAreWeTextRef.current,
        { opacity: 0, y: -100, x: -50 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoAreWeTextRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (whoAreWeImageRef.current) {
      gsap.fromTo(
        whoAreWeImageRef.current,
        { opacity: 0, x: 100, y: -50, rotation: 20, scale: 0.5 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: whoAreWeImageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // About image animation
    if (aboutImageRef.current) {
      gsap.fromTo(
        aboutImageRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutImageRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Enhanced Skipped animation - staggered entrance
    if (skippedRef.current) {
      const skippedChildren = skippedRef.current.children;
      gsap.fromTo(
        skippedChildren,
        { opacity: 0, y: -80, rotation: -45, scale: 0.3 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          ease: "bounce.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: skippedRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Enhanced Studies animation - slide and rotate
    if (studiesRef.current) {
      const studiesContainer =
        studiesRef.current.querySelector(".studies-container");
      const studiesText = studiesRef.current.querySelector(".studies-text");
      const studiesImage = studiesRef.current.querySelector(".studies-image");

      if (studiesText) {
        gsap.fromTo(
          studiesText,
          { opacity: 0, x: -200, rotation: -15 },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: studiesContainer,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (studiesImage) {
        gsap.fromTo(
          studiesImage,
          { opacity: 0, x: 200, y: -100, rotation: 45, scale: 0.5 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.6,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: studiesContainer,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }

    // Enhanced Case Studies animation - cascade effect
    if (caseRef.current) {
      const caseTitle = caseRef.current.querySelector("h1");
      const caseImages = caseRef.current.querySelectorAll("img");

      if (caseTitle) {
        gsap.fromTo(
          caseTitle,
          { opacity: 0, y: -50, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: caseTitle,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (caseImages.length > 0) {
        gsap.fromTo(
          caseImages,
          {
            opacity: 0,
            y: 150,
            x: (index) => (index % 2 === 0 ? -100 : 100),
            rotation: (index) => (index % 2 === 0 ? -20 : 20),
            scale: 0.3,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1.5,
              from: "center",
            },
            scrollTrigger: {
              trigger: caseImages[0],
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }
  }, []);

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Bar */}
      <nav className="flex items-center p-4 md:p-8 sticky top-0 z-30">
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
        <ul
          className={`flex-col md:flex-row flex space-y-4 md:space-y-0 md:space-x-6 text-white justify-center text-2xl absolute md:static left-0 right-0 top-full md:top-auto bg-black/90 md:bg-transparent transition-all duration-300 ${
            navOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <a href="#" style={{ color: "#fff" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "gray" }}>
              About
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "gray" }}>
              Services
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "gray" }}>
              Contact Us
            </a>
          </li>
        </ul>
        {/* Logo on the right */}
        <div className="flex-1 flex justify-end">
          <img src={img2} alt="Logo" className="h-44" />
        </div>
      </nav>

      {/* Logo and Headline with zoom-out animation */}
      <div className="flex flex-col items-center justify-center h-[50%] pt-20">
        <div
          className={`transition-transform duration-1000 ${
            zoomIn ? "scale-100" : "scale-125"
          }`}
        >
          <img
            src={logo}
            className="h-[200px] md:h-[300px] mb-8 drop-shadow-lg"
            alt="Main Logo"
          />
        </div>
        <div
          className={`text-white text-[48px] md:text-[92px] font-bold leading-tight drop-shadow-lg text-left transition-transform duration-1000 ${
            zoomIn ? "scale-100" : "scale-125"
          }`}
        >
          We Make it simple, but..
          <br />
          <span style={{ color: "#FFD933" }}>SIGNIFICANT</span>
        </div>
      </div>

      {/* Section with yellow text and subtext */}
      <div className="pt-[10%] w-11/12 md:w-3/4 mx-auto text-white text-[32px] md:text-[70px] flex flex-col md:flex-row justify-around items-center gap-8">
        {/* left side */}
        <div ref={yellowSectionLeftRef}>
          <h2 className="max-w-[500px] jaro flex text-[32px] md:text-[42px] text-[#FFD933]">
            we make sure your idea & Creation delivered Properly
          </h2>
        </div>
        {/* right side */}
        <div
          ref={yellowSectionRightRef}
          className="max-w-[580px] h-fit jaro leading-tight flex items-end"
        >
          <span className="text-[24px] md:text-[42px] text-[#FFD933]">
            we make sure your idea & Creation delivered Properly
          </span>
          <span className="text-sm md:text-lg max-w-[180px] ml-4 text-[#9CA3AF] inline-block leading-tight">
            WE PROVIDE 360 DEGREES ADVERTISING TOOLS,
          </span>
        </div>
      </div>

      {/* Who are we section, responsive */}
      <div
        ref={whoAreWeRef}
        className="flex flex-col md:flex-row items-center relative justify-between px-4 md:px-16 py-8 md:py-12 w-full md:w-3/4 mx-auto pt-10 md:pt-20 gap-8 "
      >
        {/* Left side */}
        <div
          ref={whoAreWeTextRef}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Who are we
          </h1>
          <p className="text-base md:text-lg text-[#9CA3AF]">
            MEDIAZONE IS AN INTEGRATED MARKETING SOLUTIONS AGENCY THAT PROVIDES
            OUTSTANDING AND EFFECTIVE SERVICES TO HELP GROW YOUR BUSINESS AND
            ACHIEVE OBJECTIVES, INCREASE YOUR BRAND VALUE AND AWARENESS
          </p>
        </div>
        {/* Right side */}
        <div
          ref={whoAreWeImageRef}
          className="flex justify-center md:justify-end items-center w-full md:w-[300px] mt-8 md:mt-0"
        >
          <img
            src={dogimg}
            alt="Logo"
            className="w-40 md:w-full max-w-[220px]"
          />
        </div>
        {/* About image below, centered */}
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src={scroll}
          alt="Scroll indicator"
          className="w-34 h-24 animate-bounce"
        />
      </div>
      <div className="flex justify-center w-full">
        <img ref={aboutImageRef} src={About} alt="about" className="mx-auto" />
      </div>
      <div className="mt-40">
        {/* Skipped animation */}
        <div ref={skippedRef}>
          <Skipped />
        </div>
        <div ref={studiesRef}>
          <Studies />
        </div>
        {/* Case Studies animation */}
        <div ref={caseRef}>
          <CaseStudies />
        </div>
      </div>
    </div>
  );
}

export default Home;
