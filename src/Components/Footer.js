import React from 'react';
import iLearn_white from '../img/iLearn_white.png';
import "../App.css"

function Footer() {
  return (
    <>
        <div className="bg-Secondary-color text-white bottom-0 w-full  ">
            <div className='flex justify-between pt-6 pb-6 items-center pl-5 pr-5 flex-wrap max-sm:justify-center'>
              <div className='text-center m-2'>
                <p> © 2022 Copyright Learners College. </p>
              </div>
              <div className="logo  flex items-center flex-wrap max-sm:justify-center ">
                <span className='max-sm:mb-3'>Designed and Developed by </span>
                <img src={iLearn_white} alt="" className='w-32 ml-4 max-sm:m-2 ' />
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer