import React, { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import'./components/Nav.css';
import Form from './components/Comptes/Form';
import Ouvrages from "./components/Ouvragess/Ouvrages";
import Addouvrages from './components/Addouvrage/Addouvrages';
import AfficherOuvrage from './components/AfficherOuvrage/AfficherOuvrage';
import Pret from './components/pret/Pret';







class App extends Component {
 
  render(){

  
  return (
    
    <BrowserRouter>
    <div className="App" id='App'>
   
  
    <Routes>
      <Route path="/" element={<Home/>}/>;
      <Route path="/About" element={<About/>}/>;
      <Route path="/Comptes" element={<Form/>}/>;
      <Route path="/Login" element={<Login/>}/>;
      <Route path="/Ouvrages" element={<Ouvrages/>}/>;
      <Route path="/Addouvrages" element={<Addouvrages/>}/>;
      <Route path="/pret" element={<Pret/>}/>;
      <Route name="Afficher"path="/AfficherOuvrage/:param1" element={<AfficherOuvrage/>}/>;
      </Routes>
    
      
    </div>
    </BrowserRouter>
  );
}
}
export default App;
