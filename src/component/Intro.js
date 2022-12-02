import "../styles/intro.css";
// import Image from "./Image";/
function Intro() {
  return (
    <div className="intro">
      <div className="name">
        <p>Hi I'm</p>
        <h1>Asad Ullah</h1>
      </div>
      <div className="paragraph">
        <p>
          Associate Professor & Chairman <br />
          <br />
          Faculty member in the department of Mathematical Sciences at Karakoram
          International University since 2006, HEC Approved Supervisor and
          serving as Associate Professor and Chairman of Mathematical Sciences
          department.
        </p>
      </div>
      <div className="btns">
        <a href="#contact">
          <button className="btn1">Contact Me</button>
        </a>
        <a href="#r-and-p">
          <button className="btn2">Learn More</button>
        </a>
      </div>
    </div>
  );
}
export default Intro;
