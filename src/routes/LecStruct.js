import React, {useState, useEffect} from "react";
import Accordion from "../Components/Accordion";

function LecStruct() {
//https://www.youtube.com/embed/E2t5XbWwj7I
  
  const [video, setVideo] = useState("")
  // if(localStorage.getItem('sub')=='data')
  // {
  //   setVideo("https://www.youtube.com/embed/E2t5XbWwj7I");
  // }
  // else if(localStorage.getItem('sub')=='data2')
  // {
  //   setVideo("https://www.youtube.com/embed/PoBePPh5Iko");
  // }
  // else {}
 
  useEffect(() => {
    setVideo(video)
  }, [video]);
  const changeUrl = (url) =>{
    setVideo(url);
    console.log("Url log at Lect: "+url);
  }

  return (
    <>
      <section className="px-8 max-sm:px-5 py-12  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap">
        <div className="sm:w-3/5 max-sm:mb-10">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7 mb-4 sm:max-w-[95%]">
            <div>
            <iframe
              width="100%"
              height="400"
              src={`${video}`}
              title="Main Lecture Video"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              className='rounded-2xl max-sm:h-[180px]'
            ></iframe>
            </div>
            <div>
            <h3 className='my-10 text-2xl font-bold uppercase  leading-normal'>Overview</h3>
            </div>
          </div>
        </div>

        <div className="sm:w-2/5 w-full">
          <div className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 py-7">
           {<Accordion changeUrl={changeUrl}/>}
          </div>
        </div>
      </section>
    </>
  );
}

export default LecStruct;
