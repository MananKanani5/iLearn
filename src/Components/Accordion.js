import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

const Accordion = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='bg-white'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Accordion
