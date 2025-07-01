"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import t1 from "../Assets/t1.jpeg";
import t2 from "../Assets/t2.jpeg";
import t3 from "../Assets/t3.jpeg";
import t4 from "../Assets/t4.jpeg";
import t5 from "../Assets/t5.jpeg";
import t6 from "../Assets/t6.jpeg";
import t7 from "../Assets/t7.jpeg";
import t8 from "../Assets/t8.jpeg";
import t9 from "../Assets/t9.jpeg";

const testimonialsData = [
  {
    id: 1,
    image: t1,
    name: "Rahul Sharma",
    // role: "Founder, TechNova Solutions",
    content:
      "Willow Wave ne hamare social media presence ko ek naya mukam diya. Unki strategies aur creativity ne hame top pe pahuncha diya. Highly recommended!",
  },
  {
    id: 2,
    image: t2,
    name: "Priya Kapoor",
    // role: "CEO, FashionFiesta",
    content:
      "The team at Willow Wave is phenomenal! They transformed our digital marketing strategy, and our sales have doubled in just 3 months. Thank you!",
  },
  {
    id: 3,
    image: t3,
    name: "Ankit Patel",
    // role: "Marketing Head, GreenGrocer",
    content:
      "Willow Wave ke saath kaam karke hume bahut accha laga. Unki SEO aur PPC campaigns ne humare website traffic ko 3x kar diya. Great work!",
  },
  {
    id: 4,
    image: t4,
    name: "Sneha Gupta",
    // role: "Owner, HomeDecor Hub",
    content:
      "Willow Wave helped us create a stunning brand identity. Their social media campaigns are creative and engaging. We’re thrilled with the results!",
  },
  {
    id: 5,
    image: t5,
    name: "Vikram Singh",
    // role: "Director, AutoWorks",
    content:
      "Willow Wave ne humare digital marketing strategy ko ek naya dimension diya. Ab humare leads aur sales dono badh gaye hain. Excellent team!",
  },
  {
    id: 6,
    image: t6,
    name: "Neha Mehta",
    // role: "Co-Founder, EduLearn",
    content:
      "The team at Willow Wave is highly professional and creative. They helped us scale our online presence and achieve our marketing goals.",
  },
  {
    id: 7,
    image: t7,
    name: "Arjun Reddy",
    // role: "CEO, FitLife Gym",
    content:
      "Willow Wave ke campaigns ne humare gym ki membership bookings ko double kar diya. Unki strategies aur execution bahut effective hain!",
  },
  {
    id: 8,
    image: t8,
    name: "Kavita Joshi",
    // role: "Founder, PetCare Plus",
    content:
      "Willow Wave helped us create a strong online presence. Their content and ad strategies are top-notch. We’re extremely happy with their services!",
  },
  {
    id: 9,
    image: t9,
    name: "Rohit Malhotra",
    // role: "Marketing Manager, FoodieDelight",
    content:
      "Willow Wave ne humare restaurant ka online ordering system aur social media presence ko ek naya level diya. Bahut khush hain unke kaam se!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const getTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonialsData.length;
      testimonials.push(testimonialsData[index]);
    }
    return testimonials;
  };

  return (
    <div className="relative top-10 bg-[#fafafa] py-10 md:py-10">
      <div className="w-full flex justify-center items-center relative">
        <div className="relative text-center z-10 space-y-5 md:space-y-8 px-4 ">
          <div className="w-full flex items-center justify-center">
            <div className="h-[30px] p-2.5 bg-gradient-to-b from-[#181818] via-[#333333] to-[#181818] rounded-[18px] flex justify-center items-center">
              <div className="text-white text-sm font-normal font-['Inter']">
                Testimonials
              </div>
            </div>
          </div>
          <div className="relative inline-block">
            <div className="absolute -left-5 md:-left-3 top-[2px]  md:-top-1 z-0 ">
              <svg
                className="w-[180px] md:w-[278px] h-[32px] md:h-[54px] "
                viewBox="0 0 278 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25117 6.87188C7.96484 3.09289 11.2664 0.356445 15.1122 0.356445H269.387C274.4 0.356445 278.178 4.91474 277.248 9.84101L270.827 43.841C270.113 47.62 266.812 50.3564 262.966 50.3564H8.69128C3.67793 50.3564 -0.100098 45.7982 0.830234 40.8719L7.25117 6.87188Z"
                  fill="#9DFF50"
                />
              </svg>
            </div>
            <div>
              <div className="text-black text-2xl md:text-[40px] font-bold font-['Manrope'] tracking-wide relative z-10 ">
                Testimonials
                <span className="text-black text-2xl md:text-[40px] font-bold font-['Manrope'] tracking-wide px-4 ">
                  that Speak
                </span>
              </div>
            </div>
            <div className="text-black text-2xl md:text-[40px] font-semibold font-['Manrope'] tracking-wide">
              to Our Results
            </div>
          </div>
          <div className="w-full md:w-[800px] text-center text-[#555555] text-base md:text-lg font-normal font-['Manrope'] leading-6 md:leading-8">
            Read through our testimonials to see why our clients love working
            with us and how we can help you achieve your business goals through
            creative and effective digital marketing.
          </div>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-10 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          &larr;
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden items-center justify-center gap-4 md:gap-10 py-10"
          style={{ height: "auto" }} // Adjust height dynamically
        >
          {getTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === 1
                  ? "min-w-[280px] md:min-w-[640px] scale-105"
                  : "min-w-[280px] md:min-w-[640px]"
              } p-6 md:p-8 ${
                index === 1 ? "bg-[#fafafa]" : "bg-[#f1f1f1]"
              } rounded-[32px] border-8 border-white flex-col gap-5 inline-flex transition-all duration-500 ease-in-out`}
            >
              <div className="justify-between inline-flex">
                <div className="items-center gap-2 flex">
                  <Image
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt="userprofile"
                  />
                  <div className="flex-col inline-flex">
                    <div className="text-[#0c0c0c] text-xs md:text-md font-bold ">
                      {testimonial.name}
                    </div>
                    <div className="text-[#2e2e2e] text-xs md:text-md font-normal">
                      {/* {testimonial.role} */}
                    </div>
                  </div>
                </div>
                <div>
                  <Image src="/testi.svg" alt="Svg" width={20} height={20} />
                </div>
              </div>
              <div className="text-[#0c0c0c] text-sm md:text-md italic font-normal font-['Archivo'] leading-relaxed">
                {testimonial.content}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-10 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
