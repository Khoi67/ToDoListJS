import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  handleOnchange = (event) => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (keyword) => {
      const action = {
        type: "SEARCH_USER",
        payload: keyword,
      };

      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
