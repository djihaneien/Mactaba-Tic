import React from 'react'
import "./leschamps.css"
import { useState } from "react";
import Axios from "axios";
import io from 'socket.io-client'

const imageUpload=(event)=>{
   console.log(event.target.file)
}
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
   const [rfid, setRfid] = useState("");
 
   React.useEffect(()=>{
    const socket = io('http://localhost:5000')
   socket.on('data',function(data) {
    console.log(data)
               setRfid(data)
})
 },[])


   const AddBook= () => {
        const formData = new FormData()
        formData.append('image',image)
  
      Axios.post("http://localhost:8090/addBook",  {
        isbn10:isbn10,
        isbn13:isbn13,
        title:title,
        subtitle: subtitle,
        description : description,
        publisher: publisher,
        publishedDate: publishedDate,
        author:author,
        language :language,
        pages:pages,
        image:image,
        category:category,
        rfid:rfid
      },formData).then(() => {
        alert("book created")
        console.log('book cree')
      })
    }

 
  return (
    <div className="leschamps">
        <div className="firstline">
           <label>ISBN10</label>
           <input placeholder="ISBN here " type="text" id="input"  onChange={(event) => {
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
          <label htmlFor="Rfid">Rfid</label>
                    <input value={rfid}/>
           <label>Langue</label>
           <select  onChange={(event) => {
            setLanguage(event.target.value);
          }}>
             <option>Français</option>
             <option>anglais</option>
             <option>arabe</option>
           </select>
        </div> 
        <div className="secondline">
           <label>Auteur</label>
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
           <input  src ={image} type="file" id="img" name="img" accept="image/*"  onChange={(event) => {
            setImage(event.target.files[0]);
          }} />
        </div>
        <button  id="sub_butt" onClick={AddBook}>Ajouter Ouverage </button>
    </div>
    
  )
}
export default  Leschamps;