import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <Weather defaultCity="New York" />
        </h1>
        <footer>
          The project was coded by Olena Kravchenko and is open-sourced{" "}
          <a href="https://github.com/OlenaKravchenko2022">on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
