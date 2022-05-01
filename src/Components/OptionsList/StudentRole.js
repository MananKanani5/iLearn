import React from "react";
import {NavLink} from "react-router-dom";

const StudentRole = () => {
  return (
    <>
      <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={"/AssignmentSt"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Assignments</NavLink>
      {/* <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={""} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Attendance</NavLink> */}
      {/* <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={""} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Forum</NavLink> */}
      <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={"/Quizz"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Quiz</NavLink>
      <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={"/Notice"} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Notice</NavLink>
      {/* <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={""} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Files</NavLink>
      <NavLink  style={({ isActive }) => ({
          color: isActive ? '#f36730' : '',
        })} to={""} className="hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Vote</NavLink> */}
    </>
  );
};

export default StudentRole;
