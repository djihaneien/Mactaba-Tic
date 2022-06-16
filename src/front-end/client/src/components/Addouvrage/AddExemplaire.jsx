import React, { useState }  from 'react';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import Leschamps from './leschamps/Leschamps';
import "./addouvrages.css";


export default function AddExemplaire() {
    const [popupp,setPopup]= useState(false);
    const toggleePopup = () => {
        setPopup(!popupp)
    }
  return (
    
    <div className="Exemplaire">
 
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="inside">
        <Leschamps/>
        {popupp && (
<div className="popupp">
  <div onClick={toggleePopup} className="overlayy"></div>
  <span className="popup-contentt"  >
    <label className="labelll">Scanner une carte pour ajouter un exemplaire</label>
    <label >RFID:</label>
    <span>12345678</span>
    <div className="actionss">
    <button className='closee-popup' onClick={toggleePopup}>annuler</button>
    <button className='nextt-popup'>confirmer</button>
    </div>
  </span>
</div> )}
        <div className="buttons">
        <button onClick={toggleePopup}>Ajouter des exemplaires</button>
        <button >Modifier la notice </button>
        </div>
        </div>

      </div>

     
        
    </div>
  )
}