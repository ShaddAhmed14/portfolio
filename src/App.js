import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AboutMe />
      <Projects />
      <Languages />
      <Footer />
    </>
    
  );
}

export default App;
