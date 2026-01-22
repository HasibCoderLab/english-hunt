import React from 'react';
import { FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-[#060612] border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            English <span className="text-[#f1a92a]">Hunt</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm">
            Manik Sir-এর নির্দেশনায় ইংরেজি জয় করার সহজ যাত্রা।
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 font-semibold text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300">
          <NavLink to="/" className="hover:text-[#f1a92a] transition">Home</NavLink>
          <NavLink to="/courses" className="hover:text-[#f1a92a] transition">Courses</NavLink>
          <NavLink to="/contact" className="hover:text-[#f1a92a] transition">Contact</NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition"><FaYoutube /></a>
          <a href="https://wa.me/01821323330" target="_blank" rel="noreferrer" className="hover:text-green-500 transition"><FaWhatsapp /></a>
        </div>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-900 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} English Hunt with Manik Sir. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;