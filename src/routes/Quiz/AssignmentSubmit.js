import React,{useState} from 'react'

function AssignmentSubmit(props) {
    const data=props.data;
    const [stat, setStat] = useState("hidden");
  const showStat = () => {
    stat === "hidden" ? setStat("block") : setStat("hidden");
  };

  const [assignmentinfo, setAssignmentinfo] = useState("hidden");
  const showAssignmentinfo = () => {
    assignmentinfo === "block"
      ? setAssignmentinfo("hidden")
      : setAssignmentinfo("block");
  };

  const [subm, setSubm] = useState("hidden");
  const showSubm = () => {
    subm === "block" ? setSubm("hidden") : setSubm("block");
  };

  const [desc, setDesc] = useState("");
  const onDescChange=(e)=>{
    setDesc(e.target.value);
    document.getElementById('desc').classList.remove('mystyle');
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(desc=="")
    {
      document.getElementById('desc').classList.add('mystyle');
    }
    else{
      const response = await fetch(`${process.env.REACT_APP_URL_LOCAL}/api/Assignment/Submit`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'ai':localStorage.getItem('aid'),
          'si':localStorage.getItem('Uid'),
          'sn':localStorage.getItem('name'),
          'rs':desc
        })
      });
      /*
       Assignment_Id: req.body.ai,
            Student_Id: req.body.si,
            Student_Name: req.body.sn,
            Teacher_Marks: null
      */
      const json = await response.json();
      console.log(json);
      if(json.submit)
      {
        console.log("Assignment Submitted");
        alert("Assignment Submitted");
      }
      else{console.log('Error in Submission')}
    }
  }
  return (
    <>
    <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap max-sm:flex-col-reverse">
        <div className="sm:w-[73%] w-full shadow-md rounded-2xl bg-white px-14 max-sm:px-5 py-14 max-sm:my-5 ">
          {/* Assignment Information */}

          <div>
            <button
              onClick={showAssignmentinfo}
              className="hambuger w-full flex justify-between items-center my-2"
            >
              <span className="text-2xl font-bold uppercase text-Secondary-color">
                Assignment Info
              </span>
              <div className="text-Secondary-color">
                <i
                  className={` ${
                    assignmentinfo === "block" ? "hidden" : "block"
                  } fa fa-angle-right text-2xl `}
                ></i>

                <i
                  className={` ${
                    assignmentinfo === "block" ? "block" : "hidden"
                  } fa fa-angle-down text-2xl `}
                ></i>
              </div>
            </button>
            <h1 className="text-xl font-semibold mb-14 pt-10 leading-normal text-Secondary-color max-sm:text-lg">
              {data.Assignment_Title} 
            </h1>
            <div className={`${assignmentinfo}`}>
              <hr className="mb-12 mt-7" />
              <h3 className="mb-3 text-Secondary-color">Description: </h3>
              <p className="Description text-justify mb-10">
              {data.Assignment_Content} 
              </p>
            </div>
          </div>

          <hr className="mt-10 -mb-10" />

          <div className=" pt-14 max-sm:my-5 mt-8">
            <span className="text-2xl font-bold uppercase text-Secondary-color ">
              Submission
            </span>

            <form>
              <textarea
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 mt-4 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="desc"
                value={desc}
                onChange={onDescChange}
                type="text"
                placeholder="Enter Your Answer Here"
                rows={6}
                required
              />
            </form>
          </div>
        </div>

        {/* Statastics */}

        <div className="sm:w-[25%] w-full shadow-md rounded-2xl bg-white px-14 max-sm:px-5 py-14 max-sm:py-5 flex flex-col items-stretch h-fit md:sticky top-[120px]">
          <span className="text-2xl font-bold uppercase text-center mb-12 text-Secondary-color max-md:hidden">
            statistics
          </span>

          <button
            onClick={showStat}
            className="hambuger w-full flex justify-between items-center md:hidden my-2">
            <span className="text-2xl font-bold uppercase text-Secondary-color ">
              statistics
            </span>
            <div className="text-Secondary-color">
              <i
                className={` ${
                  stat === "hidden" ? "block" : "hidden"
                } fa fa-angle-right text-2xl `}
              ></i>

              <i
                className={` ${
                  stat === "hidden" ? "hidden" : "block"
                } fa fa-angle-down text-2xl `}
              ></i>
            </div>
          </button>

          <div className={` ${stat} mt-8  md:flex flex-col`}>
            <ul>
              
              <li className="mb-8">
                <i className="text-Secondary-color mr-2 fa fa-database w-5"></i>
                <span className="font-bold text-Secondary-color">
                  {" "}
                  Marks:
                </span>{" "}
                {data.Assignment_Marks}
              </li>
              <li className="mb-8">
                <i className="text-Secondary-color mr-2 fa fa-calendar  w-5"></i>
                <span className="font-bold text-Secondary-color">
                  {" "}
                  Creation Date:
                </span>{" "}
                {data.date.toString().slice(0,10)}
              </li>
              <li className="mb-8">
                <i className="text-Secondary-color mr-2 fa fa-calendar-check-o  w-5"></i>
                <span className="font-bold text-Secondary-color">
                  {" "}
                  Submission Date:
                </span>{" "}
                {data.Submission_Date.toString().slice(0,10)}
              </li>
              <li className="mb-8">
                <button
                  className="border-2 border-Primary-color  bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-2xl text-white font-semibold shadow-lg my-7"
                  type="button" onClick={handleSubmit}
                >
                  {" "}
                  Submit{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section></>
  )
}

export default AssignmentSubmit