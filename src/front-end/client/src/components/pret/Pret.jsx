import React, { useState } from "react";
import './pret.css';


const pret =() =>{
    const [popup,setPopup]= useState(false);
    const togglePopup = () => {
        setPopup(!popup)
    }
    const [nextpopup,setNextPopup]= useState(false);
    const toggleNextPopup = () => {
        setNextPopup(!nextpopup);
    
    }
    const [finalpopup,setFinalPopup]= useState(false);
    const toggleFinalPopup = () => {
        setFinalPopup(!finalpopup);
      
    }
    return(
<div className="conent">

<img src="./pret.png" id='pret-id' alt=""  />
<div className="ch">
    
<span onClick={togglePopup} className="choix" id="ch1">
    <h2>Preter un livre</h2>
</span>
<span className="choix" id="ch2">
    <h2>Remettre un livre</h2>
</span>
<span className="choix" id="ch3">
    <h4>demander prolangement</h4>
</span>
{popup && (
<div className="popup">
  <div onClick={togglePopup} className="overlay"></div>
  <span className="popup-content"  >
    <h2>Cher Ourrad Imane</h2>
    <h2>veuillez scanner votre carte</h2>
    <div className="actions">
    <button className='close-popup' onClick={togglePopup}>close</button>
    <button className='next-popup' onClick={toggleNextPopup}>next</button>
    </div>
  </span>
</div> )}
{nextpopup && (
<div className="nextpopup">

  <span className="popup-content"  >
    <h2>veuillez scanner le livre</h2>
    <div className="actions">
    <button className='close-popup' onClick={toggleNextPopup}>close</button>
    <button className='next-popup' onClick={toggleFinalPopup}>confirmer</button>
    </div>
  </span>
</div> )}
{finalpopup && (
<div className="finalpopup">
<div onClick={toggleFinalPopup} className="overlay"></div>
  <span className="popup-content"  >
    <h2>Félicitation! le livre est à votre disposition</h2>


  </span>
</div> )}
</div>

           
        


</div>
    )
}
export default pret;