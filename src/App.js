import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
import { scrollAnimations } from "./utils/scrollAnimations";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    scrollAnimations();
    // Limpieza del evento al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener("scroll", scrollAnimations);
    };
  }, []); 
  return (
    <>
      <div className="content" style={{ overflow: "hidden" }}>
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
