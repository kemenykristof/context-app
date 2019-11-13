import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    console.log(this.context);
    const theme = isLight ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.font }}>
        <h1>Context App</h1>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
