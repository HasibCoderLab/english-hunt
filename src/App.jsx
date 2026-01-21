import React from 'react'
import { Route, Routes } from "react-router";
import Home from './pages/home';
import About from './pages/about';

const App = () => {
  return (
    <div>

<Routes>
  <Route  path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
</Routes>
    </div>
  )
}

export default App
