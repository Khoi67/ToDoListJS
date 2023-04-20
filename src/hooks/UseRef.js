import React, { useRef, useState } from "react";
import UseRefChild from "./UseRefChild";

const UseRef = () => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState(1)

  const object = {
    current: 10
  }
  console.log("🚀 ~ file: UseRef.js:10 ~ UseRef ~ object:", object.current)

  const objectRef = useRef(10)
  console.log("🚀 ~ file: UseRef.js:13 ~ UseRef ~ objectRef:", objectRef.current)

  const getValueFromChildRef = useRef(2001)

  return (
    <div className="container">
      <hr />
      <h2>UseRef</h2>
      <div>
        <input ref={inputRef} type="text" className="form-control mb-1" />
        <button
          className="btn btn-info"
          onClick={() => {
            console.log(inputRef.current.value);
          }}
        >
          Get value from Input
        </button>
        <button className="btn btn-danger" onClick={() => {
            setNumber(number + 1)
            object.current = 100
            objectRef.current = 100 
        }}>
            Change value
        </button>
      </div>

      <UseRefChild ref={getValueFromChildRef} />
      <button className="btn btn-primary" onClick={()=>{
        console.log(getValueFromChildRef.current);
      }}>Get Value From Child</button>
    </div>
  );
};

export default UseRef;
