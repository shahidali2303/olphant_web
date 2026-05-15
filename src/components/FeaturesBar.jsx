import React from "react";
import { Truck, RotateCcw, Headphones, CreditCard } from "lucide-react";

const FeaturesBar = () => {
  const features = [
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Free Shipping",
      description: "Free Shipping for orders over £130.",
    },
    {
      icon: <RotateCcw size={32} strokeWidth={1.5} />,
      title: "Money Guarantee",
      description: "Within 30 days for an exchange.",
    },
    {
      icon: <Headphones size={32} strokeWidth={1.5} />,
      title: "Online Support",
      description: "Within 30 days for an exchange.",
    },
    {
      icon: <CreditCard size={32} strokeWidth={1.5} />,
      title: "Flexible Payment",
      description: "Pay with Multiple Credit Cards.",
    },
  ];

  return (
    <section className="py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 group"
            >
              {/* Icon Container */}
              <div className="text-gray-900 shrink-0">{item.icon}</div>

              {/* Text Container */}
              <div className="space-y-1">
                <h3 className="text-[15px] font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-400 font-light leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
