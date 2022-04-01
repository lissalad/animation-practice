import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Sharks from "./components/Sharks";
import Fish from "./components/fish";
import Bars from "./components/Grid";
import "./input.css";

// const { useEffect, useRef } = React;

function App() {
  return (
    <div className="App ">
      {/* <Sharks /> */}
      {/* <Fish /> */}
      <Bars />
    </div>
  );
}

export default App;
