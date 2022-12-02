import { useState } from "react";
import "../styles/navbar.css";
function Navbar() {
  const [navState, setNavState] = useState(true);
  return (
    <div className="navbar">
      <div className="name-logo">
        <h5>
          <span>ASAD</span>
          <br />
          ULLAH
        </h5>
      </div>
      <div className="sections">
        <a href="#education">Qualification</a>
        <a href="#experience">Experience</a>
        <a href="#awards">Awards</a>
        <a href="#r-and-p">Research & Publication</a>
      </div>
      <div className="contact-button">
        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>
      <div className="drop-down">
        <ul>
          <li>
            <div
              className="drop-down-btn"
              onClick={() => setNavState(!navState)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={navState ? "responsive-nav" : ""}>
              <li>
                <a href="#education">Qualification</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#r-and-p">Research & Publication</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
