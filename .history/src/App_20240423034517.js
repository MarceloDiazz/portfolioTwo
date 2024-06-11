import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';

function App() {
  return (
    <>
    <div class="holder">  
  <div class="bar bleft"></div>
  <div class="bar btop"></div>
  <div class="bar bright"></div>
  <div class="bar bbottom"></div>
</div>

    <div className='content '>
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
