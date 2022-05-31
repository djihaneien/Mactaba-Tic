import React from 'react';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import Leschamps from './leschamps/Leschamps';
import "./addouvrages.css";


export default function Addouvrages() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Leschamps/>

      </div>
        
    </div>
  )
}