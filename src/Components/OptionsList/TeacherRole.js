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

       Attendance
      </NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Assignment" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Assigment</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Notice" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Notice</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Quiz" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Quiz</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/AdminCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create admin</NavLink>

<NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/StudentCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Student</NavLink>

<NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/TeacherCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Create Teacher</NavLink>

<NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/LecStruct" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Lecture Structutre</NavLink>

    </>
  )
}

export default TeacherRole