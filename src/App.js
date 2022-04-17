import { React } from "react";
import Cure from "./components/cure/Cure";
// import { gsap } from "gsap";
// import Sharks from "./components/Sharks";
// import Fish from "./components/fish";
// import Bubbles from "./components/Bubbles";
// import Bars from "./components/Grid";
import Target from "./components/target/Target";
import Wave from "./components/wave/Wave";

import "./input.css";

// const { useEffect, useRef } = React;

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      {/* <Sharks /> */}
      {/* <Fish /> */}
      {/* <Bars /> */}
      {/* <Bubbles /> */}
      <Cure />
      {/* <Target /> */}
      {/* <Wave /> */}
    </div>
  );
}

export default App;
