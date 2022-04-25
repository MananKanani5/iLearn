import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {/* {expanded ? <FontAwesomeIcon icon="coffee" /> : <FontAwesomeIcon icon="coffee" />} */}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default Question
