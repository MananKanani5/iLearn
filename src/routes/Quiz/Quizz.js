import React, { Component } from 'react'
import Quiz from 'react-quiz-component';
import { quizData } from './quizData';

export class Quizz extends Component {
  render() {
    const setQuizResult = (obj) => {
      console.log(obj);
      console.log("Hello")
    }
    return (
      <div className=' bg-[#fff7f2] text-center flex justify-center '>
        <div className='p-16 bg-white m-10 rounded-2xl shadow-md'>
          <Quiz quiz={quizData} onComplete={setQuizResult} showDefaultResult={false} />
        </div>
      </div>
    )
  }
}

export default Quizz