import "./App.css";
import Swi from "./component/Swi";
import Desktop_1 from "./modules/Desktop1";
import Education from "./modules/Education";
import Awards from "./component/Awards";
import Research from "./modules/Research";
import Contact from "./component/Contact";
import Footer from "./modules/Footer";
// import Experience from "./modules/Experience";
function App() {
  return (
    <div className="App">
      <Desktop_1></Desktop_1>
      <Education></Education>
      {/* <Experience></Experience> */}
      <Swi></Swi>
      <Awards></Awards>
      <Research></Research>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
