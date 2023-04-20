import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";

class TableSinhVien extends Component {
  renderSinhVien = () => {
    let { mangSinhVien, keyword } = this.props;

    mangSinhVien = mangSinhVien.filter((sinhVien) => {
      return sinhVien.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    
    return mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaSinhVien(index);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    // console.log(this.props.mangSinhVien);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã Sinh viên</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
    keyword: state.QuanLySinhVienReducer.keywordSinhVien,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaSinhVien: (index) => {
      const action = {
        type: "XOA_SV",
        index,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien);
