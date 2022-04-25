import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

const Accordion = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='bg-white'>
        <h3 className='mb-10 text-2xl font-bold uppercase text-center leading-normal'>Course Content</h3>
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
