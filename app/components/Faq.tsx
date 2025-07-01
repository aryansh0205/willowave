"use client";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const faqs = [
  {
    question: "What services does Willow Wave offer?",
    answer:
      "We offer a comprehensive suite of digital marketing services, including web design and development, web redesign, app development, video editing, business startup consultancy, Swiggy/Zomato registration, social media management, social media content creation, and website hosting.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "The cost of digital marketing varies depending on your specific needs and goals. We offer customized packages to fit different budgets. Contact us for a free consultation and personalized quote.",
  },
  {
    question: "How is Willow Wave different from other digital marketing agencies?",
    answer:
      "We combine data-driven strategies with creative solutions to deliver measurable results. We focus on building long-term partnerships with our clients and are passionate about helping Indian businesses thrive online. Our local expertise gives us a deep understanding of the Indian market.",
  },
  {
    question: "Why should I redesign my website?",
    answer:
      "A website redesign can improve your brand image, enhance user experience, boost search engine rankings, and increase conversion rates. If your website looks outdated or isn't performing well, a redesign is a smart investment.",
  },
  {
    question: "What is included in website hosting?",
    answer:
      "Our website hosting includes reliable and secure servers, website maintenance, and technical support to ensure your website is always online and performing optimally.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-10 md:py-10 flex flex-col items-center justify-center bg-[#fafafa] select-none">
      {/* FAQ Header */}
      <div className="space-y-6 text-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-[70px] h-[30px] p-2.5 bg-gradient-to-b from-[#181818] via-[#333333] to-[#181818] rounded-[18px] flex justify-center items-center">
            <div className="text-white text-sm font-normal font-['Inter']">
              FAQs
            </div>
          </div>
        </div>
        <h2 className="text-gray-800 text-xl md:text-4xl font-extrabold font-['manrope']">
          Frequently Asked Questions
        </h2>
        <h2 className="text-[#101010] text- font-normal font-['manrope'] leading-relaxed">
          Some answers to some frequently asked questions.
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-[90%] md:max-w-[50%] mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border px-4 rounded-2xl shadow-sm border-[#E5E7EB] bg-white"
          >
            <button
              className="w-full flex justify-between items-center py-4 text-sm md:text-lg font-semibold font-['manrope'] text-[#333] text-left"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <IoIosAdd
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                aria-label="Toggle FAQ answer"
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100" // Increased max-height for longer answers
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[#222] text-sm md:text-base pb-4 font-['manrope']">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;