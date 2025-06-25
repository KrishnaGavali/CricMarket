"use client";
import React from "react";
import { motion } from "motion/react";

const AnimatedHeroSectionBackground = () => {
  return (
    <motion.div
      className=" w-full h-full z-[1] fixed"
      id="backgroundGradient"
      initial={{
        background: "radial-gradient(0% 0%, blue 0%, transparent 30%)",
      }}
      animate={{
        background: "radial-gradient(250% 150%, blue -100%, transparent 30%)",
      }}
      transition={{
        delay: 0.5,
        duration: 0.3,
      }}
    ></motion.div>
  );
};

export default AnimatedHeroSectionBackground;
