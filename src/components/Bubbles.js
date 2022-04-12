import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Bubbles() {
  // const bubbleRef = useRef();
  const timeline = gsap.timeline({});
  const bubs = useRef();
  // const b = gsap.utils.selector(bubs);
  let floatX = 40;
  let floatY = 40;

  function float() {
    timeline.set(bubs.current, { x: 0, y: 600 });

    const movementsX = [-10, 0, 30, 40, 50];
    // const movementsY = [20, 30, 40];

    for (let i = 0; i < 20; i += 1) {
      floatX = movementsX[Math.floor(Math.random() * movementsX.length)];
      // floatX = movementsY[Math.floor(Math.random() * movementsY.length)];
      let floatY = 20;
      // console.log(floatX);
      // console.log(floatY);
      let dur = (floatX + floatY) / 100;
      // for (let i = 0; i < 100; i += 1) {
      timeline.to(bubs.current, {
        y: "-=" + floatY,
        x: "+=" + floatX,
        duration: dur,
        ease: 0,
      });
      // }
    }
  }

  // function move() {
  //   timeline.to(bubs.current, {
  //     // x: "+=" + floatX,
  //     y: "+=" - floatY,
  //     duration: 2,
  //   });
  // }

  useEffect(() => {
    // float();
    // for (let i = 0; i < 200; i += 1) {
    float();
    // }
  });

  return (
    <div
      ref={bubs}
      className="rounded-full bg-rose-400/70 h-[50px] w-[50px] box"
    ></div>
  );
}

export default Bubbles;
