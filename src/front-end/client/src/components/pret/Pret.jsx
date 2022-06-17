import React, { useState ,useEffect} from "react";
import './pret.css';
import axios from "axios";
import io from "socket.io-client";


const pret =() =>{
  const [rfid, setRfid] = useState("");
  const [nom, setNom] = useState('');
  const [nomBook, setNomBook] = useState('');

  const [rfidUser, setRfidUSER] = useState("");
  const [rfidBook, setRfidBook] = useState("");
   const cur = new Date();
   cur.setDate(cur.getDate()+15)

useEffect(()=>{
  const socket = io('http://localhost:8001')
  socket.on('connect', ()=> console.log(cur.toDateString()))
 // socket.on('connect_error', ()=>{
    //setTimeout(()=>socket.connect(),5000)
 // })
 socket.on('data', (dataa)=>{    
  setRfid(dataa)
}, []);

},[]);

    const [popup,setPopup]= useState(false);
    const [nextpopup,setNextPopup]= useState(false);
    const [finalpopup,setFinalPopup]= useState(false);
   const togglePopup = () => {
     /**  axios.post("http://localhost:8092/readerRFID",{
        Rfid: rfid
    }).then(response => {
      //console.log(response.data)
      setNom(response.data);
      });**/
      
      setPopup(!popup)
    
   }
  
  
  const closePopup = () => {
    setPopup(false)
    setRfid("");
}
useEffect(()=>{
  if((rfid !=="" )&&(popup==true)){
    setRfidUSER(rfid);
    axios.post("http://localhost:8092/readerRFID",{
        Rfid: rfid
    }).then(response => {
    
      console.log(response.data)
      setNom(response.data);
      });
  
   setNextPopup(!nextpopup);
   setPopup(false);
  }
},[rfid]);

useEffect(()=>{
  if((rfid !=="" )&&(popup==false)){
    setRfidBook(rfid);
    axios.post("http://localhost:8090/bookRFID",{
        rfid: rfid
    }).then(response => {
      console.log(response.data)
      setNomBook(response.data);
      });
      axios.post("http://localhost:8093/pret",{
        rfidReader:rfidUser,
        rfidBook:rfidBook,
        dateLoan:new Date().toDateString(),
        dateReturn:cur.toDateString()
      }).then(res=>{
        
      })
      setFinalPopup(!finalpopup);
   
      //   setPopup(false);
  }
},[rfid]);
    //const toggleNextPopup = () => {
        //setNextPopup(!nextpopup);
        //setPopup(false);
    
    //}
    const toggleExitPopup = () => {
      setFinalPopup(!finalpopup);
      setNextPopup(false);
      setPopup(false);
      setRfid("");
    
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
  <div onClick={closePopup} className="overlay"></div>
  <span className="popup-content"  >
    <h2>Veuillez scanner votre carte</h2>
    <div className="actions">
    <button className='close-popup' onClick={closePopup}>close</button>
    </div>
  </span>
</div> )}
{nextpopup && (
<div className="nextpopup">
<div /**onClick={toggleNextPopup}**/ className="overlay"></div>
  <span className="popup-content"  >
  <h2>Cher {nom}</h2>
    <h2>Veuillez scanner le livre</h2>
    <div className="actions">
    </div>
  </span>
</div> )}
{finalpopup && (
<div className="finalpopup">
<div  className="overlay"></div>
  <span className="popup-content"  >
    <h2>Félicitation! le livre {nomBook} est à votre disposition</h2>
    <button className='ok-popup' onClick={toggleExitPopup}>ok</button>

  </span>
</div> )}
</div>

           
        


</div>
    )
}
export default pret;