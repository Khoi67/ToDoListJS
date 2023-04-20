import React, { Component } from 'react';
import Child from './Child';

class LifeCycle extends Component {

    //Chạy khi component được khởi tạo
    constructor(props){
        super(props);
        this.state = {
            number: 1,
            like: 1,
            isShowChild: true,
        }
        console.log('Constructor');
    }

    //Dùng để thay đổi state trước khi render
    static getDerivedStateFromProps(nextProps, currentState){

        //Không sử dụng this
        console.log('getDerivedStateFromProps');
        // currentState.number = 10;

        return currentState;
    }

    render() {
        console.log('render')
        return (
            <div className='container p-5 bg-info'>
                LifeCycle
                <h2>Number: {this.state.number}</h2>
                <button 
                    className='btn btn-success mb-3'
                    onClick={()=>{
                    this.setState({
                        number: this.state.number + 1,
                    })
                }}>Increase Number</button>
                <button 
                    className='btn btn-success mb-3'
                    onClick={()=>{
                    this.setState({
                        like: this.state.like + 1,
                    })
                }}>Increase Like</button>
                <button 
                    className='btn btn-success mb-3'
                    onClick={()=>{
                    this.setState({
                        isShowChild: false,
                    })
                }}>Hide</button>
                {this.state.isShowChild && <Child number = {this.state.number}/>}
                
            </div>
        );
    }

    //Dùng để call API
    componentDidMount(){
        console.log('componentDidMount');
    }
}

export default LifeCycle;