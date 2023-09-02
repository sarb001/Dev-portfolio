
import './App.css'
import { BrowserRouter } from 'react-router-dom' ;
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';


function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <div className="mainapp">
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
       </div>
    </BrowserRouter>
  )
}

export default App
