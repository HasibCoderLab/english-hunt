import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import About from './pages/about';

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
