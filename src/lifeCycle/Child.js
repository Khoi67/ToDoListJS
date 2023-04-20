import React, { Component, createRef, PureComponent } from "react";

//PureComponent chỉ so sánh được các giá trị: string, undefined, number, null, boolean
class Child extends Component {
  //Chạy khi component được khởi tạo
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };

    this.numberRef = createRef()
    
    this.interval = {}

    console.log("Constructor Child");
  }

  //Dùng để thay đổi state trước khi render
  //Có thể sử dụng để biến props thành state nội bộ của component
  static getDerivedStateFromProps(nextProps, currentState) {
    //Không sử dụng this
    console.log("getDerivedStateFromProps Child");
    currentState.number = nextProps.number;

    return currentState;
  }

  //Trả về true/false
  //True => Cho phép render lại
  //False => Không đc phép
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.number !== nextState.number) {
      return true;
    }
    return false;
  }
  render() {
    console.log('renderChild')
    return (
      <div className="p-5 bg-warning">
        Child
        <h2 ref={this.numberRef}>Number:{this.state.number}</h2>
      </div>
    );
  }

  getSnapshotBeforeUpdate(preProps, preState){

    console.log('this.numberRef', this.numberRef.current.innerHTML);
    return this.numberRef.current.innerHTML
  }
  //Chạy khi state và props thay đổi
  //Call api hoặc dispatch action
  componentDidUpdate(preProps, preState, snapShot){
    console.log('preProps',preProps);
    console.log('preState',preState);
    console.log('snapShot',snapShot);

  }
  //Dùng để call API
  componentDidMount() {
    console.log("componentDidMount Child");

    this.interval = setInterval(()=>{
      console.log("Helloooo");
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}

export default Child;
