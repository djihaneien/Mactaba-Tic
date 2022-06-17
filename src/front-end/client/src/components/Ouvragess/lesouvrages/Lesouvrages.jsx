import React from 'react'
import "./lesouvrages.css" 
import Axios from "axios";
import { useState } from "react";





export default function Lesouvrages() {
  const [bookList, setbookList] = useState([]);
 
    Axios.get("http://localhost:8090/books").then((response) => {
      setbookList(response.data);
      console.log(bookList)
    });
  
  return(
    

  <div>
  {bookList.map(function(val, key)  {
  return (
    <div className="lesouvrages">
        <div className="ouvrages">
            <span className="ouvragesTitle">{val.title}</span>
            <div className="Image">
            <img className="image" />
             </div>
  
      </div>
        </div>
    
  )
  })}
     </div>
  
);
}
