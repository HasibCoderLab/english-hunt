import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Set initial time
    setTime(new Date().toLocaleTimeString());
    
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    // Cleanup
    return () => clearInterval(timer);
  }, []);

  const SocialIcon = ({ icon: Icon, color, label, link }) => (
    <div className="relative group flex flex-col items-center">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={label}
        className={`${color} text-3xl transition-transform duration-300 group-hover:scale-125`}
      >
        <Icon />
      </a>
      <span className="absolute -top-10 scale-0 group-hover:scale-100 bg-gray-800 text-white text-[10px] px-2 py-1 rounded transition-all duration-300 whitespace-nowrap">
        {label}
      </span>
    </div>
  );

  return (
    <footer className="w-full bg-gray-50 dark:bg-[#060611] border-t border-gray-200 dark:border-gray-800 py-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 px-4">
        
        {/* Digital Watch */}
        <div className="bg-white dark:bg-gray-900 px-6 py-2 rounded-full border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
          <span className="text-xl md:text-2xl font-mono font-bold text-teal-500 tracking-wider">
            {time || '00:00:00'}
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-8 mt-4">
          <SocialIcon 
            icon={FaFacebook} 
            color="text-blue-600" 
            label="Facebook"
            link="https://www.facebook.com/profile.php?id=61578104262155" 
          />
          <SocialIcon 
            icon={FaYoutube} 
            color="text-red-600" 
            label="YouTube" 
            link="https://youtube.com" 
          />
          <SocialIcon 
            icon={FaLinkedin} 
            color="text-blue-400" 
            label="LinkedIn" 
            link="https://linkedin.com" 
          />
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 space-y-1">
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
            © 2026 <span className="text-[#f1a92a] font-bold">English Hunt</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Designed & Developed By 
            <a 
              href="https://github.com/HasibCoderLab" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-teal-500 hover:underline font-bold"
            >
              Hasib Hasan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;