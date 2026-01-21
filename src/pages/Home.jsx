import React from "react";
import bannerImg from "../assets/Banner.jpg";
import { motion } from "framer-motion";
import { FaBook, FaUserGraduate, FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router";

const floating = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-4 pb-20 overflow-x-hidden">
      
      {/* Hero Text */}
      <div className="text-center mb-12 relative z-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
        >
           English Hunt with <span className="text-[#f1a92a]">Manik Sir</span>
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
          Fearless English শেখার এক অনন্য প্ল্যাটফর্ম। আমরা বিশ্বাস করি সঠিক নির্দেশনায় ইংরেজি জয় করা সম্ভব।
        </p>
      </div>

      {/* Banner Area */}
      <div className="relative w-full max-w-[600px] aspect-square md:aspect-video flex items-center justify-center">
        
        {/* Banner Image */}
        <motion.div 
          className="relative z-10 w-[85%] h-[85%] overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl"
        >
          <img src={bannerImg} alt="banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* Improved Orbiting Icons - */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {/* Icons positioned relative to the container */}
          <div className="relative w-full h-full">
             <IconBox Icon={FaBook} color="text-blue-500" pos="top-0 left-1/2 -translate-x-1/2" />
             <IconBox Icon={FaUserGraduate} color="text-[#f1a92a]" pos="bottom-0 left-1/2 -translate-x-1/2" />
             <IconBox Icon={FaBookReader} color="text-teal-500" pos="left-0 top-1/2 -translate-y-1/2" />
             <IconBox Icon={FaChalkboardTeacher} color="text-indigo-600" pos="right-0 top-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="mt-16 flex flex-wrap justify-center gap-4 z-10">
        <button onClick={()=> navigate("/contact")} className="bg-[#f1a92a] text-white px-8 py-3 rounded-full font-bold shadow-lg">Get Started</button>
        <button onClick={()=> navigate("/courses")} className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-bold">Learn More</button>
      </div>
    </div>
  );
};

const IconBox = ({ Icon, color, pos }) => (
  <motion.div 
    variants={floating} animate="animate"
    className={`absolute ${pos} bg-white dark:bg-gray-800 p-2 md:p-4 rounded-xl shadow-xl ${color} text-lg md:text-2xl pointer-events-auto`}
  >
    <Icon />
  </motion.div>
);

export default Home;