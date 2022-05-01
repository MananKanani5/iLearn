import React,{useState} from 'react'

function NoticeCreate() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const setDefaultState=()=>
  {
    setTitle("");
    setDesc("");
  }
  const handleDescChange = (e) =>
  {
    setDesc(e.target.value);
  }
  const handleTitleChange = (e) =>
  {
    setTitle(e.target.value);
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/Notice/Create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "an":localStorage.getItem('name'),
          "title":title,
          'content':desc
        })
        /*
         Author_Name:req.body.an,
            Notice_Title:req.body.title,
            Notice_Content:req.body.content,
            Notice_Id:nid,
        */
      });
      const json = await response.json();
      console.log(json);
      if(json.created)
      {
        alert("Notice Created");
        // window.location = '/some/url';
        setDefaultState();
      }
  }
  return (
    <>
        <div className=" px-8 py-12  bg-[#fff7f2]">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
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
                value={title}
                onChange={handleTitleChange}
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
                Description
              </label>
              <textarea
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="description"
                type="text"
                placeholder="Enter Description"
                name="Description"
                value={desc}
                onChange={handleDescChange}
                autoComplete="Description"
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