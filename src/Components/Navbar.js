import React, { useState,useEffect } from "react";
import logo from "../img/logo.png";
import StudentRole from "./OptionsList/StudentRole";
import TeacherRole from "./OptionsList/TeacherRole";
import { NavLink } from "react-router-dom";
import { General } from "./OptionsList/General";
import { Admin } from "./OptionsList/Admin";
// import {Fragment, PureComponent } from 'react';
const renderSwitch = (param) => {
  switch (param) {
    case "teacher":
      return <TeacherRole />;
    case "student":
      return <StudentRole />;
    case "admin":
      return <Admin />;
    default:
      return <General />;
  }
};


const Navbar = (props) => {
  const [menu, setMenu] = useState("hidden");
  
  const showMenu = () => {
    menu === "hidden" ? setMenu("block") : setMenu("hidden");
  };


  return (
    <>
      <div className="bg-Secondary-color text-white top-0 w-full sticky z-10">
        <div className="flex justify-evenly  items-center py-3 mx-5">
          <div className="logo flex-col justify-center items-center mr-10">
            <div className="clogo ">
              <NavLink to="/"><img src={logo} className="w-[400px] " alt="KES Logo" loading="eager" /></NavLink>
            </div>
          </div>

          <div className="hambuger block md:hidden ">
            <button onClick={showMenu} className="">
              <i className={` ${menu === 'hidden' ? 'block' : 'hidden'} fa fa-solid fa-bars text-2xl h-4 w-4`}></i>

              <i className={` ${menu === 'hidden' ? 'hidden' : 'block'} fa fa-solid fa-close text-2xl h-4 w-4`}></i>
            </button>
          </div>
          {/* <footer className={`${
          props.theme === "black" ? "text-slate-50" : "text-slate-900"
        } body-font ${
          props.theme === "black" ? "bg-slate-900" : "bg-slate-50"
        } body-font xl:h-350`}> */}
          <div className={`md-options w-full hidden md:flex flex-row space-x-7 ${props.status=='true'?'':'justify-end'}`}>
            {renderSwitch(localStorage.getItem('role'))}
          </div>
          {
            console.log(props.status)
          }
          {  
          props.status=='true' &&
          <div className="navigation relative inline-block max-sm:ml-[20px]">
            <NavLink to={""} className="block profile bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-4 h-auto w-auto rounded-full hover:shadow-lg cursor-pointer">
              <i className="fa fa-user-alt flex items-center"> 
                <span className="font-sans font-semibold ml-2 max-sm:hidden"> {props.name} </span>
                <i className="fa fa-angle-down ml-2"></i>
                </i> 
            </NavLink>
            <div className="navigation-content shadow-lg border rounded-md absolute right-3 hidden z-10 min-w-[160px] bg-white">
              {/* <NavLink to={"/Dashboard"} className="block p-3 hover:bg-slate-100 font-semibold text-black hover:text-hover-primary hover:rounded-md">Dashboard</NavLink> */}
              
              <NavLink to={"/Logout"} className="block p-3 hover:bg-slate-100 font-semibold text-black hover:text-hover-primary hover:rounded-md">Logout</NavLink>
            </div>
          </div> }

        </div>
        
        <div className="sm-options bg-hover-secondary">
          <div className={`py-5 px-2 options md:hidden ${menu}  flex flex-col justify-center items-center  space-y-4`}>
            {renderSwitch(localStorage.getItem('role'))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
