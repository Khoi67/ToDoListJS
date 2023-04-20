//rafce && rfce

import React , { useState } from 'react'

const UseState = () => {
    //destructuring 
    const [number, setNumber] = useState(1);
    // console.log("state:", state)
  return (
    <div className='container'>
        <h1>UseState</h1>
        <h5>
        Number: {number}
        </h5>
        <div>
            <button className='btn btn-warning mr-3' onClick={()=>{
                setNumber(number + 1)
            }}>+</button>
            <button className='btn btn-danger'onClick={()=>{
                setNumber(number - 1)
            }}>-</button>
        </div>
    </div>
  )
}

export default UseState