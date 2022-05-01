import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { NoticeSmall } from "../../routes/NoticeSmall";
import AssignmentSmall2 from "../../routes/Quiz/AssignmentSmall2";

function HomeStudent() {

  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  useEffect(() => {
    const getData1 = async () =>
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
      setData(json.assignment);
      console.log(json.assignment);
      console.log(data);
      //getData1();
    }

    getData1();

    const getData2 = async  () =>
    {
      const response2 = await fetch(`${process.env.REACT_APP_URL_LOCAL}/api/Notice/Fetch`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
        })
      });
      const json2 = await response2.json();
      console.log(json2);
      setData1(json2.notice)
      console.log(data1);
    }
    getData2();
    return () => {
    }
  }, [])
  


  return (
    <>
      <section className=" px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        {/* <div className="sm:w-1/2 max-sm:mb-10">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 sm:mr-6">
            
          </div>
        </div> */}

        <div className=" w-full">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 ">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Latest Notices
            </h1>
            <div className="">
            <div className="list mt-5 h-[125px] overflow-hidden flex flex-col-reverse">
              <ul className="m-2">
              {data1.reverse().map((ad) => ( 
                  <>
                    <NoticeSmall key={ad._id} ad={ad}/>
                  </>
                ))}
              </ul>
              
            </div>
            <NavLink
                to={"/Notice"}
                className="hover:text-Primary-color transition ease-in-out duration-400">

                <button className=" text-Primary-color transition ease-in-out duration-400 px-7 py-4 h-auto w-auto  cursor-pointer font-semibold mr-3">

                  See More
                </button>
              </NavLink>
              {/* <NavLink
                to={""}
                className="hover:text-Primary-color transition ease-in-out duration-400 "
              >
               
                <button className="border-2 border-Primary-color  bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-7 py-4 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold shadow-[#f36730] mr-3">
                  
                  Create Now
                </button>
              </NavLink> */}
            </div>
          </div>
        </div>
      </section>
      <section className=" px-8 max-sm:px-5 py-8  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        <div className="sm:w-1/2 max-sm:mb-10">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 mb-4 sm:mr-6">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Assignments
            </h1>
            <div className="list mt-[-25px] h-[80px] overflow-hidden">
              <ul className="m-2 pb-3">
              {data.reverse().map((ad) => ( 
                  <>
                    <AssignmentSmall2 key={ad.Assignment_Id} ad={ad}/>
                  </>
                ))}
              </ul>
              
            </div>
            <NavLink
                to={"/AssignmentSt"}
                className="hover:text-Primary-color transition ease-in-out duration-400"
              >
                {" "}
                <button className=" text-Primary-color transition ease-in-out duration-400 px-7 py-4 h-auto w-auto  cursor-pointer font-semibold mr-3">
                  {" "}
                  See More{" "}
                </button>
              </NavLink>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 sm:ml-6">
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2 leading-normal">
              Quiz
            </h1>
            <div className="list mt-5 ">
              <ul className="m-2">
                <li className="my-6">
                  <NavLink
                    to={"/Quizz"}
                    className="hover:text-Primary-color transition ease-in-out duration-400"
                  >
                    
                    <h3>1. Quiz 1 - iLearn </h3>
                  </NavLink>
                  <div className="meta text-gray-500 sm:pl-4 max-sm:pt-2 flex flex-wrap ">
                    <p>Class: TY-BSCIT</p>
                    <p>Created On: 07-03-2022</p>
                    <p>Marks: 15</p>
                  </div>
                </li>
              </ul>
              <NavLink
                to={""}
                className="hover:text-Primary-color transition ease-in-out duration-400"
              >
                
                <button className=" text-Primary-color transition ease-in-out duration-400 px-7 py-4 h-auto w-auto  cursor-pointer font-semibold mr-3">
                 
                  See More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default HomeStudent;
