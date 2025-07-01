"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import framer-motion

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true); // Background appears after 500px scroll (adjust based on hero height)
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-20 flex items-center justify-between px-4 md:px-10 z-50 transition-all duration-300 select-none ${
        scrolled ? " backdrop-blur bg-black/60" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="w-8 md:w-12">
        <Image
          src="/favicon.svg"
          alt="Willow Wave Logo"
          className="w-full h-auto"
          width={96}
          height={48}
        />
      </div>

      {/* Navigation Links (Desktop) */}
      {/* <nav
        className={`hidden md:flex gap-8 space-x-3 items-center justify-center pl-24 transition-colors ${
          scrolled ? "text-white" : "text-white"
        }`}
      >
        <a
          href="#about"
          className="text-lg hover:text-[#9cff4f] transition-colors"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-lg hover:text-[#9cff4f] transition-colors"
        >
          Services
        </a>
        <a
          href="#mirrorai"
          className="text-lg hover:text-[#9cff4f] transition-colors"
        >
          What We Do
        </a>
        <a
          href="#mirrorai"
          className="text-lg hover:text-[#9cff4f] transition-colors"
        >
          How It Works
        </a>
      </nav> */}

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#222222] bg-opacity-60 backdrop-blur ">
          <nav className="flex flex-col gap-4 p-4 text-white">
            <a
              href="#about"
              className="text-lg hover:text-[#9cff4f] transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-lg hover:text-[#9cff4f] transition-colors"
            >
              Services
            </a>
            <a
              href="#mirrorai"
              className="text-lg hover:text-[#9cff4f] transition-colors"
            >
              Mirror AI
            </a>
          </nav>
        </div>
      )} */}

      {/* Contact Button (Desktop) */}
      <Link href="/Contact" className=" hidden md:block">
        {" "}
        {/* Use Link for navigation */}
        <motion.div
          className="hidden md:flex h-[50px] p-6 bg-[#9cff4f] rounded-[32px] items-center justify-center"
          whileHover={{ scale: 1.05 }} // Slightly scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down when clicked
          transition={{ duration: 0.3 }} // Smooth transition
        >
          <button className="text-black text-lg font-medium font-['Manrope']">
            Get connected
          </button>
        </motion.div>
      </Link>
    </div>
  );
}
