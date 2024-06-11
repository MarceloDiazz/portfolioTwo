import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="squareListLeft">
        <div>
          <div class="animated-border-box-glow"></div>
          <div class="animated-border-box"></div>
        </div>
        <div>
          <div class="animated-border-box-glow"></div>
          <div class="animated-border-box"></div>
        </div>
      </div>
      <div className="squareListRight">
        <div>
          <div class="animated-border-box-glow"></div>
          <div class="animated-border-box"></div>
        </div>
        <div>
          <div class="animated-border-box-glow"></div>
          <div class="animated-border-box"></div>
        </div>
      </div>
      <div className="content ">
        <Navbar />
        <Header />
        <Experience />
        <Projects />
        <About />
      </div>
    </>
  );
}

export default App;
