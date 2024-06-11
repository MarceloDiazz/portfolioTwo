import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="content ">
        <Navbar />
        <Header />
        <Experience />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
