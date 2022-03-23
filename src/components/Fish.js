import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Fish() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: "+=360",
    });
  });

  return (
    <div className="box" ref={boxRef}>
      Hello
    </div>
  );
}

export default Fish;
