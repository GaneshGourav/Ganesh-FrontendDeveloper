
import './App.css';
import { Event } from './Components/Event';
import { Faq } from './Components/Faq';
import { Footer } from './Components/Footer';
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
   <Faq/>
   <Footer/>
   
    </div>
  );
}

export default App;
