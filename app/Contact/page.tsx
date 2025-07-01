"use client";
import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import contact1 from "../Assets/contact1.png";
import contact2 from "../Assets/contact2.png";
import Image from "next/image";
import Header from "../components/Header";
const API = "https://your-api.com"; // Update API endpoint

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [querySent, setQuerySent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQuerySent(localStorage.getItem("QOC") === "true");
    }
  }, []);

  const sendMessage = async () => {
    if (!name.trim() || !msg.trim()) {
      toast.error("Name and message are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API}/contactus`, {
        name,
        phone,
        email,
        message: msg,
        kind: "Query",
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message || "Message sent successfully!");
        setQuerySent(true);
        localStorage.setItem("QOC", "true");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#FBFBFB] h-screen">
      {/* Header Section */}
      <Header />
      {/* <div className="flex flex-col gap-6 items-center justify-center">
        <div className="text-3xl sm:text-2xl md:text-4xl font-bold mt-10">
          Contact us
        </div>
        {querySent ? null : (
          <p className="text-lg text-gray-600 text-center">
            Any question or remarks? Just write us a message!
          </p>
        )}
      </div> */}
      <div className="pp:w-[90%] h-full w-full mx-auto flex flex-col lg:flex-row bg-white pp:p-10 ">
        <Toaster />
        {/* Left Side: Contact Information */}
        <div
          className="w-[50%] bg-black p-6 justify-center  gap-10 pp:rounded-2xl shadow-md text-white flex flex-col relative"
          style={{
            backgroundImage: `url(${contact1.src})`,
            backgroundSize: "contain",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold text-white ">Contact Us</h2>
            <p className="text-white">
              Any questions or remarks? Just write us a message!
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {/* WhatsApp Chat */}
            <a
              href="https://wa.me/919250591119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#fff] hover:underline"
            >
              <Phone className="text-[#fff]" />
              <span>+91 7310217959</span>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:willowaveofficial@gmail.com"
              className="flex items-center gap-2 text-[#fff] hover:underline"
            >
              <Mail className="text-[#fff]" />
              <span>willowaveofficial@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full flex items-center justify-center rounded p-6">
          {querySent ? (
            <div className="text-center text-lg font-semibold text-green-600">
              ✅ Your query has been sent. Our team will contact you soon.
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name, Email, Phone */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div className="w-full sm:w-1/3">
                  <label className="font-medium">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="border-b border-[#CACACA] outline-none bg-transparent w-full py-2"
                  />
                </div>
                <div className="w-full sm:w-1/3">
                  <label className="font-medium">Email (optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="border-b border-[#CACACA] outline-none bg-transparent w-full py-2"
                  />
                </div>
                <div className="w-full sm:w-1/3">
                  <label className="font-medium">Phone (optional)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="border-b border-[#CACACA] outline-none bg-transparent w-full py-2"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  placeholder="Type your message here..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="border-b border-[#CACACA] outline-none bg-transparent w-full py-2 h-[100px]"
                />
              </div>

              {/* Send Button */}
              <div className="w-full flex flex-col pp:items-end">
                {/* Send Button */}
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className={`rounded-3xl text-white bg-[#127DF7] px-6 py-3 text-lg font-semibold transition-all  
      ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#0e6ac9]"}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Contact Image Below the Button */}
                <div className="-mt-2 mr-10 w-64">
                  <Image
                    src={contact2}
                    alt="Contact Image"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
