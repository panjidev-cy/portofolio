"use client";

import React from "react";
import Image from "next/image";

interface CardVisualProps {
  title: string;
  images: string[]; // Array of image URLs
}

const CardVisual = ({ title, images }: CardVisualProps) => {
  return (
    <div className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[600px] lg:w-[700px] xl:w-[800px] rounded-xl overflow-hidden shadow-xl bg-white p-4">
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 4).map((img, idx) => (
          <div key={idx} className="relative aspect-square">
            <Image src={img} alt={`Design ${idx + 1}`} fill className="object-cover rounded-lg" />
            {idx === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                <span className="text-white text-2xl font-bold">+{images.length - 4}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-gray-600">{images.length} design works</p>
    </div>
  );
};

export default CardVisual;
