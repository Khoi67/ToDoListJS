import React, { createContext, useState } from 'react'

export const Context = createContext({})
const UseContext = ({children, ...props}) => {

    const [state, setState] = useState({
        age: 30,
        name: 'Khoi',

    })
  return <Context.Provider value={{...state, setState}}>{children} </Context.Provider>
}

export default UseContext