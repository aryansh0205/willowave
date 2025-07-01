import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import wave from "../Assets/wave.png";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white py-12  px-4 md:px-12  relative select-none">
      {/* Top Section with Logo and Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6  md:pt-4 ">
        <div className="flex items-center w-full justify-between space-x-4">
          <div className="w-10 md:w-16">
            <Image
              src="/favicon.svg"
              alt="Willow Wave Logo"
              className="w-full h-auto"
              width={96}
              height={48}
            />
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.instagram.com/willow_wave_/" className="hover:text-amber-500 transition-all">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/100219563/admin/dashboard/" className="hover:text-amber-500 transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section with Links */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 text-gray-400 text-xs md:text-base">
        <p className="text-center md:text-left">&copy; 2024 Willow Wave. All Rights Reserved.</p>
        {/* <p className="text-center md:text-left ">Version 1.0</p> */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-all">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-all">Cookie Policy</a>
        </div>
      </div>
      <div className="absolute left-0 -top-1 md:-top-4 w-full ">
          <Image src={wave} alt="Wave Image" className=" md:w-full"/>
        </div>
    </div>
  );
};

export default Footer;
