import React, { Component } from "react";
import { connect } from "react-redux";
import { payChair } from "./duck/action";

class Result extends Component {
  render() {
    const { chairBookingList, payChairBooking } = this.props;
    return (
      <div className="mt-4">
        <h3>Danh sách ghế đang chọn</h3>
        <div className="mt-3">
          <div className="d-flex">
            <button className="btn btn-success chair" disabled></button>
            <p className="ml-3 mt-1">Ghế có thể đặt</p>
          </div>
          <div className="d-flex">
            <button className="btn btn-success booking chair" disabled></button>
            <p className="ml-3 mt-1">Ghế đang chọn</p>
          </div>
          <div className="d-flex">
            <button className="btn btn-success booked chair" disabled></button>
            <p className="ml-3 mt-1">Ghế đã được đặt</p>
          </div>
        </div>

        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <td>Số thứ tự</td>
                <td>Số ghế</td>
                <td>Giá tiền</td>
              </tr>
            </thead>
            <tbody>
              {chairBookingList.map((chair, index) => {
                return <tr key={chair.soGhe}>
                    <td>{index+1}</td>
                    <td>{chair.soGhe}</td>
                    <td>{chair.gia} VNĐ</td>
                </tr>;
              })}
            </tbody>
            <tfoot>
                Tổng tiền: {
                chairBookingList
                    .reduce((sum, chair) => {
                    return (sum += chair.gia);
                }, 0)
                    .toLocaleString()
                }
            </tfoot>
          </table>
          <button className="btn btn-primary" onClick={payChairBooking}>Thanh toán</button>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    chairBookingList: state.movieBookingReducer.chairBookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        payChairBooking: () => {
            dispatch(payChair())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
