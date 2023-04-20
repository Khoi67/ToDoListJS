import React, { Component } from "react";

class Cart extends Component {
  calcTotal() {
    let total = 0;
    this.props.data.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        x{" "}
        <div className="position-relative p-4 bg-white shadow rounded-lg w-75">
          <span
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
              position: "absolute",
              top: 5,
              right: 10,
              color: "red",
            }}
            className="border rounded-circle d-flex justify-content-center align-items-center"
            onClick={this.props.onHideCart}
          >
            X
          </span>
          <table className="table">
            <thead>
              <tr>
                <th>Index: </th>
                <th>Name: </th>
                <th>Image: </th>
                <th>Quantity: </th>
                <th>Price: </th>
                <th>Total: </th>
                <th>Action: </th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.product.name}</td>
                  <td>
                    <img
                      src={item.product.image}
                      alt=""
                      style={{
                        width: 50,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={this.props.onDecreaseQuantity}
                    >
                      -
                    </button>
                    <i className="mx-2">{item.quantity}</i>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.props.onIncreaseQuantity(this.props.data);
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>{item.product.price}</td>
                  <td>{item.product.price * item.quantity}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="7">
                  <h4 className="text-end">Total: {this.calcTotal()}</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-info" onClick={this.props.onPay}>
            Pay
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
