import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

class ChairList extends Component {
  render() {
    // console.log(this.props);
    const { chairList } = this.props;
    return (
      <div
        className="d-flex flex-column align-items-center mt-4"
        style={{ gap: "20px" }}
      >
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex align-items-center">
              <div style={{ width: "40px" }}>{item.hang}</div>
              <div className="d-flex" style={{ gap: "20px" }}>
                {item.danhSachGhe.map((chair) => {
                  return <Chair chair={chair} key={chair.soGhe} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    chairList: state.movieBookingReducer.chairList,
  };
};
export default connect(mapStateToProps, null)(ChairList);
