import React, { Component } from 'react'
class Assignment extends React.Component {
  state = {
    title: "",
    description: ""
  };

  setValue = (fieldName) => (evt) =>
    this.setState({ [fieldName]: evt.target.value });

  render() {

    const { title, description } = this.state;

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Registration Submit Clicked");
      const response = await fetch("http://localhost:5000/api/Admin/Register", {
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
      <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in">
        <form className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-2xl" onSubmit={handleSubmit} autoComplete="on">
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

          {/* <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Address">
              Attach Documents
            </label>
            <input className="w-full py-2 px-4  font-normal bg-white bg-clip-padding border border-gray-300 rounded-lg " type="file" id="formFileMultiple" multiple />
          </div> */}

          <div class="m-4">
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Address">
              Attach Documents
            </label>
              <label class="py-2 px-4 flex items-center bg-white rounded-lg tracking-wide border border-gray-300 cursor-pointer ">
                  <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span class="ml-2 text-base leading-normal">Select files</span>
                  <input type='file' class="hidden" multiple />
              </label>
          </div>

        </form>
      </section>
    );
  }
}

export default Assignment;
