"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda">
      <div className="hero">
        <div id="Beranda" className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
             Sewa Mobil dengan Mudah, Cepat, dan Terpercaya!
          </h1>
    
          <p className="hero__subtitle">
            Layanan rental mobil Sekongkang untuk kebutuhan pribadi, perjalanan bisnis, maupun operasional perusahaan Anda.
          </p>
    
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hilux2.png" alt="hero" fill className="object-contain" />
          </div>
    
          <div className="hero__image-overlay" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
