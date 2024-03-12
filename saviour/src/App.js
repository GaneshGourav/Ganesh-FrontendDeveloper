
import './App.css';
import { Event } from './Components/Event';
import { Introduction } from './Components/Intoduction';
import { Navbar } from './Components/Top';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Introduction/>
   <Event/>
    </div>
  );
}

export default App;
