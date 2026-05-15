import React from "react";
import heroImage from "../assets/img/1.webp";

function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center">
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Valentin Paul Background"
          className="w-full h-full object-cover object-center md:object-[center_25%]"
        />
        {/* Optional: Add a very light overlay if your text needs more contrast */}
        <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <span className="text-[10px] md:text-xs font-medium text-gray-800 tracking-[0.3em] uppercase">
            WINTER 2026 COLLECTION
          </span>

          <h1 className="text-4xl md:text-7xl font-light text-gray-900 leading-tight tracking-tight">
            Valentin Paul
            <br />
            Essential Collection
          </h1>

          <p className="text-sm md:text-base text-gray-700 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="pt-4">
            <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* 3. Slider Indicators (Visual only, to match the screenshot) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-black/20" />
        <span className="w-2 h-2 rounded-full bg-black" />
        <span className="w-2 h-2 rounded-full bg-black/20" />
      </div>
    </section>
  );
}

export default HeroSection;
