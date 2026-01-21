import React from 'react'
import Footer from '../layout/Footer'

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-4 pb-20">

      <div className='w-[90%] max-w-125 h-125 bg-[#141f1f] rounded flex flex-col justify-center items-center gap-5'>
        <h1 className="text-white text-[20px] font-semibold ">Contact US</h1>
        {/* ============= Form  =============  */}
        <form className=' w-full flex flex-col justify-center items-center gap-5'>
          <div className='w-[80%] h-12.5 flex  justify-center items-center gap-2.5'>

            {/* ======================  Input field ========== */}

            <input type="text" placeholder='First  Name'
              className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5'

            />

            <input type="text" placeholder='Last  Name'
              className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5'

            />

            {/* ======================  Input field email,pass,userName ========== */}
          </div>


          <input type="email" placeholder='Enter Email'
            className='w-[80%]  h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5'

          />

          <input type="text" placeholder='Enter Your Message'
            className='w-[80%] h-h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5'



          />
          <button className="bg-[#07c7e4] text-black px-50 py-2 rounded-lg cursor-pointer
                    "
          >Send </button>


        </form >

      </div>
     

    </div>

  )
}

export default Contact
