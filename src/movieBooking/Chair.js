import clsx from "clsx";
import React, { Component } from "react";
import "./chair.css";
import { connect } from "react-redux";
import { chairBookingAction } from "./duck/action";

class Chair extends Component {
  render() {
    const { chair, chairBookingList, bookingChair } = this.props;
    return (
      <div>
        <button
          disabled={chair.daDat}
          onClick={()=>{
            bookingChair(chair)
          }}
          className={clsx("chair btn btn-success", {
            booked: chair.daDat, //NaN, null, undefined, 0, false, document.all
            booking: chairBookingList.find(item => item.soGhe === chair.soGhe)
          })}
        >
          {chair.soGhe}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    chairBookingList: state.movieBookingReducer.chairBookingList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookingChair: (payload) => {
      dispatch(chairBookingAction(payload))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
