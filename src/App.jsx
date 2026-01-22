import React from 'react'
import { Route, Routes } from "react-router";

import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

import Navbar from "./Layout/Navbar.jsx";
import Footer from "./Layout/Footer.jsx"; 


const App = () => {
  return (


    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
     <Footer/>
    </>

  )
}

export default App
