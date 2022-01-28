import React,{useEffect, useState} from 'react'
import {Question} from './Question/Question'
import {request} from './request'
import {Select} from './Select/Select'
import {Modal} from './Modal/Modal'
import './App.css'

export const App = () => {
  const [question, setQuestion] = useState(null)
  const [number, setNumber] = useState(0)
  const [answer, setAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [andGame, setAndGame] = useState(false)
  const [id, setId] = useState('9')
  const [current, setCurrent] = useState('9')
  const [error, setError] = useState(false)

  async function getInfo () {
    let list = await request(id)
    setScore(0)
    setNumber(0)
    setAndGame(false)
    if(list.results.length < 10) {
      setError(true)
      return
    }
    setQuestion(list.results)
  }

  useEffect(() => {
    if(question === null) {
      getInfo()
    }
    if(id !== current) {
      getInfo()
      setCurrent(id)
    }
    if(number >= 10) {
      setAndGame(true)
    }
    if(question !== null && number !== 10) {
      if(answer.toString() === (question[number].correct_answer).toLowerCase()) {
        setScore(score => score + 1)
      }
    }
  },[number, answer, question, id])

  return (
    <div className='app'>
      {error ? (
        <Modal setError={setError}/>
      ):(
        null
      )}
      <Select setId={setId}/>
      {question !== null && number !== 10 ? (
        <Question 
          question={question[number].question}
          category={question[number].category}
          number={number}
          setNumber={setNumber}
          answer={question[number].correct_answer}
          setAnswer={setAnswer}
          andTest={question.length}
          score={score}
          setScore={setScore}
          setAndGame={setAndGame}
        />
      ):(
        null
      )}
      {question === null ? (
        <div>Loading...</div>
      ):(
        null
      )}
      {andGame ? (
        <h1 className='app__score'>Your score {score}</h1>
      ):(
        null
      )}
      {number >= 10 ?(
        <button className='app__btn' onClick={() => {
          setNumber(0)
          setAndGame(false)
          setScore(0)
        }}>Reset</button>
      ):(
        null
      )}
    </div>
  )
}
