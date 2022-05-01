import React, { Component } from 'react'
import { useState,useEffect } from "react";
import DateChange from '../Components/DateChange';
import { AssignmentOne } from './AssignmentOne';
const AssignmentDetails = () => {
    
    const [data, setData] = useState([]);
    useEffect(async() => {
        const response = await fetch(`${process.env.REACT_APP_URL_LOCAL}/api/Assignment/FetchOne`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "aid":localStorage.getItem('aid')
        })
      });
      const json = await response.json();
      console.log(json);
      setData(json.assignment)
      return () => {
      }
    }, [])
    return (
        // teachers View
    
        <>
            {data.map((ad) => ( 
                  <>
                    <AssignmentOne key={ad._id} ad={ad}/>
                  </>
                ))}
            <section>
           
            </section>
        </>
    )
}

export default AssignmentDetails
