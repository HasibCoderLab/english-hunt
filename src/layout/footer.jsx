import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
      <div className=" flex flex-col items-center  dark:bg-[#0b9b81d6] transition-colors duration-500" >
       <div className="flex  items-center justify-center mt-10 ">
          <FaFacebook className='text-blue-800 w-10 h-20 mr-4  cursor-pointer -' />
        <FaYoutube className='text-red-800 w-10 h-20 cursor-pointer' />
      </div>
      <p>

    © 2026 English Hunt All reght rewseva 
      </p>
      <span> Design & Devepob By <a href="hppts://github.com.HasibCoderLab">  Hasib Hsan</a> </span>

    </div>
  )
}

export default Footer
