import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
  }
  handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); //không load lại trang
    this.props.onSubmitUser(this.state);
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if (nextProps && nextProps.editedUser) {
      this.setState({
        ...nextProps.editedUser,
        // id: nextProps.editedUser.id,
        // fullname: nextProps.editedUser.fullname,
        // username: nextProps.editedUser.username,
        // email: nextProps.editedUser.email,
        // phoneNumber: nextProps.editedUser.phoneNumber,
        // type: nextProps.editedUser.type,
      });
    }
  }
  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.editedUser ? "EDIT USER" : "ADD_USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnchange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={this.handleOnchange}
                    value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnchange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnchange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnchange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitUser: (user) => {
      const action = {
        type: "SUBMIT_USER",
        payload: user,
      };
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    editedUser: state.userReducer.editedUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
