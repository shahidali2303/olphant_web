import React from "react";
import { ArrowRight } from "lucide-react";

const NewCollections = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Main Image & Testimonial */}
        <div className="space-y-8">
          <div className="aspect-4/5 w-full overflow-hidden bg-gray-100">
            <img
              src="https://images.pexels.com/photos/8945179/pexels-photo-8945179.jpeg"
              alt="New Collection Studio Shot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 max-w-md">
            <p className="text-[14px] text-gray-400 font-light leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
            </p>
            <p className="text-[14px] font-bold text-gray-900 tracking-tight">
              Petra van der Meer
            </p>
          </div>
        </div>

        {/* Right Column: Heading, CTA, & Secondary Image */}
        <div className="flex flex-col">
          <div className="space-y-6 mb-12 md:mt-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">
              New Collections
            </span>
            <h2 className="text-4xl md:text-[48px] font-light text-gray-900 leading-[1.1] tracking-tight">
              Best Sweatshirts and <br />
              tracksuits for everyone!
            </h2>
            <p className="text-[14px] text-gray-400 font-light leading-relaxed max-w-md">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-4 text-[13px] font-medium border border-gray-200 px-8 py-3.5 hover:bg-black hover:text-white transition-all duration-300 w-fit group"
            >
              Shop Now{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="aspect-square w-full overflow-hidden bg-gray-100">
            <img
              src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg"
              alt="Tracksuit collection detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
