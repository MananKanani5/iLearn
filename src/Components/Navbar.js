import React, { useState } from "react";
import logo from "../img/logo.png";
import StudentRole from "./OptionsList/StudentRole";
import TeacherRole from "./OptionsList/TeacherRole";
import { NavLink } from "react-router-dom";
// import {Fragment, PureComponent } from 'react';
const renderSwitch = (param) => {
  switch (param) {
    case "teacher":
      return <TeacherRole />;
    case "student":
      return <StudentRole />;
    default:
      return "None";
  }
};

const Navbar = (props) => {
  const [menu, setMenu] = useState("hidden");
  const showMenu = () => {
    menu === "hidden" ? setMenu("block") : setMenu("hidden");
  };
  return (
    <>
      <div className="bg-Secondary-color text-white top-0 w-full sticky ">
        <div className="flex justify-evenly  items-center py-2 px-5 max-sm:pl-3 max-sm:pr-3">
          <div className="hambuger block md:hidden">
            <button onClick={showMenu} className=" ml-2">
              <i className={` ${menu === 'hidden' ? 'block' : 'hidden'} fa fa-solid fa-bars text-2xl h-4 w-4`}></i>

              <i className={` ${menu === 'hidden' ? 'hidden' : 'block'} fa fa-solid fa-close text-2xl h-4 w-4`}></i>
            </button>
          </div>
          <div className="logo flex-col justify-center items-center mr-16">

            <div className="clogo ">
              <NavLink to="/"><img src={logo} className="w-[400px] " alt="KES Logo" /></NavLink>
            </div>
          </div>
          <div className="md-options w-full hidden md:flex flex-row space-x-7">
            {renderSwitch("teacher")}
          </div>

          <div className="navigation relative inline-block">
            <NavLink to={"/Login"} className="block profile bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-4 h-auto w-auto rounded-full hover:shadow-lg cursor-pointer"><i className="fa fa-user-alt flex"> <span className="font-sans font-semibold ml-2 max-sm:hidden"> Login </span></i>
            </NavLink>
            <div className="navigation-content shadow-lg border rounded-md absolute right-3 hidden z-10 min-w-[160px] bg-white">
              <NavLink to={"/Dashboard"} className="block p-3 hover:bg-slate-100 font-semibold text-black hover:text-hover-primary hover:rounded-md">Dashboard</NavLink>
              <NavLink to={"/EditAc"} className="block p-3 hover:bg-slate-100 font-semibold text-black hover:text-hover-primary hover:rounded-md">Edit Account</NavLink>
              <NavLink to={"/Logout"} className="block p-3 hover:bg-slate-100 font-semibold text-black hover:text-hover-primary hover:rounded-md">Logout</NavLink>
            </div>
          </div>

        </div>
        <div className="sm-options bg-hover-secondary">
          <div className={`py-5 px-2 options md:hidden ${menu}  flex flex-col justify-center items-center  space-y-4`}>
            {renderSwitch("teacher")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
