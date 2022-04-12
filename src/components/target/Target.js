import "./stylesTarget.css";

function Target() {
  return (
    <div class="container">
      <div className="circle" id="circle1" styles="--animation-order: 1;"></div>
      <div className="circle" id="circle2" styles="--animation-order: 2;"></div>
      <div className="circle" id="circle3" styles="--animation-order: 3;"></div>
      <div className="circle" id="circle4" styles="--animation-order: 3;"></div>
      <div className="circle" id="circle5" styles="--animation-order: 4;"></div>
      <div className="circle" id="circle6" styles="--animation-order: 5;"></div>
      <div className="circle" id="circle7" styles="--animation-order: 6;"></div>
    </div>
  );
}
export default Target;
