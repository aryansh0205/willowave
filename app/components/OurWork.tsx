"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Work1 from "../Assets/work1.png";
import Work2 from "../Assets/work2.png";
import Work3 from "../Assets/work3.png";
import Work4 from "../Assets/work4.png";
import Work5 from "../Assets/work5.png";
import Work6 from "../Assets/work6.png";
import wave from "../Assets/wave.png";
// import { BsArrowUpRightCircleFill } from "react-icons/bs";

const OurWork = () => {
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

  // Animation for the hero text
  // const heroTextVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };

  // Data for each project
  const projects = [
    {
      id: 1,
      image: Work4,
      title: "E-Commerce Website",
      description:
        "Designed and developed a fully responsive e-commerce website with seamless navigation, secure payment gateways, and advanced product filtering. Increased client sales by 40% within the first three months.",
    },
    {
      id: 2,
      image: Work1,
      title: "Jewelry Website",
      description:
        "Created a stunning jewelry website with a focus on elegance and user experience. Integrated a custom product configurator, enabling customers to design their own jewelry pieces. Boosted customer engagement by 50%.",
    },
    {
      id: 3,
      image: Work5,
      title: "Fashion Website",
      description:
        "Built a visually appealing fashion website with a focus on storytelling and brand identity. Integrated a blog and lookbook to showcase the latest trends, resulting in a 35% increase in website traffic.",
    },
    {
      id: 4,
      image: Work3,
      title: "E-Commerce Product Page",
      description:
        "Revamped the product page for an e-commerce platform, optimizing it for conversions with high-quality visuals, detailed descriptions, and a user-friendly interface. Improved conversion rates by 25%.",
    },
    {
      id: 5,
      image: Work2,
      title: "Mobile Apps for E-Commerce",
      description:
        "Developed cross-platform mobile apps for an e-commerce brand, offering a seamless shopping experience with features like push notifications, personalized recommendations, and one-click checkout. Increased mobile sales by 60%.",
    },
    {
      id: 6,
      image: Work6,
      title: "Fashion Product Pages",
      description:
        "Designed and optimized fashion product pages with high-resolution images, size guides, and customer reviews. Enhanced the user experience, leading to a 30% reduction in cart abandonment rates.",
    },
  ];

  return (
    <div>
      <div className="relative top-10 bg-[#000] select-none">
        <div>
          <motion.div
            className="w-full h-60 md:h-72 flex justify-center items-end relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative text-center z-10 space-y-6"
              // variants={heroTextVariants}
            >
              <motion.div
                className="text-white text-2xl md:text-[40px] font-semibold font-['Manrope'] tracking-wide"
                // variants={heroTextVariants}
              >
                Our Best Work of
              </motion.div>

              {/* Second line of text with SVG behind */}
              <motion.div
                className="relative inline-block"
                // variants={heroTextVariants}
              >
                {/* SVG behind "Successful" text */}
                <div className="absolute -left-6 md:-left-6 top-1/2 transform -translate-y-1/2 z-0">
                  <svg
                    className="w-[180px] md:w-[260px] h-[33px] md:h-[56px]"
                    viewBox="0 0 260 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.63185 10.8757C10.5046 4.48474 16.3669 0.09375 23.0266 0.09375H244.224C254.232 0.09375 261.433 9.70776 258.619 19.3118L251.301 44.2854C249.428 50.6764 243.566 55.0674 236.906 55.0674H15.7087C5.70086 55.0674 -1.50024 45.4534 1.31396 35.8494L8.63185 10.8757Z"
                      fill="#9DFF50"
                    />
                  </svg>
                </div>
                <div className="text-black text-2xl md:text-[40px] font-bold font-['Manrope'] tracking-wide relative z-10">
                  Successful
                  <span className="text-white text-2xl md:text-[40px] font-bold font-['Manrope'] tracking-wide px-4">
                    Projects
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-[800px] text-center text-[#aaaaaa] text-base md:text-lg font-normal font-['Manrope'] leading-6 md:leading-8 px-4"
                // variants={heroTextVariants}
              >
                We let our work speak for itself. Explore a selection of our
                recent projects and see how we&apos;ve helped businesses achieve
                their digital goals.
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Works Grid */}
          <motion.div
            className="flex flex-col md:flex-row justify-center p-4 md:p-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Column */}
            <div className="flex flex-col space-y-5 md:space-y-5 p-2 md:p-5">
              {projects.slice(0, 3).map((project) => (
                <motion.div
                  key={project.id}
                  className="flex flex-col space-y-4"
                  variants={cardVariants}
                >
                  <motion.div
                    className="relative w-full md:w-[540px] bg-[#171717] rounded-3xl flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 rounded-3xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full md:w-[540px] p-6 bg-[#171717] rounded-xl flex flex-col justify-center gap-[15px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-white text-base pp:text-xl font-medium">
                        {project.title}
                      </div>
                      {/* <div className="flex items-center justify-center gap-4 text-center text-white text-lg font-medium font-['Inter'] leading-tight">
                        <div>Case Study</div>
                        <BsArrowUpRightCircleFill />
                      </div> */}
                    </div>
                    <div className="text-[#ccc] text-xs md:text-[14px] font-normal leading-normal">
                      {project.description}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-5 md:space-y-5 p-2 md:p-5">
              {projects.slice(3, 6).map((project) => (
                <motion.div
                  key={project.id}
                  className="flex flex-col space-y-4"
                  variants={cardVariants}
                >
                  <motion.div
                    className="relative w-full md:w-[540px] bg-[#171717] rounded-3xl flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 rounded-3xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto bg-teal-400 rounded-2xl"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full md:w-[540px] p-6 bg-[#171717] rounded-xl flex flex-col justify-center gap-[15px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-white text-base pp:text-xl font-medium">
                        {project.title}
                      </div>
                      {/* <div className="flex items-center justify-center gap-4 text-center text-white text-lg font-medium font-['Inter'] leading-tight">
                        <div>Case Study</div>
                        <BsArrowUpRightCircleFill />
                      </div> */}
                    </div>
                    <div className="text-[#ccc] text-xs md:text-[14px] font-normal leading-normal">
                      {project.description}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave Image */}
        <motion.div
          className="absolute left-0 -top-1 md:-top-3 w-full z-0"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={wave} alt="Wave Image" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default OurWork;
