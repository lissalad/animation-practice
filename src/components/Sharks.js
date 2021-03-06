import { React, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

function Sharks() {
  const hammerheadRef = useRef();
  const chompRef = useRef();
  const [toggle, setToggle] = useState("pause");
  const timeline = gsap.timeline({ repeat: -1 });
  let playing = true;

  function togglePlaying() {
    //   setToggle("pause");
    // if (timeline.paused()) {
    // } else {
    //   setToggle("play");
    // }
    timeline.paused(!timeline.paused()); // sets paused state to inverse of current paused state.
  }

  function hammerheadSwim() {
    timeline.fromTo(
      hammerheadRef.current,
      { x: -600, scaleX: 0.3, scaleY: 0.3 },
      {
        x: 20,
        duration: 2,
        ease: "slow(0.7, 0.7, false)",
      }
    );
  }

  useEffect(() => {
    hammerheadSwim();
  });

  return (
    <div className="h-fit relative">
      <img
        src="/images/hammerhead.png"
        height="20"
        alt="hammerhead shark"
        className="box absolute"
        ref={hammerheadRef}
      />
      <button
        className="bg-sky-300 p-3 rounded m-2 hover:bg-sky-400 w-24"
        onClick={togglePlaying}
        // value={toggle}
      >
        {toggle}
      </button>
    </div>
  );
}

export default Sharks;
