import React from 'react'
import { useState,useEffect } from "react";
import SingleSubmission from './Quiz/SingleSubmission';
export const AssignmentOne = (props) => {


    const data=props.ad;
    
    
    const [stat, setStat] = useState("hidden");
    const showStat = () => {
        stat === "hidden" ? setStat("block") : setStat("hidden");
    };

    const [assignmentinfo, setAssignmentinfo] = useState("hidden");
    const showAssignmentinfo = () => {
        assignmentinfo === "block" ? setAssignmentinfo("hidden") : setAssignmentinfo("block");
    };

    const [subm, setSubm] = useState("hidden");
    const showSubm = () => {
        subm === "block" ? setSubm("hidden") : setSubm("block");
    };

    const [sb, setSb] = useState([])
    useEffect(() => {
      const getData1 = async () =>
      {
        const response = await fetch(`${process.env.REACT_APP_URL_LOCAL}/api/Assignment/FetchSubmission`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
              'aid':localStorage.getItem('aid')
          })
        });
        const json = await response.json();
        console.log(json);
        setSb(json.assignment);
        console.log(json.assignment);
        console.log(sb);
        //getData1();
      }
      getData1();
      return () => {
      }
    }, [])

  return (
    <>
    <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap max-sm:flex-col-reverse">

<div className='sm:w-[73%] w-full shadow-md rounded-2xl bg-white px-14 max-sm:px-5 py-14 max-sm:my-5 '>

    {/* Assignment Information */}

    <div>
        <button onClick={showAssignmentinfo} className="hambuger w-full flex justify-between items-center my-2">
            <span className="text-2xl font-bold uppercase text-Secondary-color" >
                Assignment Info
            </span>
            <div className="text-Secondary-color">

                <i className={` ${assignmentinfo === 'block' ? 'hidden' : 'block'} fa fa-angle-right text-2xl `}></i>

                <i className={` ${assignmentinfo === 'block' ? 'block' : 'hidden'} fa fa-angle-down text-2xl `}></i>
            </div>
        </button>
        <h1 className="text-xl font-semibold mb-14 pt-10 leading-normal text-Secondary-color max-sm:text-lg" >
            {data.Assignment_Title}
        </h1>
        <div className={`${assignmentinfo}`}>

            <hr className='mb-12 mt-7' />
            <h3 className='mb-3 text-Secondary-color'>Description: </h3>
            <p className='Description text-justify mb-10'>
            {data.Assignment_Content}
            </p>

            {/* <h3 className='mb-3 text-Secondary-color'>Attachments: </h3>
            <div className='flex flex-wrap'>
                <img className='my-2' src="https://via.placeholder.com/200" alt="" />
                <img className='my-2 sm:mx-3' src="https://via.placeholder.com/200" alt="" />
            </div> */}
        </div>
    </div>

    <hr className='mt-10 -mb-10' />

    {/* Submissions */}

    <div className=' pt-14 max-sm:my-5 mt-8'>
        <button onClick={showSubm} className="hambuger w-full my-2 flex justify-between items-center">
            <span className="text-2xl font-bold uppercase text-Secondary-color " >
                Submission
            </span>
            
            <div className="text-Secondary-color">

                <i className={` ${subm === 'hidden' ? 'block' : 'hidden'} fa fa-angle-right text-2xl `}></i>

                <i className={` ${subm === 'hidden' ? 'hidden' : 'block'} fa fa-angle-down text-2xl `}></i>
            </div>

        </button>

        <div className={`${subm} `}>
            <table className=" table-auto w-full mt-10">
        <thead>
          <tr>
            <th className="border border-[#d5d5d5] rounded-2xl p-3">Student Name</th>
            <th className="border border-[#d5d5d5] rounded-2xl p-3">Answers</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="border border-[#d5d5d5] rounded-2xl p-3">Nishant Badlani</td>
            <td className="border border-[#d5d5d5] rounded-2xl p-3">
                Tailwind CSS is a highly customizable, 
                low-level CSS framework that gives you all 
                of the building blocks. Tailwind CSS is a highly customizable, 
                low-level CSS framework that gives you all 
                of the building blocks.Tailwind CSS is a highly customizable, 
                low-level CSS framework that gives you all 
                of the building blocks. Tailwind CSS is a highly customizable, 
                low-level CSS framework that gives you all 
                of the building blocks.
            </td> </tr> */}
            {sb.map((ad) => ( 
                  <>
                    <SingleSubmission key={ad._id} ad={ad}/>
                  </>
                ))}
         
          
        </tbody>
        </table>
            </div>

    </div>
</div>

{/* Statastics */}

<div className='sm:w-[25%] w-full shadow-md rounded-2xl bg-white px-14 max-sm:px-5 py-14 max-sm:py-5 flex flex-col items-stretch h-fit md:sticky top-[120px]'>
    <span className="text-2xl font-bold uppercase text-center mb-12 text-Secondary-color max-md:hidden" >
        statistics
    </span>

    <button onClick={showStat} className="hambuger w-full flex justify-between items-center md:hidden my-2">
        <span className="text-2xl font-bold uppercase text-Secondary-color " >
            statistics
        </span>
        <div className="text-Secondary-color">

            <i className={` ${stat === 'hidden' ? 'block' : 'hidden'} fa fa-angle-right text-2xl `}></i>

            <i className={` ${stat === 'hidden' ? 'hidden' : 'block'} fa fa-angle-down text-2xl `}></i>
        </div>
    </button>

    <div className={` ${stat} mt-8  md:flex flex-col`}>
        <ul  >

            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-database w-5'></i>
                <span className='font-bold text-Secondary-color'> Marks:</span> {data.Assignment_Marks}
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-calendar  w-5'></i>
                <span className='font-bold text-Secondary-color'> Creation Date:</span> {data.date.toString().slice(0,10)}
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-calendar-check-o  w-5'></i>
                <span className='font-bold text-Secondary-color'> Submission Date:</span> {data.Submission_Date.toString().slice(0,10)}
            </li>
            {/* <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-users  w-5'></i>
                <span className='font-bold text-Secondary-color'> Submitted:</span> 15 Students
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-users  w-5'></i>
                <span className='font-bold text-Secondary-color'> Pending:</span> 25 Students
        
        </li>
        {<DateChange />} */}
            
        </ul>
    </div>
</div>
</section></>
  )
}
