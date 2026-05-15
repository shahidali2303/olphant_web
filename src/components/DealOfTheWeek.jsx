import React, { useState, useEffect } from "react";

const DealOfTheWeek = () => {
  // Simple countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 26,
    hours: 9,
    minutes: 45,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Product/Model Image */}
        <div className="relative aspect-4/5 md:aspect-square overflow-hidden bg-gray-50">
          <img
            src="https://images.pexels.com/photos/5325554/pexels-photo-5325554.jpeg"
            alt="Roland Grand White checkered T-shirt"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right: Content & Timer */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">
            Deal of the Week
          </span>

          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight max-w-md">
            Roland Grand White short checkered T-shirt
          </h2>

          <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          {/* Countdown Display */}
          <div className="flex items-center gap-4 md:gap-6 py-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-normal text-gray-900">
                {timeLeft.days}d
              </span>
            </div>
            <span className="text-gray-300 text-2xl font-light">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-normal text-gray-900">
                {String(timeLeft.hours).padStart(2, "0")}h
              </span>
            </div>
            <span className="text-gray-300 text-2xl font-light">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-normal text-gray-900">
                {String(timeLeft.minutes).padStart(2, "0")}m
              </span>
            </div>
            <span className="text-gray-300 text-2xl font-light">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-normal text-gray-900">
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>
          </div>

          <button className="bg-black text-white px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Shop Now
          </button>

          <p className="pt-4 text-[10px] text-gray-500 tracking-wide uppercase">
            Limited time offer. The deal will expire on{" "}
            <span className="bg-yellow-100 px-1 py-0.5 text-gray-900 font-semibold">
              June 10, 2026
            </span>{" "}
            HURRY UP!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheWeek;
