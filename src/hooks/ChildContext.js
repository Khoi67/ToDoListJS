import React, { useContext } from 'react'
import { Context } from './UseContext'

const ChildContext = () => {
    const context = useContext(Context)
  return (
    <div>ChildContext</div>
  )
}

export default ChildContext