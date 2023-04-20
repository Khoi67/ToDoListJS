import React, { useMemo, useState } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);
    
    const countLike = useMemo(() => {
        const t = like + 100;
        console.log("🚀 ~ file: UseMemo.js:8 ~ UseMemo ~ countLike:", t)
        return t
    }, [like])
    // console.log("🚀 ~ file: UseMemo.js:8 ~ countLike ~ countLike:", countLike)

  return (
    <div className="container">
      <h2>UseMemo</h2>
      <div>
        <button
          className="btn btn-warning mr-3"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
        <span className="mr-3">{number}</span>
        <button
          className="btn btn-danger"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </button>
      </div>
      <div className="d-flex mt-5">
        <button
          className="btn btn-success"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Increase Like
        </button>
        <h2 className="mx-5">Like: {like}</h2>
        <button
          className="btn btn-success"
          onClick={() => {
            setLike(like - 1);
          }}
        >
          Decrease Like
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
