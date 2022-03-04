import React from "react";
import { NavLink } from "react-router-dom";
import bg from '../img/home/bg.png'
class Home extends React.Component {


  render() {
    return (
      <>
        <div className="main py-24 px-10 flex justify-between items-center bg-slate-100  max-sm:flex-wrap max-sm:px-5 max-sm:py-14">

          <div className="img w-2/4 max-sm:w-full max-sm:mb-10">
            <img src={bg} alt="bg" />
          </div>

          <div className="text pr-10 max-sm:pr-0 max-sm:flex max-sm:flex-wrap max-sm:justify-center">
            <h3 className="tracking-widest uppercase text-[25px] max-sm:text-[20px] ">Welcome to kes's</h3>
            <h1 className="text-[60px] font-bold uppercase mb-5 text-Secondary-color max-sm:text-[28px] ">Learners College</h1>
            <p className="mb-12 text-center max-sm:mb-7">Learners College of Arts and Commerce is one of the best colleges in the Mumbai.</p> 
            <NavLink to={"."}
              className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold ">
              Start Learning
            </NavLink>
          </div>

        </div>
      </>
    );
  }
}

export default Home;