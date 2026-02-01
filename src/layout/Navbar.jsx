import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode Logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const linkStyle = ({ isActive }) =>
    `relative uppercase text-[11px] md:text-[13px] tracking-[0.15em] font-bold transition-all duration-300
     ${isActive ? "text-[#f1a92a]" : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"}
     group flex flex-col items-center`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-4 pt-6 transition-all duration-500">
      <div 
        className={`mx-auto max-w-5xl px-6 py-3 rounded-full flex items-center justify-between transition-all duration-500 relative
          ${scrolled 
            ? "bg-white/70 dark:bg-[#0a0a1a]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#f1a92a]/30" 
            : "bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-none"}
        `}
      >
        
        {/* Logo Section with Glowing Ring */}
        <NavLink to="/" onClick={() => setIsOpen(false)} className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-[#f1a92a] to-teal-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          <img
            src={logo}
            alt="Logo"
            className="relative h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Courses", path: "/courses" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <NavLink key={item.name} to={item.path} className={linkStyle}>
              {item.name}
              {/* Active Underline Animation */}
              <span className="absolute -bottom-1 w-0 h-0.5 bg-[#f1a92a] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

          {/* Theme Toggle Button */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#f1a92a] hover:rotate-360 transition-all duration-700 shadow-inner cursor-pointer"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} className="text-gray-600 " />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-[#f1a92a] transition-transform active:scale-90 "
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} className="text-gray-600 " />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-white transition-all active:scale-90"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-20 left-4 right-4 md:hidden transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95 pointer-events-none"}`}
        >
          <div className="bg-white/95 dark:bg-[#0a0a1a]/95 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 rounded-4xl] p-8 flex flex-col items-center gap-6 shadow-2xl">
            {["Home", "About", "Courses", "Contact"].map((label) => (
              <NavLink 
                key={label}
                to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-200 hover:text-[#f1a92a] dark:hover:text-[#f1a92a] transition-colors"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;