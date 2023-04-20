import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const {image, name, price, description, quantity} = this.props.setSelectedProd;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={image} alt="" />
                    </div>
                    <div className='col-7'>
                        <h2>Name: {name}</h2>
                        <p>Price: {price}</p>
                        <p>Description: {description}</p>
                        <p>Inventory: {quantity}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;