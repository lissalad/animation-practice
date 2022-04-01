import { React, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Bars from "./Bars";

function Grid() {
  // const barRef = useRef();
  const timeline = gsap.timeline({ repeat: -1 });

  const bars = useRef();
  const q = gsap.utils.selector(bars);

  function dominoes() {
    // gsap.set(".box", { x: 0, y: 0 });
    timeline.to(q(".box"), {
      duration: 1,
      rotation: "+=180",
      stagger: 0.3,
    });
  }

  function unison() {
    timeline.to(q(".box"), {
      duration: 1,
      rotation: "+=180",
    });
  }

  function zoom() {}

  useEffect(() => {
    unison();
  });

  return (
    <div ref={bars} className=" flex justify-center items-center flex-row ">
      <Bars />

      {/* <button
      className="bg-sky-300 p-3 rounded m-2 hover:bg-sky-400 w-24"
      onClick={togglePlaying}
      // value={toggle}
    >
      {toggle}
    </button> */}
    </div>
  );
}
export default Grid;
