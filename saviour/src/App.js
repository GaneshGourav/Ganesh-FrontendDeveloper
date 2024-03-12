
import './App.css';
import { Event } from './Components/Event';
import { Introduction } from './Components/Intoduction';
import { Roadmap } from './Components/Roadmap';
import { Tokenomics } from './Components/Tokenomics';
import { Navbar } from './Components/Top';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Introduction/>
   <Event/>
   <Tokenomics/>
   <Roadmap/>
    </div>
  );
}

export default App;
