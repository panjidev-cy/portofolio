"use client";

import React, { useEffect, useRef } from "react";

const ProjectCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    const secondCard = cardRefs.current[1]; // Card ke-2 (indeks 1)

    if (container && secondCard) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = secondCard.offsetLeft + secondCard.offsetWidth / 2;

      // Geser scrollLeft agar card ke-2 berada di tengah container
      container.scrollLeft = cardCenter - containerCenter;
    }
  }, []);

  return (
    <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide px-[5vw] scroll-smooth">
      <div className="flex gap-6 w-max">
        {[1, 2, 3].map((_, i) => (
          <div key={i} ref={(el) => (cardRefs.current[i] = el)} className="flex-shrink-0 relative aspect-[16/9] w-[90vw] sm:w-[80vw] md:w-[600px] lg:w-[700px] xl:w-[800px] bg-blue-100 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 text-center text-xl font-bold text-slate-600">Card {i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
