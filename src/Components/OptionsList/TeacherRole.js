import React from 'react'
import { NavLink } from "react-router-dom";


const TeacherRole = () => {
  return (
    <>
      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Assignment" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Assigment</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Notice" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold">View Notice</NavLink>

<NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/NoticeCreate" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Create Notice</NavLink>

      <NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/Quizz" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Quiz</NavLink>
 

<NavLink style={({ isActive }) => ({
        color: isActive ? '#f36730' : '',
      })} to="/SelectSubject" className=" hover:text-Primary-color transition ease-in-out duration-400 font-semibold"> Lecture Structutre</NavLink>

    </>
  )
}

export default TeacherRole