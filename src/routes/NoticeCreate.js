import React from 'react'

function NoticeCreate() {
  return (
    <>
        <div className=" px-8 py-12  bg-[#fff7f2]">
          <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2">
              Create Notice Here
            </h1>

            <div className="m-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Title"
              >
                Title
              </label>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="title"
                type="text"
                placeholder="Enter Title"
                name="Title"
                autoComplete="title"
                required
              />
              <p id='msg2' className="text-Primary-color float-right p-2 cursor-pointer hover:text-hover-primary">
                  
                  </p>
            </div> 
            
            <div className="m-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Discription"
              >
                Discription
              </label>
              <textarea
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="discription"
                type="text"
                placeholder="Enter Discription"
                name="Discription"
                autoComplete="Discription"
                required
              />
              <p id='msg2' className="text-Primary-color float-right p-2 cursor-pointer hover:text-hover-primary">
                  
                  </p>
            </div>
            <div className="m-4 mt-5">
              <button
                className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-3 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold mt-2"
                id="submit"
                type="submit"
              >
                Create Notice
              </button>
            </div>

            </form>
            </div>
    </>
  )
}

export default NoticeCreate