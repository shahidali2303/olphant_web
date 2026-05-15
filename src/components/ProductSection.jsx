import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("Men");

  const categories = ["Men", "Women", "Blouses & shirts", "Outerwear"];

  const products = [
    {
      id: 1,
      name: "Check Overshirt With Pocket Detail",
      price: 112.0,
      oldPrice: 129.0,
      discount: "14%",
      rating: 1,
      image:
        "https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg",
    },
    {
      id: 2,
      name: "World Wide Cup Print T-Shirt",
      price: 23.99,
      oldPrice: 29.99,
      discount: "21%",
      rating: 1,
      image:
        "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg",
    },
    {
      id: 3,
      name: "Slogan Hoodie With Label Detail",
      price: 11.99,
      oldPrice: 18.99,
      discount: "37%",
      rating: 1,
      image:
        "https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg",
    },
    {
      id: 4,
      name: "Pouch Pocket Hoodie Orange",
      price: 29.5,
      oldPrice: 37.5,
      discount: "22%",
      rating: 1,
      image:
        "https://images.pexels.com/photos/6311545/pexels-photo-6311545.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden relative">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Top Seller Brands
        </h2>

        <nav className="flex flex-wrap gap-4 md:gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                activeTab === cat
                  ? "text-gray-900 border-b-2 border-black"
                  : "text-gray-300 hover:text-gray-500"
              } pb-1`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Slider Controls (Desktop Only) */}
      <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
        <ChevronLeft size={20} className="text-gray-400" />
      </button>
      <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
        <ChevronRight size={20} className="text-gray-400" />
      </button>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-3/4 bg-gray-100 overflow-hidden mb-4">
              <span className="absolute top-4 left-4 z-10 bg-white px-2 py-1 text-[10px] font-bold text-green-500 rounded-sm">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span className="text-[11px] text-gray-500 font-medium">
                  {product.rating} review
                </span>
              </div>

              <h3 className="text-[14px] font-medium text-gray-900 line-clamp-1 group-hover:text-gray-600 transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-300 line-through font-light">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        <span className="w-2 h-2 rounded-full bg-black" />
        <span className="w-2 h-2 rounded-full bg-gray-200" />
      </div>
    </section>
  );
};

export default ProductSection;
