import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Logo & Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-orange-500 rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white -rotate-45" />
              </div> */}
              <span className="font-black text-2xl tracking-tighter text-gray-900">
                ORPHANT<span className="text-[10px] align-top">®</span>
              </span>
            </div>

            <div className="space-y-3 text-[14px]">
              <p className="text-gray-500">
                <span className="font-bold text-gray-900">Office:</span> 12 Fake
                Street, New York
              </p>
              <p className="text-gray-500">
                <span className="font-bold text-gray-900">Mail:</span>{" "}
                support@ophant.com
              </p>
            </div>

            <div className="flex gap-4 text-gray-900">
              <FaFacebookF
                className="cursor-pointer hover:text-orange-500 transition-colors"
                size={16}
              />
              <FaTwitter
                className="cursor-pointer hover:text-orange-500 transition-colors"
                size={16}
              />
              <FaInstagram
                className="cursor-pointer hover:text-orange-500 transition-colors"
                size={16}
              />
              <FaLinkedinIn
                className="cursor-pointer hover:text-orange-500 transition-colors"
                size={16}
              />
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
              My Account
            </h4>
            <ul className="space-y-3 text-[14px] text-gray-500 font-light">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Contact
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                My Account
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Return Policy
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
              Store
            </h4>
            <ul className="space-y-3 text-[14px] text-gray-500 font-light">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                FAQ
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Contact
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Tracking Order
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Shipping Options
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
              Newsletter
            </h4>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="relative border-b border-gray-900 pb-2 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400 font-light"
              />
              <button className="text-[11px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-500 font-light">
            Copyright © 2026 Ophant — All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 opacity-40 grayscale">
            {/* Simple text placeholders for payment logos seen in image_922f7f.png */}
            <span className="text-[10px] font-bold">VISA</span>
            <span className="text-[10px] font-bold">DISCOVER</span>
            <span className="text-[10px] font-bold italic">PayPal</span>
            <span className="text-[10px] font-bold">VINDICIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
