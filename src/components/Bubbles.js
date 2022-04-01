import { React, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

function Bubbles() {
  // const bubbleRef = useRef();
  const timeline = gsap.timeline({ repeat: -1 });
  const bubs = useRef();
  const b = gsap.utils.selector(bubs);
  let floatX = 0;
  let floatY = 0;

  function float() {
    const movements = [200, 50, 140, 130, 100, 80];
    floatX = movements[Math.floor(Math.random() * movements.length)];
    floatY = movements[Math.floor(Math.random() * movements.length)];

    timeline.to(bubs.current, {
      x: +floatX,
      y: +floatY,
      duration: 1,
      ease: 0,
    });
  }

  function move() {
    timeline.fromTo(
      bubs.current,
      { x: 100, y: 100 },
      {
        x: "+=floatX",
        y: "+=floatY",
        duration: 2,
        ease: "fast(0.7, 0.7, true)",
      }
    );
  }

  useEffect(() => {
    for (let i = 0; i < 20; i += 1) {
      float();
    }
  });

  return (
    <div
      ref={bubs}
      className="rounded-full bg-rose-300/90 h-[50px] w-[50px] box"
    ></div>
  );
}

export default Bubbles;
