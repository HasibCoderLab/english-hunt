import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, price, image }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[320px] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800"
    >
      {/* Top Badge (Class Name) */}
      <div className="absolute top-4 left-4 z-20 bg-[#f1a92a] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
        {title}
      </div>

      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-[#f1a92a]">৳{price}</span>
          {/* 5 Star Rating */}
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Advanced English for {title}
        </h3>

        {/* Enroll Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact')}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;