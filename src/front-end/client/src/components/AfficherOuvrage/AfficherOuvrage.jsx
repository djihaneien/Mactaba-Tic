import React from 'react'
import "./AfficherOuvrage.css"
import { useState } from "react";
import Axios from "axios";
import { Link,useNavigate, useParams } from "react-router-dom";
import io from 'socket.io-client';

/*const imageUpload=(event)=>{
   console.log(event.target.file)
}*/
const Leschamps=()=> {
   const [isbn10, setIsbn10] = useState("");
   const [isbn13, setIsbn13] = useState("");
   const [title, setTitle] = useState("");
   const [subtitle, setSubTitle] = useState("");
   const [description, setDescription] = useState("");
   const [publisher, setPublisher] = useState("");     
   const [publishedDate, setPublishedDate] = useState("");
   const [author, setAuthor] = useState("");  
   const [language, setLanguage] = useState("");
   const [pages, setPages] = useState("");
   const [image, setImage] = useState("");
   const [category, setCategory] = useState("");
   const [popup,setPopup]= useState(false);
   const [popupp,setPopupp]= useState(false);
   const [rfid, setRfid] = useState("");
   const [id, setId] = useState("");
   const [bookList, setbookList] = useState([]);

   const [error, setError] = useState("");
  
   React.useEffect(()=>{
    const socket = io('http://localhost:8001')
   socket.on('data',function(data) {
    console.log(data)
               setRfid(data)
})
 },[])
   const togglePopup = () => {
    setPopupp(!popupp)
}
  

 const navigate = useNavigate();
 /**   const AddBook= async(e) => {
       e.preventDefault();
      
       setPopup(!popup)
       
        const formData = new FormData()
        formData.append('image',image)
        formData.append('isbn10',isbn10)  
         Axios.post("http://localhost:8090/addBook",{
        
          isbn10:isbn10,
          isbn13: isbn13,
          title: title,
          subtitle:subtitle, 
          description:description, 
          publisher: publisher,
          publishedDate: publishedDate,
          author: author,
          language:language,
          pages:pages,
          category:category,
        }).then(() => {
          Axios.post("http://localhost:8090/idbook",  {
        isbn10:isbn10
      }).then((res)=>{
       setId(res.data)
       alert("id found")
      })
alert('book added')
      })
      
      
    }*/
    
    const AddExemp=()=>{
    
   Axios.post("http://localhost:8090/addCopyBook",  {
        rfid:rfid,
        book:id,
      }).then(()=>{
        alert('exm created')
        })
  
   }
let {titre} =useParams();
  
   Axios.get(`http://localhost:8090/books/${titre}`).then((response) => {
    setbookList(response.data);
    console.log(response.data)
  });
  return(
    

    <div>
    {bookList.map(function(val, key)  {


  return (
    <div className="leschamps">
    
    {popup && (
<div className="popup">
  <div  className="overlay"></div>
  <span className="popup-content"  >
    
    <label>l'ouvrage est bien enregistr?? veuillez ajouter un exemplaire</label>
    <div className="actions">
    <button className='close-popup' >close</button>
    <button className='next-popup' onClick={togglePopup} >next</button>
    </div>
  </span>
</div> )}
        {popupp && (
<div className="popupp">
  <div  className="overlayy"></div>
  <span className="popup-contentt"  >
    <label className="labelll">Scanner une carte pour ajouter un exemplaire</label>
    <label htmlFor="Rfid">Rfid</label>
                    <span>{rfid}</span> 
    <div className="actionss">
    <button className='closee-popup'>annuler</button>
    <button className='nextt-popup'onClick={AddExemp}>confirmer</button>
    </div>
  </span>
</div> )}
        <div className="firstline">
           <label>ISBN10</label>
           <input placeholder="ISBN here " type="text"value={val.isbn10} id="input"  onChange={(event) => {
            setIsbn10(event.target.value);
          }}></input>
           <label>ISBN13</label>
           <input placeholder="ISBN here " type="text" id="input"  onChange={(event) => {
            setIsbn13(event.target.value);
          }}></input>
           <label>Pages</label>
           <input placeholder="pages here " type="number" id="input"  onChange={(event) => {
            setPages(event.target.value);
          }}></input>
          
           <label>Langue</label>
           <select  onChange={(event) => {
            setLanguage(event.target.value);
          }}>
             <option>Fran??ais</option>
             <option>anglais</option>
             <option>arabe</option>
           </select>
        </div> 
        <div className="secondline">
           <label>Auteur{titre}</label>
           <input placeholder="auteur " type="text" id="input"  onChange={(event) => {
            setAuthor(event.target.value);
          }}></input>
           <label>Editeur</label>
           <input placeholder="editeur " type="text" id="input"  onChange={(event) => {
            setPublisher(event.target.value);
          }}></input>
           <label>Date</label>
           <input placeholder="date " type="date" id="input"  onChange={(event) => {
            setPublishedDate(event.target.value);
          }}></input>
           <label>Categorie</label>
           <input placeholder="categorie " type="text" id="input"  onChange={(event) => {
            setCategory(event.target.value);
          }}></input>
        </div> 
        <div className="thirdline">
           <label>Titre</label>
           <input placeholder="titre " type="text" id="input"  onChange={(event) => {
            setTitle(event.target.value);
          }}></input>
           <label>Sous titre</label>
           <input placeholder="sous titre " type="text" id="input"  onChange={(event) => {
            setSubTitle(event.target.value);
          }}></input>
        </div> 
        <div className="forthline">
           <label>Description</label>
           <input placeholder="description " type="text" id="input"  onChange={(event) => {
            setDescription(event.target.value);
          }}></input>
           <label>Choisirr une couverture</label>
           <input  type="file" id="img" name="img" accept="image/*" filename='image'  onChange={(event) => {
            setImage(event.target.files[0]);
          }} />
        </div>
        
        <button  id="sub_butt" encType="multipart/form-data">Ajouter un ouvrages</button>
        
    </div>
  )
    })}
    </div>
  )
}
export default  Leschamps;