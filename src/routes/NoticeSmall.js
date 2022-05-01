import React from 'react'

export const NoticeSmall = (props) => {
    var nd=props.ad;
  return (
    <>
    <li className="my-6">                    
                    <h3 className="hover:text-Primary-color transition ease-in-out duration-400 mb-5">{nd.Notice_Title}</h3>

                    <p>{nd.Notice_Content}</p> <p>{nd.date.toString().slice(0,10)}</p>
                </li>
                <hr /></>
  )
}
