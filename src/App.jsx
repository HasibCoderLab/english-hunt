import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

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
