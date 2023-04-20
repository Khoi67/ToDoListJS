import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {name, image, price} = this.props.prod;
        return (
            <div className='card p-3 mb-4'>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-info me-3' onClick={() => {
                        this.props.setSelectedProd(this.props.prod);
                    }}>Show</button>
                    <button className='btn btn-danger'
                    onClick={()=>{
                        this.props.onAddToCart(this.props.prod);
                    }}
                    >Buy</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;