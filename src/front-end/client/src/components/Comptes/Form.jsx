import React from 'react';
import './Form.css';
import Sidebar from '../Addouvrage/sidebar/Sidebar';
import  '../Addouvrage/sidebar/sidebar.css';
import Topbar from '../Addouvrage/topbar/Topbar';
import '../Addouvrage/topbar/topbar.css';
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Axios from "axios";
import io from "socket.io-client";


const Register=() =>{
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPass] = useState("");
    const [date, setDate] = useState("");
    const [niveau, setNiveau] = useState("");
    const [rfid, setRfid] = useState("");
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    
    const socket = io("http://localhost:8001", {transports: ['websocket']});
    socket.on('connect', ()=>console.log("hmdlh ya rabi"))
   // socket.on('connect_error', ()=>{
      //setTimeout(()=>socket.connect(),5000)
   // })

   socket.on('data', (dataa)=>{    
               setRfid(dataa)
            }, []);
          });
          const togglePopup = () => {
            Axios.get("http://localhost:8092/readerRFID",{
              Rfid: nom
          }).then(response => {
            console.log(response)
              ///setNom(response.data);
            });
             
          }



 
 
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
          setUserList([...userList,{
              Nom: nom,
             Prenom: prenom,
             email: email,
             password: Password,
             birthday: date,
             Niveau: niveau,
              Rfid:rfid
            },
          ]);
          
        })
    }

    Axios.get("http://localhost:8092/readers").then((response) => {
      setUserList(response.data);
     
      console.log(userList)
    });

    const deleteUser = (uid) => {
      Axios.delete(`http://localhost:8092/readers/delete/${uid}`).then((response) => {
        setUserList(
          userList.filter((val) => {
            return val.id != uid;
          })
        );
      });
    };

        return(
          <div>
               <Topbar/>
              <div className='container'>
              <Sidebar />
              <div className='grid-container'>
            <h2>Veuillez remplir le formulaire:</h2>

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
                    <label htmlFor="password">Password</label>
                    <input type="password"  onChange={(event) => {
            setPass(event.target.value);
          }}/>
 <label htmlFor="rfid">RFid</label>
                    <input type="text" value= {rfid} />
                
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
                
                <div className="Right">
            <hr></hr>
            <h2>Table des Lecteurs:</h2>
            <div className="search1">
        
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div class="input-group">
            <input 
             type="search" 
             placeholder="what are you searching for?"
             aria-describedby="button-addon1" 
             class="form-control border-0 bg-light"
             />
               <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <table>
            <thead>
                <tr className="ligne">
                    <th>Nom</th>
                    <th>Prenom</th>
                    
                    <th>Email</th>
                    <th>Niveau</th>
                    <th>Date de naissance</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {userList.map(function(val, key)  {
           return (
                <tr className="ligne">
                    <td>{val.Nom}</td>
                    <td>{val.Prenom}</td>
                    <td>{val.Niveau}</td>
                    <td>{val.email}</td>
                    <td>{val.birthday}</td>
                                    
          
                    <td> 
                      <td><button id="button-addon1" type="submit" class="btn btn-link text-primary">
                  <i class="fa fa-edit"></i>
                </button></td>
                 <td><button id="button-addon1" type="submit" class="btn btn-link text-primary" onClick={() => {
                    deleteUser(val.id);
                  }}>
                  <i class="fa fa-trash"></i>
                </button></td>
                 </td>
                </tr>
                )
              })}
            </tbody>
        </table>
        </div>
                
                </div>
                </div>
            </div> 
        )
    
}
export default Register;