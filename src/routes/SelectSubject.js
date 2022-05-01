import React from "react";
import ST from "../img/ST.jpg";
import AN from "../img/AN.jpg";
import { NavLink } from "react-router-dom";

function SelectSubject() {
  return (
    <>
      <section className="px-8 max-sm:px-5 py-12 bg-[#fff7f2] m-z fade-in">
        <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 mx-auto flex">
          <div className="mx-16 my-4">
            <NavLink to="/LecStruct">
              <button className="" onClick={""}>
                <img src={ST} className="rounded-2xl pulsate-bck" />
              </button>
            </NavLink>
          </div>

          <div className="mx-16 my-4">
            <NavLink to="/LecStruct">
              <button className="" onClick={""}>
                <img src={AN} className=" rounded-2xl pulsate-bck" />
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectSubject;
