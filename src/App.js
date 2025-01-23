import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-lightest min-h-screen">
      <Router>
        <Navbar/>
        {/* Sections */}
        <div id="home" className="min-h-screen flex items-center justify-center bg-white mb-16 lg:mb-22">
          <Home />
        </div>
        <div id="about" className="min-h-screen flex items-center justify-center mb-16 lg:mb-22">
          <About />
        </div>
        <div id="resume" className="min-h-screen flex items-center justify-center mb-8 lg:mb-24">
          <Resume />
        </div>
        <div id="projects" className="min-h-screen flex items-center justify-center mb-8 lg:mb-12">
          <Projects />
        </div>
        <div id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </div>
      </Router>
    </div>
  );
};

export default App;
