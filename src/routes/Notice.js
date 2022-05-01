import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NoticeSmall } from "./NoticeSmall";


export class Notice extends Component {
  state={
    data:[]
  };

  componentDidMount=async()=>
  {
    const response = await fetch("http://localhost:5000/api/Notice/Fetch", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
      });
      const json = await response.json();
      console.log(json);
      this.setState({
        data:json.notice
      })
      console.log(this.state.data);
  }
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
                {this.state.data.reverse().map((ad) => ( 
                  <>
                    <NoticeSmall key={ad._id} ad={ad}/>
                  </>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Notice;
