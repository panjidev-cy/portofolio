"use client";

import { TiArrowRightThick } from "react-icons/ti";
import { motion } from "framer-motion";
const HeroArrow = () => (
  <motion.div initial={{ position: "absolute", left: 0, animationDelay: "2s", rotate: 0 }} animate={{ left: "90%", rotate: 360 }} transition={{ duration: 3, ease: "easeInOut" }} className="p-2 md:p-3 bg-yellow-300 rounded-full relative">
    <TiArrowRightThick className="w-6 h-6" />
  </motion.div>
);

export default HeroArrow;
