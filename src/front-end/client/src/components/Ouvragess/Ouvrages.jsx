import React from 'react';
import Topbar from './topbarr/Topbarr';
import Sidebar from './sidebar/Sidebar';
import Lesouvrages from './lesouvrages/Lesouvrages';
import "./ouvrages.css";


export default function Ouvrages() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Lesouvrages/>

      </div>
        
    </div>
  )
}