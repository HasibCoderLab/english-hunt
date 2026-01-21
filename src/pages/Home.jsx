import React from "react";
import bannerImg from "../assets/Banner.jpg";
import { motion } from "framer-motion";
import { FaBook, FaUserGraduate, FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router";
import Footer from "../layout/Footer";


const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};


const Home = () => {
  const navigate = useNavigate();
  return (
    // Navbar for nav  pt-32 (phn)  md:pt-40 (DeskTop) 
    <div className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-4 pb-20">
      
      {/* Hero Text Section */}
      <div className="text-center mb-12 relative z-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
        >
           English Hunt with <span className="text-[#f1a92a]">Manik Sir</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4"
        >
          Fearless English শেখার এক অনন্য প্ল্যাটফর্ম। আমরা বিশ্বাস করি সঠিক নির্দেশনায় ইংরেজি জয় করা সম্ভব।
        </motion.p>
      </div>

      {/* Main Banner Area */}
      <div className="relative w-full max-w-[800px] aspect-video md:h-[450px] flex items-center justify-center">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-[80px] rounded-full"></div>

        {/* Banner Image */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-[90%] h-full overflow-hidden rounded-3xl border-2 md:border-4 border-white dark:border-gray-800 shadow-2xl"
        >
          <img src={bannerImg} alt="banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* Orbiting Icons */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center z-20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <motion.div variants={floating} 
          animate="animate" 
          className="absolute -top-4 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-xl text-blue-500 text-xl md:text-2xl"><FaBook />
          </motion.div>

          <motion.div variants={floating}
           animate="animate" 
           className="absolute right-0 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-xl text-[#f1a92a] text-xl md:text-2xl">
            <FaUserGraduate />

            </motion.div>

          <motion.div variants={floating}
           animate="animate" 
           className="absolute -bottom-4 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-xl text-teal-500 text-xl md:text-2xl">
            <FaBookReader />
            </motion.div>

          <motion.div variants={floating} 
          animate="animate" 
          className="absolute left-0 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-xl text-indigo-600 text-xl md:text-2xl">
            <FaChalkboardTeacher />

            </motion.div>
        </motion.div>
      </div>

      {/* Buttons */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        <button 
        className="bg-[#f1a92a] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95 cursor-pointer"
        onClick={()=> navigate("/contact")}
        >
      Get Started
          </button>
        <button 
        className="border-2 border-blue-500 text-blue-500 dark:text-blue-400 px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all cursor-pointer" 
        onClick={() => navigate("/courses")}>
          Learn More
          </button>
      </motion.div>


    </div>
  );
};

export default Home;