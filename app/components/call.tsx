"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="w-full md:h-[450px] h-[350px] relative bg-[#fafafa] overflow-hidden select-none">
      {/* Background SVG 1 */}
      <div className="absolute -left-0 top-64 md:top-64 lg:top-32 ">
        <Image
          src="/background-shape-1.svg"
          alt="Background Shape 1"
          width={346}
          height={335}
          className="w-[150px] h-auto md:w-[200px] lg:w-[346px]"
        />
      </div>

      {/* Background SVG 2 */}
      <div className="absolute -right-8 top-8 md:top-16 lg:-top-8">
        <Image
          src="/background-shape-2.svg"
          alt="Background Shape 2"
          width={482}
          height={334}
          className="w-[200px] h-auto md:w-[300px] lg:w-[482px]"
        />
      </div>

      {/* Main Content */}
      <div className="absolute top-[80px] md:top-[110px] left-1/2 transform -translate-x-1/2 flex flex-col justify-start items-center gap-8 md:gap-6 text-center">
        {/* Contact Us Button */}
        <div className="w-[100px] h-[35px] p-2.5 bg-gradient-to-b from-[#181818] via-[#333333] to-[#181818] rounded-[18px] flex justify-center items-center">
          <div className="text-white text-sm font-normal font-['Inter']">
            Contact Us
          </div>
        </div>

        {/* Heading */}
        <div className="w-[350px] pp:w-[400px] lg:w-[900px] text-[#222222] text-2xl md:text-3xl lg:text-[38px] font-bold font-['Manrope'] leading-[1.2] md:leading-[68px] px-4">
          Get in Touch and Take the First Step Towards achieveing the scale like
          no other
        </div>

        {/* Contact Us Button with Icon */}
        <Link href="/Contact">
          <div className="px-4 py-3  bg-[#9cff4f] rounded-[20px] flex justify-center items-center gap-2.5">
            <div className="text-center text-black text-xs md:text-base font-bold font-['Manrope']">
              Contact Us
            </div>
            <div className="relative">
              <Image
                src="/arrow-icon.svg"
                alt="Arrow Icon"
                width={20}
                height={20}
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
