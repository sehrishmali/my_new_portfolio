
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS ko import karte hain

const Hero = () => {
  // AOS ko initialize karna
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Animation ki duration set kar rahe hain
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/IMG_20231203_192344_855.jpg)] bg-cover"
      style={{
        backgroundSize: "25%",  // Image ka size adjust kar rahe hain
        backgroundPosition: "left 200px top 200px",  // Image ka position set kar rahe hain
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>  {/* Yeh column sirf large screens pe dikhega */}
        <div className="text-[70px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p data-aos="zoom-in-up">Sehrish</p>
            <p data-aos="zoom-in-up">Muhammad Ali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
