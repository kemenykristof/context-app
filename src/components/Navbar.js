import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.font }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
