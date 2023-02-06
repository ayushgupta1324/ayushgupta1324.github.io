import './App.css';
import Home from './Components/Home';
import { Contact } from './Components/Contact';
import { Navbar1 } from './Components/Navbar1';
import Projects from './Components/Projects';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Hoverfile } from './Components/hoverfile';


function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Hoverfile/>
    </div>
  );
}

export default App;
