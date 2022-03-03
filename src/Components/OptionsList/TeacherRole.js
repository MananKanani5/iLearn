import React from 'react'
import { NavLink } from "react-router-dom";


const TeacherRole = () => {
  return (
    <>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#f36730' : '#ffffff',
        })}
        to="/Attendance"
        className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold">

        Create Attendance
      </NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '#ffffff',
      })} to="/Assignment" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Assigment</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '#ffffff',
      })} to="/Notice" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Notice</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '#ffffff',
      })} to="/Quiz" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Quiz</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '#ffffff',
      })} to="/AdminCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create admin</NavLink>

    </>
  )
}

export default TeacherRole