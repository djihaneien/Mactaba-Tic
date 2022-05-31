import React from 'react'
import "./leschamps.css" 

export default function Leschamps() {
  return (
    <div className="leschamps">
        <div className="firstline">
           <label>ISBN10</label>
           <input placeholder="ISBN here " type="number" id="input"></input>
           <label>ISBN13</label>
           <input placeholder="ISBN here " type="number" id="input"></input>
           <label>Pages</label>
           <input placeholder="pages here " type="number" id="input"></input>
           <label>Langue</label>
           <select>
             <option>Français</option>
             <option>anglais</option>
             <option>arabe</option>
           </select>
        </div> 
        <div className="secondline">
           <label>Auteur</label>
           <input placeholder="auteur " type="text" id="input"></input>
           <label>Editeur</label>
           <input placeholder="editeur " type="text" id="input"></input>
           <label>Date</label>
           <input placeholder="date " type="date" id="input"></input>
           <label>Categorie</label>
           <input placeholder="categorie " type="text" id="input"></input>
        </div> 
        <div className="thirdline">
           <label>Titre</label>
           <input placeholder="titre " type="text" id="input"></input>
           <label>Sous titre</label>
           <input placeholder="sous titre " type="text" id="input"></input>
        </div> 
        <div className="forthline">
           <label>Description</label>
           <input placeholder="description " type="text" id="input"></input>
           <label>Choisirr une couverture</label>
           <input type="file" id="img" name="img" accept="image/*" />
        </div>
    </div>
    
  )
}