import React, { Component } from 'react'
import AssignmentSmall2 from './Quiz/AssignmentSmall2';

export class AssignmentSt extends Component {
    state = {
        data:[]
      };

      componentDidMount = async () =>
  {
    const response = await fetch(`${process.env.REACT_APP_URL_LOCAL}/api/Assignment/Fetch`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
        })
      });
      const json = await response.json();
      console.log(json);
      this.setState({
        data:json.assignment
      })
      console.log(this.state.data);
  }
  render() {
   
    return (
      <>
       <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        <div className="w-full max-sm:mb-10">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 mb-4 ">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Assignments
            </h1>
            <hr className="mb-14 -mt-5" />

            <div className="list mt-5 ">
              <ul className="m-2">
                {this.state.data.map((ad) => ( 
                  <>
                    <AssignmentSmall2 key={ad.Assignment_Id} ad={ad}/>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </section>
      </>
    )
  }
}

export default AssignmentSt