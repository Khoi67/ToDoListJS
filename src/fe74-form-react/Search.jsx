import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {

    handleOnchange = (e) => {
        // console.log(e.target.value);
        this.props.timKiem(e.target.value);
    };

    render() {
    return (
      <input
        type="text"
        className="form-control"
        onChange={this.handleOnchange}
        placeholder="Tìm kiếm"
      />
      
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    timKiem: (keywordSinhVien) => {
      const action = {
        type: "TIM_KIEM",
        keywordSinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Search);
