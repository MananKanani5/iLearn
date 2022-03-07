import React from 'react'
import { NavLink } from "react-router-dom";


const TeacherRole = () => {
  return (
    <>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })}
        to="/Attendance"
        className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold">

        Create Attendance
      </NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Assignment" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Assigment</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Notice" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Notice</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Quiz" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Quiz</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/AdminCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create admin</NavLink>

<NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/StudentCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Student</NavLink>

    </>
  )
}

export default TeacherRole