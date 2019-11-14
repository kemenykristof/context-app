import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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
};

export default BookList;
