import React from 'react'
import './Question.css'

export const Question = ({setScore,score, andTest, question, category, setNumber, number, setAnswer}) => {
  return (
    <div className='question'>
      {number !== andTest ? (
        <>
          <div className="question__title">Category: {category}</div>
          <div className="question__number">Question №{number + 1}/10</div>
          <div className="question__name" dangerouslySetInnerHTML={{__html: question}}></div>
          <div className="question__btn">
            <button onClick={() => {
              setNumber(number + 1)
              setAnswer(false)
            }}>FALSE</button>
            <button onClick={() => {
              setNumber(number + 1)
              setAnswer(true)
            }}>TRUE</button>
          </div>
        </>
      ):(
        <>
          <div>Your score: {score}</div>
          <button onClick={() => {
            setNumber(0)
            setScore(0)
          }}>Reset</button>
        </>
      )}
    </div>
  )
}
