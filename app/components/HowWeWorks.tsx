"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import meet from "../new/meet.png";
import ttb from "../new/ttb.png";
import work from "../new/work.png";
import ex from "../new/ex.png";
import final from "../new/final.png";

const steps = [
  {
    id: 1,
    title: "Meeting & Requirements",
    shortDesc: "Understand your business goals and requirements",
    longDesc:
      "We start with an in-depth discovery session to understand your business goals, target audience, and project requirements.",
    image: meet,
  },
  {
    id: 2,
    title: "Assigning Executors",
    shortDesc: "Assemble the perfect team of specialists",
    longDesc:
      "Based on your project needs, we select experts with the right skills for your project.",
    image: ex,
  },
  {
    id: 3,
    title: "Creating Workflow",
    shortDesc: "Develop a customized workflow with milestones",
    longDesc:
      "We create a clear workflow with deliverables using agile methodology for flexibility.",
    image: work,
  },
  {
    id: 4,
    title: "Team, Time & Budget",
    shortDesc: "Establish timelines and allocate resources",
    longDesc:
      "We set realistic timelines and budgets with transparent communication throughout.",

    image: ttb,
  },
  {
    id: 5,
    title: "Final Contract",
    shortDesc: "Formalize agreement with comprehensive contract",
    longDesc:
      "We finalize deliverables, timelines, and terms in a clear contract for both parties.",
    image: final,
  },
];

const HowWeWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayDelay = 5000;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, autoPlayDelay);
    }
    return () => clearInterval(interval);
  }, [autoPlay, steps.length]);

  const handleStepClick = (index: number) => {
    setAutoPlay(false);
    setActiveStep(index);
    setTimeout(() => setAutoPlay(true), autoPlayDelay * 3);
  };

  return (
    <div className="w-full py-12 md:py-20 bg-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 mb-8 md:mb-12">
        <div className="border border-[#232323] px-6 py-2 rounded-full text-sm md:text-base">
          How It Works
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 max-w-7xl mx-auto">
          <h2 className="text-start text-2xl md:text-4xl lg:text-5xl font-medium font-['Manrope'] leading-tight md:leading-[1.2] text-zinc-950 max-w-2xl">
            An end-to-end solution for Digital Agencies
          </h2>
          <p className="text-center md:text-left text-[#71717A] text-base md:text-lg max-w-md">
            Our structured process ensures quality and transparency at every
            step.
          </p>
        </div>
      </div>

      {/* Mobile View - Vertical Steps with Images */}
      <div className="block md:hidden w-full px-4">
        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[activeStep].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Indicators at bottom outside image */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStep === index ? "bg-black w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Steps List */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`p-4 rounded-xl ${
                activeStep === index ? "bg-gray-50 border border-gray-200" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`text-lg font-bold ${
                    activeStep === index ? "text-black" : "text-gray-400"
                  }`}
                >
                  0{step.id}
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      activeStep === index ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#71717A] text-sm mt-1">
                    {step.shortDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Horizontal Layout */}
      <div className="hidden md:flex w-full h-[500px]">
        {/* Steps Navigation */}
        <div className="w-[50%] h-full flex items-center justify-center p-8">
          <div className="space-y-4 w-full max-w-md">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`p-6 rounded-2xl flex gap-6 cursor-pointer ${
                  activeStep === index
                    ? "bg-white border border-gray-200 "
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`text-xl font-bold ${
                    activeStep === index ? "text-black" : "text-gray-400"
                  }`}
                >
                  0{step.id}
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      activeStep === index ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {activeStep === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-[#71717A] text-sm mt-2"
                    >
                      {step.longDesc}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="w-[50%] h-full  relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[activeStep].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="object-contain h-[350px] w-full"
              />
            </motion.div>
          </AnimatePresence>

          {/* Indicators outside image */}
          <div className="absolute  bottom-0  left-0 right-0 flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStep === index ? "bg-black w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorks;
