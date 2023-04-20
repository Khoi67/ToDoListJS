import axios from "axios";
import React, { useEffect, useState } from "react";
import http, { TokenCyberSoft } from "../constant/api";
import { movieServices } from "../services/movieServices";

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const [movieList, setMovieList] = useState([]);

  //Thay thế LifeCycle componentDidMount và componentDidUpdate
  //useEffect luon luon chạy ít nhất 1 lần

  //TH1: Luôn chạy mỗi khi component re-render
  useEffect(() => {
    console.log("useEffect");
  });

  //TH2: Chạy 1 lần sau khi re-render
  //Thay thế LifeCycle phần componentDidMount
  useEffect(() => {
    console.log("useEffect TH2");
  }, []);

  //TH3: Giá trị trong dependencies thay đổi thì useEffect mới chạy
  //Thay thế LifeCycle phần componentDidUpdate
  useEffect(() => {
    console.log("TH3");
  }, [number]); //dependencies

  //TH4: Code trong return chạy khi component bị hủy
  //Thay thế cho componentWillUnmount
  useEffect(() => {
    console.log("TH4");
    return () => {
      clearInterval();
      clearTimeout();
    };
  }, []);

  useEffect(() => {
    // getMovieList();

    //IIFE
    ;(async () => {
      try {
        // const res = await axios.get(
        //   "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13",
        //   {
        //     headers: {
        //       TokenCyberSoft: TokenCyberSoft,
        //     },
        //   }
        // );
        const res = await movieServices.getMovieList('?maNhom=GP13')

        // console.log('res', res);
        setMovieList(res.data.content);
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  // const getMovieList = async () => {
    
  // };
  console.log(movieList);
  return (
    <div className="container mt-5">
      <hr />
      <h2>UseEffect</h2>
      <h5>Number: {number}</h5>
      <div>
        <button
          className="btn btn-warning mr-3"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
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

      <div>
        {
          (()=>{
            const test = 'Test'

            return <div> {test} </div>
          })()
        }
      </div>

      <div className="mt-5">
        <div className="row">
          {movieList.map((item) => {
            return (
              <div className="col-3" key={item.maPhim}>
                <div className="card">
                  <img src={item.hinhAnh} alt={item.tenPhim}></img>
                  <div className="card-body">
                    <h3>{item.tenPhim}</h3>
                    <button className="btn btn-success mt-3">Xem chi tiết</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
