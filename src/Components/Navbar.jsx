import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-300">
      <div className="h-16 w-full px-6 flex items-center justify-between text-black">
        {/* Logo */}
        <div className="font-bold text-gray-700 text-xl">AdRoll</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-gray-600 font-light">
          <li><a href="#">Why AdRoll?</a></li>
          <li><a href="#">Marketing Platform</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Pricing & Packages</a></li>
          <li><a href="#">Resources</a></li>
        </ul>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-gray-600 font-semibold">Log in</a>
          <a
            href="/signup"
            className="px-6 py-2 rounded-xl bg-purple-800 text-white font-semibold"
          >
            GET STARTED
          </a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-600 font-light mt-4">
            <li><a href="#">Why AdRoll?</a></li>
            <li><a href="#">Marketing Platform</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Pricing & Packages</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="text-gray-600 font-semibold">Log in</a>
            <a
              href="/signup"
              className="px-6 py-2 w-fit rounded-xl bg-purple-800 text-white font-semibold"
            >
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
