"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionHeader = () => {
  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const paragraphVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <div className="text-center mb-16">
      <motion.h2
        className="text-[30px] md:text-[56px] font-normal text-black font-fontWorkSans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={titleVariants}
      >
        Quality Products
      </motion.h2>

      <motion.p
        className="max-w-80 md:max-w-3xl mx-auto text-base md:text-2xl text-mutedGrayishTone font-fontWorkSans mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={paragraphVariants}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </motion.p>
    </div>
  );
};

export default SectionHeader;
