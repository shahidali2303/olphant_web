import React from "react";

const CategoryGrid = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* 1. Women Collection */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#f5f5f5] min-h-[350px] md:min-h-full">
            <img
              src="https://demoapus-wp.com/uomo/wp-content/uploads/2020/12/banner1.jpg"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center group-hover:scale-105 transition-transform duration-700"
              alt="Women Collection"
            />
            {/* max-w-[60%] ensures text stays on the left and doesn't overlap the model on mobile */}
            <div className="absolute inset-0 flex flex-col justify-center md:justify-end p-8 md:p-12 z-10">
              <div className="max-w-[60%] md:max-w-full">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-900 mb-2 block">
                  Hot List
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  WOMEN <br className="md:hidden" /> COLLECTION
                </h2>
                <a
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-black w-fit pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          {/* 2. Men Collection */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-[#E5E4E2] min-h-[250px] md:min-h-full">
            <img
              src="https://demoapus-wp.com/uomo/wp-content/uploads/2021/01/banner2.png"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
              alt="Men Collection"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 z-10">
              <div className="max-w-[55%] md:max-w-full">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-900 mb-2 block">
                  Hot List
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  MEN COLLECTION
                </h2>
                <a
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-black w-fit pb-1 transition-all"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          {/* 3. Kids Collection */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#f0f0f0] min-h-[250px] md:min-h-full">
            <img
              src="https://demoapus-wp.com/uomo/wp-content/uploads/2021/01/banner3.png"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
              alt="Kids Collection"
            />
            <div className="absolute inset-0 flex flex-col justify-center md:justify-end p-8 z-10">
              <div className="max-w-[60%] md:max-w-full">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-900 mb-2 block">
                  Hot List
                </span>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  KIDS COLLECTION
                </h2>
                <a
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-black w-fit pb-1 transition-all"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          {/* 4. E-Gift Cards */}
          <div className="md:col-span-1 md:row-span-1 bg-[#F9EBE6] flex flex-col justify-center p-8 min-h-[200px] md:min-h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              E-GIFT CARDS
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-light">
              Surprise someone with the gift they really want.
            </p>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-black w-fit pb-1 transition-all"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
