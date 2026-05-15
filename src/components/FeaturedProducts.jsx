import React from "react";
import { Star, ArrowRight } from "lucide-react";
import image1 from "../assets/img/10.jpeg";
import image2 from "../assets/img/11.jpeg";
import image3 from "../assets/img/12.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sleeveless Ribbed Short Dress",
      price: 14.99,
      oldPrice: 19.99,
      discount: "26%",
      rating: 1,
      available: 24,
      sold: 65,
      image: image1,
    },
    {
      id: 2,
      name: "Basic Relax Fit Leggings",
      price: 24.9,
      oldPrice: 29.9,
      discount: "17%",
      rating: 1,
      available: 34,
      sold: 150,
      image: image2,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        <p className="text-gray-400 text-sm max-w-xl font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra vel facilisis.
        </p>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Product Cards (Span 2 columns on desktop) */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative aspect-[3/4] bg-[#f3f3f3] overflow-hidden mb-4">
                <span className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] font-bold text-green-500">
                  {product.discount}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-300 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={10} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] text-gray-500 font-medium">
                    {product.rating} review
                  </span>
                </div>

                {/* Progress Bar from image_87ab90.jpg */}
                <div className="pt-2">
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500"
                      style={{
                        width: `${(product.sold / (product.available + product.sold)) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] uppercase tracking-tighter">
                    <span className="text-gray-400">
                      Available:{" "}
                      <span className="text-gray-900 font-bold">
                        {product.available}
                      </span>
                    </span>
                    <span className="text-gray-400">
                      Sold:{" "}
                      <span className="text-red-500 font-bold">
                        {product.sold}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Promo Block (Span 2 columns) */}
        <div className="md:col-span-2 relative aspect-square md:aspect-auto bg-[#e9ecef] overflow-hidden group">
          <img
            src={image3}
            className="absolute inset-0 w-full h-full object-cover object-right grayscale-[20%]"
            alt="Winter Collection"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">
              Winter 2022 Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight max-w-xs">
              Aenean id sapien sit amet urna laoreet
            </h2>
            <p className="text-sm text-gray-500 max-w-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1 w-fit group"
            >
              Shop Collection{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Discount Ticker */}
      <div className="bg-[#fff5f2] p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
        <h3 className="text-red-500 font-bold text-lg md:text-xl">
          10% discount on your dream clothes:
        </h3>

        <div className="flex items-center gap-2">
          {[30, 3, 32, 29].map((num, i) => (
            <React.Fragment key={i}>
              <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center font-bold rounded-sm">
                {String(num).padStart(2, "0")}
              </div>
              {i < 3 && <span className="text-red-500 font-bold">:</span>}
            </React.Fragment>
          ))}
        </div>

        <p className="text-[11px] text-gray-400 max-w-xs md:text-left leading-tight">
          Vivamus finibus, est condimentum feugiat aliquet, felis sem euismod
          risus
        </p>
      </div>
    </section>
  );
};

export default FeaturedProducts;
