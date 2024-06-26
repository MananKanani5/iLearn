import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Question = (props) => {
  const {title,info,url}=props.data;
  const [expanded, setExpanded] = useState(false);
  const handleClick = (uri) =>
  {
    //setExpanded(!expanded)
    props.changeUri(uri);
    console.log("Url log at Ques: "+uri);
  }
  return (
    <article className="question">
      <header className="flex">
        <button className="btn mr-4" onClick={() => setExpanded(!expanded)}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
        <h4
          onClick={handleClick(url)}
          className="question-title font-medium cursor-pointer hover:text-Primary-color transition ease-in-out duration-400 m-2"
        >
          {title}
        </h4>
      </header>
      {expanded && <p className="mb-5 text-justify">{info}</p>}
    </article>
  );
};

export default Question;
