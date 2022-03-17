import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Assignment extends React.Component {
  state = {
    title: "",
    description: "",
    marks: "",
    subdate: "",
    attachment: ""
  };

  setValue = (fieldName) => (evt) =>
    this.setState({ [fieldName]: evt.target.value });

  render() {

    const { title, description, marks, subdate, attachment } = this.state;

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Registration Submit Clicked");
      const response = await fetch("http://localhost:5000/api/Assignment/Create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Uid": "abscewr",
          "Title": title,
          "Role": "admin",
          "UserName": "Gaurav4yadavy3590",
          // "Password":password
        })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        console.log("Registered");
        //TODO redirect to logged in main page
      }
      else {
        console.log('Cannot Register: ' + json.error);
        //TODO show respective error
      }
    }
    return (
      <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        <div className='sm:w-3/5 max-sm:mb-10'>

          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 mb-4 sm:max-w-[95%]">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal" >
              Assignments
            </h1>
            <hr className='mb-14 -mt-5' />

            <div className='list mt-5 '>
              <ul className='m-2'>
                <li className='my-6'>
                  <NavLink to={"/AssignmentDetails"} className="hover:text-Primary-color transition ease-in-out duration-400"> <h3>1. Assignment One - Lorem ipsum sit... </h3></NavLink>
                  <div className='meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap'>
                    <p>Class: TY-BSCIT</p>
                    <p>Created On: 07-03-2022</p>
                    <p>End Date: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
                <hr />
                <li className='my-6'>
                  <NavLink to={""} className="hover:text-Primary-color transition ease-in-out duration-400"> <h3>2. Assignment Two - Lorem ipsum sit... </h3></NavLink>
                  <div className='meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap '>
                    <p>Class: TY-BSCIT</p>
                    <p>Created On: 07-03-2022</p>
                    <p>End Date: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
                <hr />
                <li className='my-6'>
                  <NavLink to={""} className="hover:text-Primary-color transition ease-in-out duration-400"> <h3>3. Assignment Three - Lorem ipsum sit... </h3></NavLink>
                  <div className='meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap '>
                    <p>Class: TY-BSCIT</p>
                    <p>Created On: 07-03-2022</p>
                    <p>End Date: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
                <hr />
                <li className='my-6'>
                  <NavLink to={""} className="hover:text-Primary-color transition ease-in-out duration-400"> <h3>4. Assignment Four - Lorem ipsum sit... </h3></NavLink>
                  <div className='meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap '>
                    <p>Class: TY-BSCIT</p>
                    <p>Created On: 07-03-2022</p>
                    <p>End Date: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className='sm:w-2/5 w-full'>
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7">
            <form onSubmit={handleSubmit} autoComplete="on">
              <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2" >
                Create New Assignment
              </h1>

              <div className="m-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title">
                  Title
                </label>
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  type="text"
                  id="title"
                  onChange={this.setValue("title")}
                  value={title}
                  placeholder="Assignment Title" required />
              </div>

              <div className="m-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="content"
                >
                  Description
                </label>
                <textarea
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="description"
                  onChange={this.setValue("description")}
                  value={description}
                  type="text" placeholder="description" rows={8}
                />
              </div>

              <div className="m-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="marks">
                  Marks
                </label>
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  type="number"
                  id="marks"
                  onChange={this.setValue("marks")}
                  value={marks}
                  placeholder="Marks" required />
              </div>

              <div className="m-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Sub Date">
                  Submission Date
                </label>
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="subdate"
                  onChange={this.setValue("subdate")}
                  value={subdate}
                  type="date" placeholder="Submission Date" rows={8}
                />
              </div>

              <div className="m-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Address">
                  Attach Documents
                </label>
                <label className="py-2 px-4 flex items-center bg-white rounded-lg tracking-wide border border-gray-300 cursor-pointer">
                  <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
               
                  <div className='flex w-full justify-between'>
                  <span className="ml-2 text-base leading-normal">Select files</span>
                  <input type='file' className='cursor-pointer'
                    onChange={this.setValue("attachment")}
                    value={attachment} multiple />
                    </div>
                </label>
              </div>
              <div className="m-4">
                <button
                  className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-3 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold"
                  id="submit"
                  type="submit"
                >
                  Create
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>
    );
  }
}

export default Assignment;
