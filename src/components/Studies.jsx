import React, { useEffect, useRef } from "react";
import img from "../assets/Group-37.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Studies() {
  const studiesImageRef = useRef(null);

  useEffect(() => {
    if (studiesImageRef.current) {
      gsap.fromTo(
        studiesImageRef.current,
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
            trigger: studiesImageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="studies-container flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mx-auto px-4 md:px-16 py-8 md:py-12 gap-8">
        <img
          ref={studiesImageRef}
          src={img}
          alt="Case Study"
          className="w-full rounded-lg shadow-lg -rotate-12 md:-rotate-2 my-1"
        />
      </div>
    </>
  );
}

export default Studies;
