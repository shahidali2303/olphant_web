import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#", hasDropdown: true },
    { name: "SHOP", href: "#", hasDropdown: true },
    { name: "WOMEN", href: "#" },
    { name: "MEN", href: "#" },
    { name: "OUTERWEAR", href: "#" },
    { name: "BLOG", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav className="relative z-50 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left Section: Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="shrink-0">
              <span className="font-black text-2xl tracking-tighter text-gray-900">
                ORPHANT<span className="text-[10px] align-top">®</span>
              </span>
            </div>
          </div>

          {/* Center Section: Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-gray-900 hover:text-gray-500 transition-colors flex items-center gap-1 tracking-wider"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} />}
              </a>
            ))}
          </div>

          {/* Right Section: Utility Icons */}
          <div className="flex items-center gap-4 lg:gap-6 text-gray-900">
            <button className="hover:text-gray-500 transition-colors">
              <FiUser size={20} />
            </button>
            <button className="hidden sm:block hover:text-gray-500 transition-colors">
              <FiSearch size={20} />
            </button>
            <div className="relative cursor-pointer hover:text-gray-500 transition-colors">
              <FiHeart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="hidden lg:block text-sm font-bold">$0.00</span>
              <div className="relative">
                <FiShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-bold text-gray-900 border-b border-gray-50 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
