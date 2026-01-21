import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaGraduationCap, FaAward } from 'react-icons/fa';
import instructorPic from "../assets/instructorPic-2.jpg"; 

const About = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-6 pb-20 overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Image with Experience Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          {/* Main Image Frame */}
          <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-3xl overflow-hidden border-4 border-[#f1a92a] shadow-2xl z-10">
            <img 
              src={instructorPic} 
              alt="Khurshed Alom Manik Sir" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 -right-4 md:-right-8 bg-[#f1a92a] text-white p-4 md:p-6 rounded-2xl shadow-2xl z-20 flex flex-col items-center"
          >
            <span className="text-2xl md:text-4xl font-black">15+</span>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-center">
              Years Teaching <br /> Experience
            </span>
          </motion.div>

          {/* Decorative Background Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full"></div>
        </motion.div>

        {/* Right Side: Information Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-4">
            ABOUT US
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            The Best English Center <br /> 
            <span className="text-[#f1a92a]">In Bangladesh</span>
          </h1>

          <div className="mt-8 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-teal-100 dark:bg-teal-900/30 text-teal-500 rounded-lg">
                <FaAward size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Prafasing</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">আমরা প্রতিটি ছাত্রের বেসিক থেকে এডভান্স লেভেল পর্যন্ত ইংরেজি দক্ষতা বৃদ্ধিতে কাজ করি।</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-lg">
                <FaUserTie size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-500">Pasage Freection</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">সহজ টেকনিকের মাধ্যমে জটিল প্যাসেজ সমাধান করার অনন্য পদ্ধতি শিখুন।</p>
              </div>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          {/* Instructor Info */}
          <div className="flex flex-col gap-2">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase text-xs">Lead Instructor</span>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">Khurshed Alom Manik</h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
              <FaGraduationCap className="text-red-500" />
              <span className="text-red-600 dark:text-red-400 font-semibold italic text-lg">
                Dhaka University, BSS (English)
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;