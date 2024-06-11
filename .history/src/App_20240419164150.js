import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className='content'>
    <Navbar />
    <Header />
    <Projects />
    <Experience />
    </div>
  );
}

export default App;
