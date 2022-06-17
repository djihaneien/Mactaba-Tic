import React from 'react'
import "./lesouvrages.css" 
import Axios from "axios";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";





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
        <Link className='link' to={"/Comptes"} >
            <span className="ouvragesTitle">{val.title}</span></Link>
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
