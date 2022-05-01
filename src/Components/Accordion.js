import React, { useState,useEffect } from 'react'
import data from './data'
import data2 from './data2'
import SingleQuestion from './Question'

const Accordion = (props) => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    if(localStorage.getItem('sub')=='data')
  {
    setQuestions(data);
  }
  else if(localStorage.getItem('sub')=='data2')
  {
    setQuestions(data2);
  }
  else {}
    
  });
  const changeUri = (url) =>
  {
    props.changeUrl(url);
  }
  return (
    <main>
      <div className='bg-white'>
        <h3 className='mb-10 text-2xl font-bold uppercase text-center leading-normal'>Course Content</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} msg={'hi'} changeUri={changeUri} data={question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Accordion
