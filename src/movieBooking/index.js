import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from "./Result";

class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="mt-2 text-center">Đặt vé xem phim</h1>
            <div className="mt-3 bg-dark text-white display-4 text-center mb-4" >Màn hình</div>
            <ChairList />
          </div>
          <div className="col-4">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default index;
