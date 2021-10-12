import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Logo from "../src/assets/logo.svg"
import Specs from './components/navbar/specs/Specs';

function App() {
  return (
    <div className="App">
      <div className="logo">
             <img src={Logo}/>
             </div>
     <div className="background">
       <div className="main">

       </div>
     </div>
     <Navbar />

     <div className="sp"> 
       <div className="spe" >
       </div>
     <Specs />

     </div>
    <div className="half">
      <hr/>
    </div>
    </div>
  );
}

export default App;
