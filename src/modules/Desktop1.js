import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import Image from "../component/Image";
import "../styles/desktop1.css";
function Desktop_1() {
  return (
    <div className="desktop-1">
      <Navbar></Navbar>
      <div className="page-1">
        <Intro></Intro>
        <Image></Image>
      </div>
    </div>
  );
}
export default Desktop_1;
