import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const linkStyle = ({ isActive }) =>
    `uppercase text-xs md:text-sm tracking-widest font-semibold transition-colors duration-300
     ${isActive ? "text-[#f1a92a]" : "text-gray-400 hover:text-white"}`;

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-4">
      <div className="mx-auto max-w-5xl bg-[#0a0a1a]/90 backdrop-blur-xl border border-gray-800 px-6 py-3 rounded-full flex items-center justify-between shadow-xl relative">

        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-9 rounded-full border border-gray-700 object-cover"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/courses" className={linkStyle}>Courses</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>

          <span className="h-6 w-[1px] bg-gray-700"></span>

          <button className="text-[#f1a92a] hover:scale-110 transition">
            <FaSun />
          </button>
        </div>
        

        {/* Mobile Button */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-[#f1a92a]">
            <FaSun />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 right-0 md:hidden transition-all duration-300
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          <div className="bg-[#0a0a1a] border border-gray-800 rounded-3xl p-6 mx-2 flex flex-col items-center gap-5 shadow-2xl">
            <NavLink to="/about" 
            onClick={() => setIsOpen(false)} 
            className={linkStyle}>About</NavLink>

            <NavLink to="/courses" 
            onClick={() => setIsOpen(false)} 

            className={linkStyle}>Courses</NavLink>
            <NavLink to="/contact" 

            onClick={() => setIsOpen(false)} 
            className={linkStyle}>Contact</NavLink>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
