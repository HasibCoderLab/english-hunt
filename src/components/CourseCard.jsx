import React from 'react'
import pic from "../assets/Banner-2.jpg"

const CorseCard = () => {
  return (
    <div>
      <div className="  ">
        <img  className='w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' src={pic} alt="" />
        <h2 className=""></h2>
        <p className=""></p>
      </div>
    </div>
  )
}

export default CorseCard
