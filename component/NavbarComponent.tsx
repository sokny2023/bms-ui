import React from 'react';
import { LoginButton } from './ButtonComponen';


export default function Navbar() {
  return (
    <div className="w-full fixed top-0 z-50 bg-white/30 backdrop-blur-md bg-gray-50 ">
      <section className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Logo</h1>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Right Section (Button / Hamburger for Mobile) */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-block text-white rounded-lg hover:bg-blue-600 transition">
            <LoginButton />
          </button>

          {/* Hamburger Menu */}
          <div className="md:hidden cursor-pointer">
            <div className="w-6 h-1 bg-gray-700 mb-1"></div>
            <div className="w-6 h-1 bg-gray-700 mb-1"></div>
            <div className="w-6 h-1 bg-gray-700"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
