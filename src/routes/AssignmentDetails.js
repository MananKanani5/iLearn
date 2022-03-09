import React, { Component } from 'react'
import { useState } from "react";
const AssignmentDetails = () => {

    const [menu, setMenu] = useState("hidden");
  const showStat = () => {
    menu === "hidden" ? setMenu("block") : setMenu("hidden");
  };
  return (
    // teachers View
    <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap max-sm:flex-col-reverse">

    <div className='sm:w-[73%] w-full shadow-md rounded-2xl bg-white px-14 max-sm:px-10 py-14 max-sm:my-5'>
        <h1 className="text-2xl font-semibold mb-14 mt-2 leading-normal text-Secondary-color max-sm:text-lg" >
            1. Assignment One - Lorem ipsum sit amet consectetur, adipisicing elit. Dolorem corporis ducimus sequi, enim sint ipsam porro cupiditate? Animi, dolore sequi.
        </h1>
        <hr className='mb-12 -mt-5' />
        <h3 className='mb-3 text-Secondary-color'>Description: </h3>
        <p className='Description text-justify mb-10'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eius iste rem ab? Minus fugit praesentium sapiente alias sed rerum provident ipsam, sequi blanditiis culpa, ad quia eius cum ratione a voluptatem hic cumque nesciunt dicta nemo. Totam incidunt eius aut cumque ab accusantium, ipsa provident reiciendis doloremque inventore, reprehenderit consequuntur ad voluptates odit. Praesentium iste quidem eligendi sit veniam? Non minima minus perspiciatis facilis dignissimos harum voluptates quo, explicabo inventore vitae laboriosam. Sit, praesentium dolor beatae ullam unde, adipisci illum ratione ex iure ut facilis exercitationem esse ad atque nihil earum blanditiis, aliquam dignissimos quod ducimus! Ullam itaque a ea ipsa quod quo adipisci enim quis voluptatibus esse. Temporibus error quasi iste exercitationem possimus iure repellendus modi placeat totam voluptatibus vero, sunt, eligendi magni rerum doloribus, voluptatem reiciendis! Pariatur, expedita ad voluptatem distinctio quo vero aspernatur exercitationem perferendis corporis alias similique delectus dolor qui autem non doloribus ducimus nobis sint facilis incidunt odit saepe maxime numquam! Laboriosam quisquam velit voluptate ea tempora, ad, aliquam autem hic libero officia doloremque animi quaerat voluptas harum quasi tenetur impedit earum sequi vel dicta dolore assumenda repellendus! Placeat eaque doloribus dolore itaque eligendi ullam obcaecati suscipit recusandae consequuntur, harum iusto quisquam, quidem.

        </p>

        <h3 className='mb-3 text-Secondary-color'>Attachments: </h3>
        <div className='flex flex-wrap'>
            <img className='my-2' src="https://via.placeholder.com/200" alt="" />
            <img className='my-2 sm:mx-3' src="https://via.placeholder.com/200" alt="" />
        </div>
        <div className=''>

        </div>
    </div>

    <div className='sm:w-[25%] w-full shadow-md rounded-2xl bg-white px-14 max-sm:px-5 py-14 max-sm:my-5 flex flex-col items-stretch h-fit md:sticky top-[120px]'>
    <span className="text-2xl font-bold uppercase text-center mb-12 text-Secondary-color max-md:hidden" >
                statistics
            </span>
    
        <div className="hambuger flex justify-between items-center md:hidden">
        <span className="text-2xl font-bold uppercase text-Secondary-color" >
                statistics
            </span>
            <button onClick={showStat} className="">
                
                <i className={` ${menu === 'hidden' ? 'block' : 'hidden'} fa fa-solid fa-bars text-2xl `}></i>

                <i className={` ${menu === 'hidden' ? 'hidden' : 'block'} fa fa-solid fa-close text-2xl `}></i>
            </button>
        </div>


        <div className="md-options hidden md:flex flex-col">
        <ul  >
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-graduation-cap w-5'></i>
                <span className='font-bold text-Secondary-color'> Class:</span> TYBSCIT-A
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-book w-5'></i>
                <span className='font-bold text-Secondary-color'> Subject:</span> IoT
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-calendar  w-5'></i>
                <span className='font-bold text-Secondary-color'> Creation Date:</span> 07-03-2022
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-calendar  w-5'></i>
                <span className='font-bold text-Secondary-color'> Submission Date:</span> 07-03-2022
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-users  w-5'></i>
                <span className='font-bold text-Secondary-color'> Submitted:</span> 15 Students
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-users  w-5'></i>
                <span className='font-bold text-Secondary-color'> Pending:</span> 25 Students
            </li>
        </ul>
        

        <button className='border-2 border-Primary-color  bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-2xl text-white font-semibold shadow-lg my-7 '> Edit Date</button>
          </div>


        <div className='sm-options'>
        <div className={` ${menu} mt-7`}>
        <ul  >
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-graduation-cap w-5'></i>
                <span className='font-bold text-Secondary-color'> Class:</span> TYBSCIT-A
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-book w-5'></i>
                <span className='font-bold text-Secondary-color'> Subject:</span> IoT
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-calendar  w-5'></i>
                <span className='font-bold text-Secondary-color'> Creation Date:</span> 07-03-2022
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-calendar  w-5'></i>
                <span className='font-bold text-Secondary-color'> Submission Date:</span> 07-03-2022
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-users  w-5'></i>
                <span className='font-bold text-Secondary-color'> Submitted:</span> 15 Students
            </li>
            <li className='mb-8'>
                <i className='text-Secondary-color mr-2 fa fa-users  w-5'></i>
                <span className='font-bold text-Secondary-color'> Pending:</span> 25 Students
            </li>
        </ul>
        

        <button className='border-2 border-Primary-color  bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-2xl text-white font-semibold shadow-lg my-7 '> Edit Date</button>
        </div>
        </div>
    </div>
</section>
  )
}

export default AssignmentDetails