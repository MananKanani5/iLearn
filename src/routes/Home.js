import React from "react";
import { NavLink } from "react-router-dom";
import HomeStudent from "../Components/HomePageViews/HomeStudent";
import HomeTeacher from "../Components/HomePageViews/HomeTeacher";
import bg from "../img/home/bg.png";

class Home extends React.Component {
  render() {
    return (
      <>
        { !(localStorage.getItem('role')=='teacher' || localStorage.getItem('role')=='student')  &&
          <section className="bg-[#fff7f2] hero py-24 px-10 flex justify-between items-center   max-sm:flex-wrap max-sm:px-5 max-sm:py-14 fade-in">
            <div className="img w-2/4 max-sm:w-full max-sm:mb-10 ">
              <img src={bg} alt="bg" loading="eager" />
            </div>

            <div className="text pr-10 max-sm:pr-0 max-sm:flex max-sm:flex-wrap max-sm:justify-center sm:ml-16">
              <h3 className="tracking-widest uppercase max-sm:text-[18px]">
                Welcome to kes's
              </h3>
              <h1 className=" font-bold uppercase mb-5 text-Secondary-color max-sm:text-[28px] max-md:text-[40px]">
                Learners College
              </h1>
              <p className="mb-12 max-sm:text-center max-sm:mb-10">
                Learners College of Arts and Commerce is one of the best
                colleges in the Mumbai.
              </p>
              <button className="">
                <NavLink
                  to={"/Login"}
                  className="border-2 border-Primary-color  bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold shadow-2xl shadow-[#f36730] mr-3"
                >
                  Students
                </NavLink>
              </button>
              <button>
                <NavLink
                  to={"/login"}
                  className="border-2 border-Primary-color transition-all ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:bg-hover-primary hover:text-white text-Primary-color font-semibold"
                >
                  Teachers
                </NavLink>
              </button>
            </div>
          </section>
        }


        { localStorage.getItem('role')=='teacher' &&
          <section className="bg-white">
          <h1 className="text-center"> Teachers View</h1>
          {<HomeTeacher />}
        </section>
        }

        { localStorage.getItem('role')=='student' &&
          <section className="bg-white ">
          <h1 className="text-center"> Student View</h1>
          {<HomeStudent />}
        </section>
        }
      </>
    );
  }
}

export default Home;
