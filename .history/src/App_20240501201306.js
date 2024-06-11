import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  window.onload = function() {
    const sections = document.querySelectorAll("section");
    const navA = document.querySelectorAll(".content-navbar .nav-links li a");
    function updateActiveSection() {
      let maxVisibleArea = 0;
      let activeSection = null;
  
      sections.forEach((section) => {
        const visibleArea = getVisibleArea(section);
  
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSection = section.getAttribute("id");
        }
      });
      navA.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(activeSection)) {
          a.classList.add("active");
        }
      });
    }
  
    function getVisibleArea(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      return visibleHeight * visibleWidth;
    }
  
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
  };
  return (
    <>
      <div className=" container">
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
