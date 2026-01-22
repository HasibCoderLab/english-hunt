import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import About from './pages/About.jsx';

const App = () => {
  return (
  

   <>
      <Navbar />
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/courses" element={<Courses/>} />
  <Route path="/contact" element={<Contact/>} />

</Routes>
<Footer/>
      </>

  )
}

export default App
