import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Sharks() {
  const hammerheadRef = useRef();
  const chompRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    // chomp
    timeline.set(chompRef.current, {
      x: -100,
      scaleX: 0.01,
      scaleY: 0.01,
      opacity: 0,
    });
    // hammerhead
    timeline.set(hammerheadRef.current, {
      x: -600,
      scaleX: 0.3,
      scaleY: 0.3,
      yoyo: true,
    });
    timeline.to(hammerheadRef.current, {
      x: 800,
      duration: 4,
    });

    timeline.to(chompRef.current, {
      scaleX: 0.9,
      scaleY: 0.9,
      duration: 4,
      opacity: 1,
      delay: -4,
    });
    timeline.to(chompRef.current, {
      opacity: 0,
    });
    // timeline
    //   .from(hammerheadRef.current, { duration: 1, x: -100 })

    //   //then tween element's y to 50
    //   .to(hammerheadRef.current, { duration: 1, y: 50 })

    //   //then set element's opacity to 0.5 immediately
    //   .set(hammerheadRef.current, { opacity: 0 });
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
      <img
        src="/images/chomp.png"
        height="20"
        alt="shark takes a chomp"
        className="box"
        ref={chompRef}
      />
    </div>
  );
}

export default Sharks;
