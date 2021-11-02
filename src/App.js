
import './App.css';
import Nav from './Components/nav/Nav';
import {Route } from "react-router-dom";
import Cards from './Components/cards/Cards';
import About from './Components/about/About';
import Card from './Components/cards/Card'
// import Contact from './Components/contct/Contact';
// import Home from './Components/home/Home';

function App() {
  return (
    <div className="App">
     <Nav />
     <Route exact path="/Cards" component={Cards}/>
     <Route exact path="/Card/:id" component={Card}/>
     <Route exact path="/about" component={About}/>
     {/* <Route exact path="/contct" component={Contact}/> */}

    </div>
  );
}

export default App;
