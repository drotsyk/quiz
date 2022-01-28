import React,{useEffect, useState} from 'react'
import './Select.css'
import {request2} from './request2'

export const Select = ({setId}) => {
  const [select, setSelect] = useState(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Select')

  async function getInfo () {
    let list = await request2()
    setSelect(list.trivia_categories)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className='select'>
      <h1 className='select__title'>Select test</h1>
      <button className='select__btn' onClick={() => {
        setOpen(!open)
      }}>{value}</button>
      {select !== null ? (
        <ul className={!open ? 'select__list' : 'select__list select__list--active'}>
          {select.map((item,index) => (
            <li onClick={() => {
              setOpen(false)
              setValue(item.name)
              setId(item.id)
            }} className='select__item' key={index}>{item.name}</li>
          ))}
        </ul>
      ):(
        null
      )}
    </div>
  )
}
