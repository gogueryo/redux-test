import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="hello" />
    <h2>Start2{"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
