import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-4 pb-20">
<div> 

 <h1 className=' text-amber-300 text-4xl font-bold'>  About Us</h1>
</div>

      <div className="">
        <h1 className='text-amber-300 text-4xl font-bold mt-5'>The Best English Center  Of Bangladesh </h1>
        < h2  className='text-4xl text-teal-400'> Prafasing</h2>
        <p>....</p>

         < h2  className='text-4xl text-teal-400'> Pasage Freection</h2>
        <p>....</p>
        
        <h2 className='text-cyan-500 font-semibold mt-9'> Instractor</h2>
        <h1 className='text-5xl text-cyan-500'>Khursed Alom Manik </h1>
      <span className='text-red-600'> Dhaka University BSS (English) </span>
      </div>
    </div>
  )
}

export default About
