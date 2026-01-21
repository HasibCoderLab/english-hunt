import React from 'react';
import logo from "../assets/logo.jpg"
import { NavLink } from 'react-router';
import Footer from './footer';

const Navbar = () => {
  //   Style For  Active  Normal
  const getLinkStyle = ({ isActive }) => 
    `text-xs md:text-sm font-semibold tracking-widest transition-colors duration-300 ${
      isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-6 left-0 right-0 flex justify-center z-50 ">
      <div className="w-[90%] max-w-5xl bg-[#0a0a1a]/80 backdrop-blur-md border border-gray-800 px-8 py-4 rounded-full flex items-center justify-between shadow-2xl ">
        
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center">
          <img 
            src={logo} 
            alt=" Logo" 
            className="h-8 md:h-10 object-contain rounded-full"
          />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-10">
          <NavLink to="/about" className={getLinkStyle}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" className={getLinkStyle}>
            COURSES
          </NavLink>
          <NavLink to="/experience" className={getLinkStyle}>
            EXPERIENCE
          </NavLink>
          <NavLink to="/contact" className={getLinkStyle}>
            CONTACT
          </NavLink>

          <Footer/>

          {/* Divider and Theme Switcher  */}
          <div className="flex items-center gap-4 ml-4 border-l border-gray-700 pl-4">
            <button className="text-yellow-500 hover:scale-110 transition-transform">
              {/* Sun Icon (Light/Dark mode) */}
              <p>☀️</p>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;