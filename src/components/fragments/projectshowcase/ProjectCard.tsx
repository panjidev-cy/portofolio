"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ProjectCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    const secondCard = cardRefs.current[1]; // Card ke-2 (indeks 1)

    if (container && secondCard) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = secondCard.offsetLeft + secondCard.offsetWidth / 2;

      container.scrollLeft = cardCenter - containerCenter;
    }
  }, []);

  return (
    <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide px-[5vw] py-5 scroll-smooth">
      <div className="flex gap-6 w-max">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex-shrink-0 relative aspect-[16/9] w-[90vw] sm:w-[80vw] md:w-[600px] lg:w-[700px] xl:w-[800px] rounded-xl overflow-hidden shadow-xl group"
          >
            <Image src="/assets/web.png" alt={`Project Image ${i + 1}`} fill className="object-contain z-0 group-hover:blur-xl duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full   flex items-center justify-center flex-col gap-5 group-hover:bg-slate-100/50">
              <h3 className="font-jakarta font-bold text-slate-800 opacity-0 group-hover:opacity-100  text-center duration-500">title my project</h3>
              <p className="font-poppins text-base w-3/5 text-slate-600 opacity-0 group-hover:opacity-100 duration-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sed animi praesentium distinctio vero nemo?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
