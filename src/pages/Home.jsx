import React from "react";
import bannerImg from "../assets/Banner.jpg";
import {
  FaBook,
  FaUserGraduate,
  FaBookReader,
  FaDeskpro,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="relative w-11/12">

        {/* Banner Image */}
        <img
          src={bannerImg}
          alt="banner"
          className="w-full h-[320px] object-cover rounded-xl"
        />

        {/* Icons */}
        <div className="absolute -top-6 left-10 bg-white p-3 rounded-full shadow-lg text-blue-600 text-2xl">
          <FaBook />
        </div>

        <div className="absolute top-1/2 -left-6 bg-white p-3 rounded-full shadow-lg text-green-600 text-2xl">
          <FaUserGraduate />
        </div>

        <div className="absolute top-1/2 -right-6 bg-white p-3 rounded-full shadow-lg text-purple-600 text-2xl">
          <FaBookReader />
        </div>

        <div className="absolute -bottom-6 right-10 bg-white p-3 rounded-full shadow-lg text-orange-600 text-2xl">
          <FaDeskpro />
        </div>

      </div>
    </div>
  );
};

export default Home;
