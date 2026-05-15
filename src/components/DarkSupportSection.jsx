import React from "react";

const DarkSupportSection = () => {
  return (
    <section className="w-full bg-[#000000] py-16 md:py-0 md:h-[320px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 items-center">
        {/* LEFT COLUMN: Newsletter */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-white text-2xl md:text-[28px] font-bold leading-tight max-w-md">
              Get our emails for info on new items, sales and more.
            </h2>
            <p className="text-gray-400 text-sm font-light">
              We’ll email you a voucher worth £10 off your first order over £50.
            </p>
          </div>

          <div className="space-y-3">
            <form className="flex h-12 w-full max-w-md border border-white/20">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
              <button className="bg-black text-white px-8 text-sm font-bold border-l border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-wider">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-gray-500 leading-relaxed max-w-sm">
              By subscribing you agree to our{" "}
              <span className="underline cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer">
                Privacy & Cookies Policy
              </span>
              .
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Support & Apps */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-white text-xl font-normal">Need help?</h3>
            <p className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              (+800) 1234 5678 90
            </p>
            <p className="text-gray-400 text-sm font-light">
              We are available 8:00am – 7:00pm
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {/* App Store Badge */}
              <button className=" rounded-md px-3 py-1 flex items-center gap-2 hover:bg-gray-900 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-8"
                />
              </button>
              {/* Google Play Badge */}
              <button className=" rounded-md px-3 py-1 flex items-center gap-2 hover:bg-gray-900 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8"
                />
              </button>
            </div>
            <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
              <span className="font-bold text-gray-400">Shopping App:</span> Try
              our View in Your Room feature, manage registries and save payment
              info.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSupportSection;
