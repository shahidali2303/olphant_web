import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-black text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 text-center">
        <p className="text-xs sm:text-sm font-light tracking-wide">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY
          - OFF 50%!
        </p>
        <a
          href="#shop"
          className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:text-gray-300 transition-colors uppercase"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
