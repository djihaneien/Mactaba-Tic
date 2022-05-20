import React, { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import'./components/Nav.css';
import Form from './components/Comptes/Form';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Ouvrages from "./pages/Ouvrages";







class App extends Component {
 
  render(){

  
  return (
    <Topbar/>,
    <div className="container">
      <Sidebar/>
      <Ouvrages/>

    </div>,
    <BrowserRouter>
    <div className="App" id='App'>
    
  
    <Routes>
      <Route path="/" element={<Home/>}/>;
      <Route path="/About" element={<About/>}/>;
      <Route path="/Comptes" element={<Form/>}/>;
      <Route path="/Login" element={<Login/>}/>;
      </Routes>
    
      
    </div>
    </BrowserRouter>
  );
}
}
export default App;
