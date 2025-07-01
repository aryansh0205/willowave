"use client";
import React from "react";
import { motion } from "framer-motion";
import Grid from "../Assets/Grid.png"; // Ensure correct path to the image
import Image from "next/image";
import wave from "../Assets/wave.png";

const Hero = () => {
  // Animation for letter-by-letter effect
  // const letterVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { delay: i * 0.05, duration: 0.5, ease: "easeInOut" },
  //   }),
  // };

  // Animation for word-by-word effect
  // const wordVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
  //   }),
  // };

  // Animation for the whole text block
  // const textBlockVariants = {
  //   hidden: { opacity: 0, scale: 0.95 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.5 },
  //   },
  // };

  // Split text into letters for animation
  const splitLetters = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        // variants={letterVariants}
        custom={index} // Pass the index to calculate the delay
      >
        {char}
      </motion.span>
    ));
  };

  // Split text into words for animation
  const splitWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        // variants={wordVariants}
        custom={index} // Pass the index to calculate the delay
        style={{ display: "inline-block", marginRight: "0.25em" }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <div className="h-[80vh] md:h-[85vh] bg-cover bg-center relative overflow-hidden select-none">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Grid.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1.1 }} // Start slightly zoomed in
        animate={{ scale: 1 }} // Zoom out to normal size
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }} // Smooth looping animation
      />
      {/* Overlay to make text readable (optional) */}
      <div className="absolute h-full inset-0 bg-[#000] opacity-30"></div>

      {/* Content */}
      <div className="flex justify-center items-center h-full text-white relative z-10 px-4 md:px-8">
        <div className="flex flex-col justify-start items-center gap-6 md:gap-[30px]">
          {/* Heading with letter-by-letter animation */}
          <motion.div
            className="flex flex-col justify-start items-center gap-5"
            initial="hidden"
            animate="visible"
            // variants={textBlockVariants}/ // Apply textBlockVariants
          >
            <motion.div
              className="text-center text-white text-[11px] font-medium font-['Manrope'] uppercase leading-none tracking-widest border-1 border-[#5d5d5d6f] backdrop-blur-sm rounded-full p-4 px-10"
              // variants={textBlockVariants} // Add textBlockVariants here as well
            >
              Helping Hands ✌️
            </motion.div>
            <motion.div
              className="w-full md:w-[800px] text-center text-white text-4xl md:text-6xl font-normal font-['Calistoga'] leading-16"
              initial="hidden"
              animate="visible"
              // variants={textBlockVariants} // Add textBlockVariants for this block too
            >
              {splitLetters(
                "Behind Every Great Agency is a Scalable Team Like Ours"
              )}
            </motion.div>
          </motion.div>

          {/* Description with word-by-word animation */}
          <motion.div
            className="w-full md:w-[900px] text-center"
            initial="hidden"
            animate="visible"
            // variants={textBlockVariants} // Add variants here
          >
            <motion.div
              className="text-[#dddddd] text-md md:text-[16px] font-medium font-['Manrope'] leading-8 md:leading-6"
              // variants={textBlockVariants} // Add textBlockVariants here
            >
              {splitWords(
                "We’re not an agency. We’re the engine behind them — a full-stack service provider for digital agencies, businesses, and creators. High-quality output. Fast turnaround. Zero drama."
              )}
            </motion.div>
          </motion.div>

          {/* Animated Button */}
          <motion.div
            className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5"
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            variants={{
              hidden: { opacity: 0, scale: 0.9 }, // Initial state
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 1, duration: 0.5, ease: "easeOut" },
              }, // Animate to full opacity and normal scale
            }}
          >
            {/* Rotating gradient background */}
            <motion.span
              className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none"
              whileHover={{ rotate: 360 }} // Rotate on hover
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }} // Continuous rotation
            />

            {/* Button */}
            <button className="h-10 px-6 rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900">
              View Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Wave Image */}
      <div className="absolute left-0 -bottom-1 md:-bottom-3 w-full rotate-180">
        <Image src={wave} alt="Wave Image" className="md:w-full" />
      </div>
    </div>
  );
};

export default Hero;
