import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Sharks from "./components/Sharks";
import "./input.css";

// const { useEffect, useRef } = React;

function App() {
  return (
    <div className="App bg-slate-300">
      <Sharks />
    </div>
  );
}

export default App;
