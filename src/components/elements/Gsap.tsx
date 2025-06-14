"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const Gsap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll-triggered animation for SVG morphing
    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current.querySelector("#circle"),
        { morphSVG: "#circle" },
        {
          morphSVG: "#star",
          duration: 2,
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }

    // Scroll-triggered animation for box
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Framer Motion component animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          margin: "50px auto",
          width: "200px",
          height: "200px",
          backgroundColor: "#3498db",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "1.5rem",
        }}
      >
        Framer Motion Box
      </motion.div>

      {/* GSAP ScrollTrigger animation */}
      <div
        ref={boxRef}
        style={{
          margin: "100vh 0",
          width: "100px",
          height: "100px",
          backgroundColor: "#2ecc71",
        }}
      ></div>

      {/* SVG Morphing animation */}
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200" style={{ display: "block", margin: "100vh auto" }}>
        <path id="circle" d="M50,10 A40,40 0 1,1 49.9,10 Z" fill="#e74c3c" />
        <path id="star" d="M50 10 L61 35 L87 35 L66 55 L74 85 L50 70 L26 85 L34 55 L13 35 L39 35 Z" fill="transparent" stroke="#e74c3c" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Gsap;
