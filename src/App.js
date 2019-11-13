import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
