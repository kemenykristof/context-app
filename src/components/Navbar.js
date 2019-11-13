import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLight, light, dark } = context;

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
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
