import React, { Component } from "react";

class DemoDatabinding extends Component {
  fullName = "Hiếu Đặng";
  age = 28;

  hello = () => {
    console.log(this);
    alert("hello world" + this.fullName);
  };

  hello2 = (message) => {
    alert(message);
  };

  state = {
    isLogin: false,
  };

  login = () => {
    this.setState({
      isLogin: true,
    });
  };

  renderNav = () => {
    if (this.state.isLogin) {
      return (
        <nav>
          <p>Hello ,Hiếu</p>
          <button>Logout</button>
        </nav>
      );
    }

    return (
      <nav>
        <button onClick={this.login}>Login</button>
        <button>Sign up</button>
      </nav>
    );
  };

  render() {
    return (
      <div>
        {this.renderNav()}

        <p>FullName: {this.fullName}</p>
        <p>Age: {this.age}</p>

        {/* hello() run khi click button */}
        <button onClick={this.hello}>Say</button>

        <button
          onClick={() => {
            this.hello2("hellooo");
          }}
        >
          Say 2
        </button>

        {/* hello() run khi load giao diện */}
        {/* <p>{ this.hello() }</p> */}
      </div>
    );
  }
}

var obj = {
  name: "hieu",
  age: 12,
  showInfo: function () {
    // this = obj vì showInfo là method của obj
    console.log(this.name + this.age);
    // bind , call ,apply

    const test2 = () => {
      console.log(this); // this = obj
    };

    test2(); //
  },
};
obj.showInfo();

// this: trỏ tới đối tượng mà function đó đang là phương thức

// scope: dynamic scope
// (nơi gọi function chạy sẽ quyết định this là gì, chứ ko phải
// nơi tạo ra function đó)

function test() {
  console.log(this);
}

test(); // this = undefined

var obj2 = {
  email: "hieu@gmail.com",
  className: "13VLH1",
  demo: test,
};

obj2.demo(); // this = obj2

// default constructor
// class Student {
//   fullName = "hieu";
//   age = 12;

//   test() {}
// }

// const student1 = new Student();
// const student2 = new Student();
// const student3 = new Student();
// // => {fullName: hieu, age: 12}

export default DemoDatabinding;
