import React from 'react'
import CourseCard from "../components/CourseCard"
const Courses = ({img,h1,p}) => {
  return (
  <div className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-4 pb-20">

    <CourseCard/>
    </div>
  )
}

export default Courses
