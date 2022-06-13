import React from 'react';
import './Form.css';
import { useState } from "react";
import Axios from "axios";
import {io} from 'socket.io-client'
const Register=() =>{
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPass] = useState("");
    const [date, setDate] = useState("");
    const [niveau, setNiveau] = useState("");
    const [rfid, setRfid] = useState("");
  

  
  React.useEffect(()=>{
    const socket = io.connect('http://localhost:5000')
    //socket.on('connect', ()=>console.log("fvgrfg"))
   // socket.on('connect_error', ()=>{
      //setTimeout(()=>socket.connect(),5000)
   // })
   socket.on('data',function(data) {
    console.log(data)
               setRfid(data)
})

 
 },[])
    const AddReader = () => {
        Axios.post("http://localhost:8092/reader", {
          Nom: nom,
          Prenom: prenom,
          email: email,
          password: Password,
          birthday: date,
          Niveau: niveau,
          Rfid:rfid
        }).then(() => {
          alert("user created")
        })
      }

        return(
            <div className='Form'>
               
                <form >
                    <div className='container'>
                        <div className='row'>
                <label >Nom</label>
                    <input className='h col-lg-4' type="texte" onChange={(event) => {
            setNom(event.target.value);
          }}/>
                <label >Prenom</label>
                    <input className='h col-lg-4' type="text" onChange={(event) => {
            setPrenom(event.target.value);
          }}/>
                <label >Date de Naissance</label>
                    <input className='h col-lg-11' type="Date"  onChange={(event) => {
            setDate(event.target.value);
          }}/>
                    </div>
                    </div>
                <label htmlFor="email">Email</label>
                    <input type="text"  onChange={(event) => {
            setEmail(event.target.value);
          }}/>
                    <label htmlFor="email">Password</label>
                    <input type="text"  onChange={(event) => {
            setPass(event.target.value);
          }}/>

                  <div className="App">
                        ffff  {rfid}
                             </div>
                <label>Niveau</label>
                    <select  onChange={(event) => {
            setNiveau(event.target.value);
          }}>
                        <option value="Master">Master</option>
                        <option value="Licence">Licence</option>
                        <option  value="Doctorat">Doctorat</option>
                        
                    </select>
                   
                <button  id="sub_butt" onClick={AddReader}>Ajouter</button>
                </form>
                </div>
            
        )
    
}
export default Register;