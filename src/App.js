import Navbar from './components/Navbar';
import Home from './components/Home';
import logo from './logo.svg';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import { motion, useScroll } from "framer-motion";

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
    </div>
  );
}

export default App;
