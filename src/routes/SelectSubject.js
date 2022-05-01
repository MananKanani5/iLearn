import React from "react";
import ST from "../img/ST.jpg";
import AN from "../img/AN.jpg";
import { NavLink,useNavigate } from "react-router-dom";


function SelectSubject() {
  const navigate = useNavigate();
  const handleSub1 = () =>
  {
    localStorage.setItem('sub','data');
    navigate('/LecStruct')
  }

  const handleSub2 = () =>
  {
    localStorage.setItem('sub','data2')
    navigate('/LecStruct')
  }
  return (
    <>
      <section className="px-8 max-sm:px-5 py-12 bg-[#fff7f2] m-z fade-in">
        <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 mx-auto flex">
          <div className="mx-16 my-4">
            <NavLink to="/LecStruct">
              <button className="" onClick={handleSub1}>
                <img src={ST} className="rounded-2xl pulsate-bck" />
              </button>
            </NavLink>
          </div>

          <div className="mx-16 my-4">
            <NavLink to="/LecStruct">
              <button className="" onClick={handleSub2}>
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
