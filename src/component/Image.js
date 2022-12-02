// import Background from "../assets/Ellipse 2.png";
import Person from "../assets/sir.jpeg";
import "../styles/image.css";
function Image() {
  return (
    <div className="image">
      {/* <img src={Background} alt="Background" className="background"></img> */}
      <img src={Person} alt="Person" className="person"></img>
    </div>
  );
}
export default Image;
