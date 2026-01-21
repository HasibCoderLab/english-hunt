import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from "../components/CourseCard";

import pic1 from "../assets/Banner-2.jpg"; 

const Courses = () => {
 
  const courseData = [
    { id: 1, title: "Class 8", price: "1500", image: pic1 },
    { id: 2, title: "Class 9", price: "2000", image: pic1 },
    { id: 3, title: "Class 10", price: "2000", image: pic1 },
    { id: 4, title: "SSC Preparation", price: "3500", image: pic1 },
    { id: 5, title: "FRB (SSC)", price: "4000", image: pic1 },
  ];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-6 pb-20">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4"
        >
          Our <span className="text-[#f1a92a]">Premium</span> Courses
        </motion.h1>
        <p className="text-gray-500 dark:text-gray-400">আপনার ক্লাসের সেরা প্রস্তুতি নিতে আজই এনরোল করুন</p>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {courseData.map((course) => (
          <CourseCard 
            key={course.id}
            title={course.title}
            price={course.price}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;