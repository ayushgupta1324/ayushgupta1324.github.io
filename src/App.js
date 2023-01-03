import './App.css';
import Aboutme from './Components/Aboutme';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>
      <Projects/>
    </div>
  );
}

export default App;
