import React from "react";
import { ArrowRight } from "lucide-react";
import image1 from "../assets/img/3.png";

const SplitHero = () => {
  return (
    <section className="  py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-6">
        {/* Left Banner (70% Width) */}
        <div className="md:col-span-7 relative h-[370px] bg-[#e9e7e4] overflow-hidden flex items-center group">
          {/* Text Content */}
          <div className="relative z-10 pl-8 md:pl-16 pr-4 space-y-4 max-w-md">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">
              SUMMER COLLECTION
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2]">
              Show your best sweatshirt <br /> of your life
            </h1>
            <p className="text-sm text-gray-500 font-light italic">
              Don't miss the opportunity.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-transparent hover:border-black transition-all pt-4"
            >
              Shop Collection <ArrowRight size={18} />
            </a>
          </div>

          {/* Model Image - Positioned right and overflowing vertically */}
          <div className="absolute right-0 bottom-[-20px] h-[110%] w-1/2 hidden md:block">
            <img
              src={image1}
              alt="Male Fashion Model"
              className="h-full w-full object-contain object-right-bottom transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Mobile Fallback Image */}
          <img
            src={image1}
            className="md:hidden absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-30"
          />
        </div>

        {/* Right Banner (30% Width) */}
        <div className="md:col-span-3 relative h-[370px] group overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <img
            src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
            alt="Dark textured knitwear"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Centered Text Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-white">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
              NEW SEASON SALE
            </span>
            <h2 className="text-3xl font-bold leading-tight">Up to 70% Off</h2>
            <p className="text-sm font-light opacity-80 italic">
              Don't miss the opportunity.
            </p>
            <a
              href="#sale"
              className="inline-flex items-center gap-2 text-sm font-bold hover:underline underline-offset-8 pt-2"
            >
              Shop Collection <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
