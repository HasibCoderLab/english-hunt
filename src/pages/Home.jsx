import React from "react";
import bannerImg from "../assets/Banner.jpg";
import { motion } from "framer-motion";
import {
  FaBook,
  FaUserGraduate,
  FaBookReader,
  FaDeskpro,
} from "react-icons/fa";

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
    <div className="w-full flex justify-center mt-24">
      <div className="relative w-[800px] h-[400px] flex items-center justify-center">

        {/* Image */}
        <motion.img
          src={bannerImg}
          alt="banner"
          // initial={{ scale: 0.9, opacity: 0 }}
          // animate={{ scale: 1, opacity: 1 }}
          // transition={{ duration: 1 }}
          className="w-full h-full object-cover rounded-2xl"
         
        />

        {/* Orbit animation */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {/* Icon 1 */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute -top-6 bg-white p-4 rounded-full shadow-xl text-blue-600 text-2xl"
          >
            <FaBook />
          </motion.div>

          {/* Icon 2 */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute right-[-20px] bg-white p-4 rounded-full shadow-xl text-green-600 text-2xl"
          >
            <FaUserGraduate />
          </motion.div>

          {/* Icon 3 */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute bottom-[-20px] bg-white p-4 rounded-full shadow-xl text-purple-600 text-2xl"
          >
            <FaBookReader />
          </motion.div>

          {/* Icon 4 */}
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute left-[-20px] bg-white p-4 rounded-full shadow-xl text-orange-600 text-2xl"
          >
            <FaDeskpro />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
