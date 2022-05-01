import React, { Component } from "react";
import { useState,useEffect } from "react";
import AssignmentSubmit from "./Quiz/AssignmentSubmit";

function AssignmentStu() {
  

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
      console.log(data)
      return () => {
      }
    }, [])

  return (
    // Student View
    <>
      {data.map((ad) => ( 
                  <>
                    <AssignmentSubmit key={ad._id} data={ad}/>
                  </>
                ))}
      <section></section>
    </>
  );
}

export default AssignmentStu;
