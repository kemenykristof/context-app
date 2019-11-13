import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;

          const theme = isLightTheme ? light : dark;

          return (
            <div
              className="book-list"
              style={{ color: theme.font, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>The way of kings</li>
                <li style={{ background: theme.ui }}>The name of the Wind </li>
                <li style={{ background: theme.ui }}>The final Empire</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
