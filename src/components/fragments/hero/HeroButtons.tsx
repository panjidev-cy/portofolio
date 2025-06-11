"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const HeroButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  });

  return (
    <div className="bg-blue-400 z-20 inline-flex items-center overflow-hidden rounded-full font-semibold shadow-md">
      {/* Get Started Button */}
      <button className="bg-black text-white py-3.5 px-6 lg:py-4 lg:px-8 rounded-full whitespace-nowrap">
        <p className="font-semibold text-sm">Get Started</p>
      </button>

      {/* Animated Learn More Button */}
      {isVisible && (
        <motion.button initial={{ width: 0, opacity: 0 }} animate={{ width: "8rem", opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.5 }} className="text-white px-3 lg:px-6 whitespace-nowrap overflow-hidden">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-semibold text-sm">
            Learn More
          </motion.p>
        </motion.button>
      )}
    </div>
  );
};

export default HeroButtons;
