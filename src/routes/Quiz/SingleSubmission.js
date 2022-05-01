import React,{useState,useEffect} from 'react'

const SingleSubmission = (props) => {

 const ad=props.ad;
   

  return (
    <> <tr>
    <td className="border border-[#d5d5d5] rounded-2xl p-3">{ad.Student_Name}</td>
            <td className="border border-[#d5d5d5] rounded-2xl p-3">
                {ad.Assignment_Response}
            </td> </tr>
            </>
  )
}

export default SingleSubmission