import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseRefChild = (props, ref) => {
    const [like, setLike] = useState(10);
    console.log('ref: ',ref);
    useImperativeHandle(ref, () => {
        return like;
    })
  return (
    <div className='container'>
        <hr />
        <h2>UseRefChild</h2>
        <button className='btn btn-succes' onClick={()=>{setLike(like+1)}}>Like</button>
    </div>
  )
}

export default forwardRef(UseRefChild)