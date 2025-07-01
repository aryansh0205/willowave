"use client";
import React from "react";
import Image from "next/image";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";
import c3 from "../Assets/c3.png";
import c4 from "../Assets/c4.png";
import { motion } from "framer-motion";
// import { CiCoins1 } from "react-icons/ci";

const Cards = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of each child
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <motion.div
        className="w-full relative flex flex-wrap justify-center items-center gap-4 md:gap-8 md:flex-nowrap -top-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animate only once when the component comes into view
      >
        {/* Card 1 */}
        <motion.div
          className="w-[150px] pp:w-[200px] md:w-[300px] h-[150px] pp:h-[200px] md:h-[300px] relative rounded-[35px] shadow-xl border-4 md:border-8 border-white overflow-hidden sm:-top-6"
          variants={cardVariants}
          initial={{ rotate: 6 }} // Initial rotation
          whileHover={{ rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Reset rotation to 0 on hover
          transition={{ type: "spring", stiffness: 300 }} // Spring animation
        >
          <Image src={c1} alt="Card 1" layout="fill" objectFit="cover" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-[150px] pp:w-[200px] md:w-[300px] h-[150px] pp:h-[200px] md:h-[300px] relative rounded-[35px] shadow-xl border-4 md:border-8 border-white overflow-hidden sm:-top-6"
          variants={cardVariants}
          initial={{ rotate: -6 }} // Initial rotation
          whileHover={{ rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Reset rotation to 0 on hover
          transition={{ type: "spring", stiffness: 300 }} // Spring animation
        >
          <Image src={c2} alt="Card 2" layout="fill" objectFit="cover" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-[150px] pp:w-[200px] md:w-[300px] h-[150px] pp:h-[200px] md:h-[300px] relative rounded-[35px] shadow-xl border-4 md:border-8 border-white overflow-hidden sm:-top-6"
          variants={cardVariants}
          initial={{ rotate: 6 }} // Initial rotation
          whileHover={{ rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Reset rotation to 0 on hover
          transition={{ type: "spring", stiffness: 300 }} // Spring animation
        >
          <Image src={c3} alt="Card 3" layout="fill" objectFit="cover" />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="w-[150px] pp:w-[200px] md:w-[300px] h-[150px] pp:h-[200px] md:h-[300px] relative rounded-[35px] shadow-xl border-4 md:border-8 border-white overflow-hidden sm:-top-6"
          variants={cardVariants}
          initial={{ rotate: -6 }} // Initial rotation
          whileHover={{ rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Reset rotation to 0 on hover
          transition={{ type: "spring", stiffness: 300 }} // Spring animation
        >
          <Image src={c4} alt="Card 4" layout="fill" objectFit="cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cards;