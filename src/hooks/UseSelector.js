import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const UseSelector = () => {
    const movieBooking = useSelector((state) => state.movieBookingReducer)
    console.log("🚀 ~ file: UseSelector.js:6 ~ UseSelector ~ movieBooking:", movieBooking)
    
  return (
    <div className='container'>
        <h2>UseSelector</h2>
        <hr />
    </div>
  )
}

export default UseSelector