import React from "react";
import bannerImg from "../assets/Banner.jpg"; // আপনার ২য় ইমেজটি এখানে দিন
import { motion } from "framer-motion";
import {
  FaBook,
  FaUserGraduate,
  FaBookReader,
  FaChalkboardTeacher,
} from "react-icons/fa";

// Floating Animation
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen h-full  w-full flex flex-col items-center justify-center bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-20 px-4 ">
      
      {/* Hero Text Section */}
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
           English Hunt with <span className="text-[#f1a92a]">Manik Sir</span>
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Fearless English শেখার এক অনন্য প্ল্যাটফর্ম। আমরা বিশ্বাস করি সঠিক নির্দেশনায় ইংরেজি জয় করা সম্ভব।
        </p>
      </div>

      {/* Main Banner with Orbit Animation */}
      <div className="relative w-full max-w-[800px] h-[300px] md:h-[450px] flex items-center justify-center">
        
        {/* Glow Background Effect  */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-[100px] rounded-full"></div>

        {/* Center Banner Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-[90%] h-full overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl"
        >
          <img
            src={bannerImg}
            alt="banner"
            className="w-full h-full object-cover"
          />
          {/* Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>

        {/* Orbiting Icons */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center z-20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Icon 1 - Blue (from logo) */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute -top-4 md:-top-8 bg-white dark:bg-gray-800 p-3 md:p-5 rounded-2xl shadow-2xl text-blue-500 text-2xl"
          >
            <FaBook />
          </motion.div>

          {/* Icon 2 - Orange/Gold (from logo) */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute right-[-10px] md:right-[-30px] bg-white dark:bg-gray-800 p-3 md:p-5 rounded-2xl shadow-2xl text-[#f1a92a] text-2xl"
          >
            <FaUserGraduate />
          </motion.div>

          {/* Icon 3 - Teal/Green */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute bottom-[-10px] md:bottom-[-30px] bg-white dark:bg-gray-800 p-3 md:p-5 rounded-2xl shadow-2xl text-teal-500 text-2xl"
          >
            <FaBookReader />
          </motion.div>

          {/* Icon 4 - Deep Blue */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute left-[-10px] md:left-[-30px] bg-white dark:bg-gray-800 p-3 md:p-5 rounded-2xl shadow-2xl text-indigo-600 text-2xl"
          >
            <FaChalkboardTeacher />
          </motion.div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex gap-4"
      >
        <button className="bg-[#f1a92a] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
          Get Started
        </button>
        <button className="border-2 border-blue-500 text-blue-500 dark:text-blue-400 px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
          Learn More
        </button>
      </motion.div>

    </div>
  );
};

export default Home;