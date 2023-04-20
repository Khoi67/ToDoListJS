import React, { Component } from "react";

class DemoLoop extends Component {
  studentList = [
    {
      id: 1,
      name: "Hieu",
      age: 12,
    },
    {
      id: 2,
      name: "Dung",
      age: 13,
    },
    {
      id: 3,
      name: "Tai",
      age: 14,
    },
  ];
  // [{}, {}, {}] => [div, div, div]
  renderStudentList = () => {
    const studentUIs = this.studentList.map((item) => {
      return (
        <div key={item.id} className="col-4">
          <div className="card">
            <h2>Name: {item.name} </h2>
            <h2>Age: {item.age}</h2>
          </div>
        </div>
      );
    });

    return studentUIs;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderStudentList()}
          <img src="./assets/products/red-car.jpg" />
        </div>
      </div>
    );
  }
}

export default DemoLoop;
