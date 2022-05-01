import React from 'react'
import { NavLink } from 'react-router-dom'
const AssignmentSmall2 = (props) => {
    var ad=props.ad
  return (
    <>
    <li className="my-6">
    <button onClick={() => {localStorage.removeItem('aid');
    localStorage.setItem('aid',ad.Assignment_Id);}} title={ad.Assignment_Id}>
                      <NavLink
                        to={"/AssignmentStu"}
                        className="hover:text-Primary-color transition ease-in-out duration-400" 
                      >
                        
                        <h3>
                          {ad.Assignment_Title}
                        </h3>
                       
                      </NavLink> </button>
                      <div className="meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap">
                        <p>Created On: {ad.date.toString().slice(0,10)}</p>
                        <p>End Date: {ad.Submission_Date.toString().slice(0,10)}</p>
                        <p>Marks: {ad.Assignment_Marks}</p>
                      </div>
                    </li>
    </>
  )
}

export default AssignmentSmall2