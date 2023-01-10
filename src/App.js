import './App.css';
import Home from './Components/Home';
import { Contact } from './Components/Contact';
import { NavbarNew } from './Components/Navbar1';
import Projects from './Components/Projects';
import { About } from './Components/About';
import { Skills } from './Components/Skills';


function App() {
  return (
    <div className="App">
     <NavbarNew/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
