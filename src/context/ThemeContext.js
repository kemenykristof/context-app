import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { font: "#555", ui: "#ddd", bg: "#eee" },
    dark: { font: "#ddd", ui: "#333", bg: "#555" }
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
