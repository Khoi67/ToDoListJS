import { Component } from "react";
import "./header.css";

// stateful component
class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Header</h1>
        <p>This is a header</p>
      </header>
    );
  }
}

export default Header;
// export const a = 10;
// export const b = 20;

// this , scope: block function global, lexical, dynamic
// arrow function ,cách khai báo function, this


