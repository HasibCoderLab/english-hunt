import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
      const linkStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "15px",
    textDecoration: "none",
  });
  return (
    <div>
      <NavLink to="/" style={linkStyle}> Home </NavLink> 
      <NavLink to="/about" style={linkStyle}> About </NavLink> 
      <NavLink to="/services" style={linkStyle}> Services </NavLink> 
      <NavLink to="/contact" style={linkStyle}> Contact </NavLink> 

    </div>
  )
}

export default Navbar
