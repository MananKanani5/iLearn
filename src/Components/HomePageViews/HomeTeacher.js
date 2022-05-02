import React from "react";
import { NavLink } from "react-router-dom";

function HomeTeacher() {
  return (
    <>
      <section className=" px-8 max-sm:px-5 py-8  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        <div className="sm:w-1/2 max-sm:mb-10">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 mb-4 sm:mr-6">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Assignments
            </h1>
            <div className="list mt-5 ">
              <ul className="m-2">
                <li className="my-6">
                  <NavLink
                    to={"/Assignment"}
                    className="hover:text-Primary-color transition ease-in-out duration-400"
                  >
                    
                    <h3>1. Assignment Three - </h3>
                  </NavLink>
                  <div className="meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap ">
                    <p>Created On: 07-03-2022</p>
                    <p>End Date: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
              </ul>
              <NavLink
                    to={"/Assignment"}
                    className="hover:text-Primary-color transition ease-in-out duration-400"
                  >
                    <button className=" text-Primary-color transition ease-in-out duration-400 px-7 py-4 h-auto w-auto  cursor-pointer font-semibold mr-3"> See More </button>
                  </NavLink>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 sm:ml-6">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Quiz
            </h1>
            <div className="list mt-5 ">
              <ul className="m-2">
                <li className="my-6">
                  <NavLink
                    to={"/Quizz"}
                    className="hover:text-Primary-color transition ease-in-out duration-400"
                  >
                
                    <h3>1. Quiz 1 - iLearn </h3>
                  </NavLink>
                  <div className="meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap ">
                    <p>Class: TY-BSCIT</p>
                    <p>Created On: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
              </ul>
              <NavLink
                    to={"/Quizz"}
                    className="hover:text-Primary-color transition ease-in-out duration-400"
                  >
                    {" "}
                    <button className=" text-Primary-color transition ease-in-out duration-400 px-7 py-4 h-auto w-auto  cursor-pointer font-semibold mr-3"> See More </button>
                  </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-8 max-sm:px-5 pb-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        {/* <div className="sm:w-1/2 max-sm:mb-10">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 sm:mr-6">
            
          </div>
        </div> */}

        <div className=" w-full">
        <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 ">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Notices
            </h1>
            <div className="flex justify-between items-center max-sm:flex-col">
            <h3 className="max-sm:mb-4">Create New Notice</h3>
            <NavLink
                    to={""}
                    className="hover:text-Primary-color transition ease-in-out duration-400 "
                  >
                    {" "}
                    <button className="border-2 border-Primary-color  bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold shadow-[#f36730] mr-3"> Create Now </button>
                  </NavLink>
                  </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeTeacher;
