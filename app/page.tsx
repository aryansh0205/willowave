import Hero from "./components/Hero";
import Header from "./components/Header";
import Cards from "./components/Cards";
// import Testimonials from "./components/Testimonials";
// import Faq from "./components/Faq";
import Call from "./components/call";
import Footer from "./components/Footer";
// import WhatWeDo from "./components/whatwedo";
import HowWeWorks from "./components/HowWeWorks";
// import OurServices from "./components/OurServices";
import CTA from "./components/cta";
// import Enroll from "./enroll/page";

export default function Home() {
  return (
    <div>
      {/* <Enroll /> */}
      <Header />
      <Hero />
      <Cards />
      {/* <WhatWeDo /> */}
      <HowWeWorks />
      {/* <OurServices /> */}
      {/* <Testimonials /> */}
      <CTA />
      {/* <Faq /> */}
      <Call />
      <Footer />
    </div>
  );
}
