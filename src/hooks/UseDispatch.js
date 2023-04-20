import React from 'react'
import { useDispatch } from 'react-redux'
import { payChair } from './../movieBooking/duck/action'

const UseDispatch = () => {
    const dispatch = useDispatch()
  return (
    <div className='container'>
        
        <h2>UseDispatch</h2>
        <button className='btn btn-warning' onClick={()=>{
            dispatch(payChair())
        }}>Dispatch action</button>
        <hr />
        </div>
  )
}

export default UseDispatch