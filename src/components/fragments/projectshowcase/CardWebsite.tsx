"use client";

import React from "react";
import Image from "next/image";

interface CardWebsiteProps {
  title: string;
  description: string;
  imageSrc: string;
}

const CardWebsite = ({ title, description, imageSrc }: CardWebsiteProps) => {
  return (
    <div className="flex-shrink-0 relative aspect-[16/9] w-[90vw] sm:w-[80vw] md:w-[600px] lg:w-[700px] xl:w-[800px] rounded-xl overflow-hidden shadow-xl group bg-white">
      <Image src={imageSrc} alt={title} fill className="object-cover z-0 group-hover:blur-sm duration-300" />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center flex-col gap-4 p-6 text-center">
        <h3 className="font-bold text-2xl text-white">{title}</h3>
        <p className="text-white/90">{description}</p>
        <button className="mt-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition">View Project</button>
      </div>
    </div>
  );
};

export default CardWebsite;
