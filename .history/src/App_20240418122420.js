import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Proyects from './components/Proyects';

function App() {
  return (
    <div className='content'>
    <Navbar />
    <Header />
    <Proyects />
    </div>
  );
}

export default App;
