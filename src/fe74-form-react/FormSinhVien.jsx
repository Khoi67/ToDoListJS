import React, { Component } from "react";
import { connect } from "react-redux";
class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    valid: false

  };

  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value, pattern} = tagInput;

    let errorMessages = '';
    // console.log(tagInput);
    let regex = RegExp(pattern)

    if(value.trim() === ''){
      errorMessages = '(*) Không được bỏ trống'
    }else if(name === 'email' || name === 'soDienThoai'){
      if(regex.test(value)){
        errorMessages = '';
      }else{
        errorMessages = '(*) Không đúng định dạng, vui lòng nhập lại'
      }
    }

    let values = {...this.state.values, [name]: value}
    let errors = {...this.state.errors, [name]: errorMessages}
    this.setState(
      {
        values: values,
        errors: errors
      },
      () => {
        // console.log(this.state);
        this.checkValid();
      }
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  } 

  checkValid = () => {
    let valid = true
    for(let key in this.state.errors){
      if(this.state.errors[key] !== '' || this.state.values[key] === '')
        valid = false
    }
    this.setState({
      ...this.state,
      valid:valid,
    })
  }
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã Sinh viên</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">
                    {this.state.errors.maSV}
                  </p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">
                    {this.state.errors.hoTen}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    pattern="^[0-9]+$"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">
                    {this.state.errors.soDienThoai}
                  </p>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">
                    {this.state.errors.email}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {this.state.valid ? <button className="btn btn-success" type="submit" >Thêm sinh viên</button> : <button className="btn btn-success" type="submit" disabled>Thêm sinh viên</button> }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SV",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
