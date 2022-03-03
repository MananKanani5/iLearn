import React from "react";
import {NavLink} from "react-router-dom";

const StudentRole = () => {
  return (
    <>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Assignments</NavLink>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Attendance</NavLink>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Forum</NavLink>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Quiz</NavLink>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Notice</NavLink>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Files</NavLink>
      <NavLink className="cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 font-semibold">Vote</NavLink>
    </>
  );
};

export default StudentRole;
