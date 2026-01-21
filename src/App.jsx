import React from 'react'
import { Route, Routes } from "react-router";
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './layout/Navbar';

const App = () => {
  return (
  

   <>
      <Navbar />
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/contact" element={<Contact/>} />

</Routes>
      </>

  )
}

export default App
