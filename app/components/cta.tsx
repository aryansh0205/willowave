"use client";
import React, { useRef } from "react";
import Image from "next/image";
import mirroai from "../Assets/mirrorai.png";
import { motion, useInView } from "framer-motion";
// import { FaWandMagicSparkles } from "react-icons/fa6";
import Link from "next/link";

const CTA = () => {
  // Ref for the description section
  const descRef = useRef(null);
  const isDescInView = useInView(descRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#000] min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 ">
      {/* Left Section */}
      <div className="flex-col space-y-8 md:space-y-12 max-w-[500px] pt-10">
        {/* Heading - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#ddd] text-2xl md:text-3xl font-normal"
        >
          See Your Life Comfortable with
          <p className="text-white font-bold tracking-normal"> us</p>
        </motion.div>
        {/* Description - Appears on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white text-lg md:text-xl font-bold"
        >
          Our Goal
          <div className="text-base md:w-[600px] text-[#aaa] font-normal">
            High-quality work within budget, with a focus on customer
            satisfaction.
          </div>
        </motion.div>
        {/* Description - Appears on Scroll */}
        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-lg md:text-xl font-bold "
        >
          Our vision
          <div className="text-base md:w-[600px] text-[#aaa] font-normal">
            We connect quality talent with clients—ensuring a seamless
            experience for both. Want it to sound more professional, friendly,
            or startup-style?
          </div>
        </motion.div>

        {/* Description - Appears on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white text-lg md:text-xl font-bold"
        >
          Inspiration
          <div className="text-base md:w-[600px] text-[#aaa] font-normal">
            Hiring full-time means juggling workload; freelancing offers
            flexibility but is costly. We strike a balance—with a lean core team
            and expert help when needed.
          </div>
        </motion.div>

        {/* Animated AI Button - Appears on Scroll */}
        <Link href="./MirrorAi">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative mt-8 px-10 py-3 bg-gradient-to-r from-[#9DFF50] to-[#2BBE9B] text-black font-bold rounded-2xl overflow-hidden flex items-center justify-center gap-2"
          >
            {/* <FaWandMagicSparkles className="text-xl" /> */}
            <span className="relative z-10">want to know more</span>
          </motion.button>
        </Link>
      </div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isDescInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full md:w-[500px] mt-10 md:mt-0"
      >
        <Image src={mirroai} alt="Wave Image" className="w-full" />
      </motion.div>
    </div>
  );
};

export default CTA;
