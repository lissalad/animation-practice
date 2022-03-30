import { React, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

function Fish() {
  const koiRef = useRef();
  const [toggle, setToggle] = useState("pause");
  const timeline = gsap.timeline({ repeat: -1 });

  function togglePlaying() {
    //   setToggle("pause");
    // if (timeline.paused()) {
    // } else {
    //   setToggle("play");
    // }
    timeline.paused(!timeline.paused()); // sets paused state to inverse of current paused state.
  }

  function koiSwim() {
    gsap.set(".box", { scaleX: 0.3, scaleY: 0.3 });

    timeline
      .to(koiRef.current, {
        duration: 2,
        y: "-=100",
        x: "+=100",
        rotation: "+=180",
      })
      .to(koiRef.current, {
        duration: 2,
        y: "+=100",
        x: "-=100",
        rotation: "+=180",
      });
  }

  useEffect(() => {
    koiSwim();
  });

  return (
    <div className="h-fit relative">
      <img
        src="/images/fish.png"
        height="20"
        alt="pink koi fish"
        className="box absolute"
        ref={koiRef}
      />
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

export default Fish;
