import './App.css';
import Footer from './Footer';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Work from './components/Work';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/> 
      <Experience/>
      <Tech/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
