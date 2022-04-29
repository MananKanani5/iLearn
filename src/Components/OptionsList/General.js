import React from 'react'
import { NavLink } from "react-router-dom";

export const General = () => {
  return (
    <>
    <NavLink  style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to={"/"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Home</NavLink>
    <NavLink  style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to={"/About"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">About Us</NavLink>
    <NavLink  style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to={"/Gallery"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Gallery</NavLink>
    <NavLink  style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to={"/Contactus"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Contact Us</NavLink>

  </>
  )
}
