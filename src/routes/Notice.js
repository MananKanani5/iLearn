import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export class Notice extends Component {
  render() {
    return (
      <>
        <div className=" px-8 py-12  bg-[#fff7f2]">
          <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2">
              Notices
            </h1>
            <div className="list mt-5 ">
              <ul className="m-2">
                <li className="my-6">                    
                    <h3 className="hover:text-Primary-color transition ease-in-out duration-400 mb-5">1. Notice One - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi! Asperiores dolor, enim optio magni, quo et labore illum esse quia explicabo laboriosam iusto assumenda dolorem . </h3>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam in quidem quos odio, quasi eligendi tempore dolor non error quia sint beatae labore, saepe sed possimus suscipit? Aspernatur, beatae unde obcaecati laudantium magnam vitae odio, labore non animi iusto deserunt ducimus. Natus eveniet laborum mollitia minima, veritatis et nesciunt porro!</p>
                </li>
                <hr />
              </ul>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Notice;
