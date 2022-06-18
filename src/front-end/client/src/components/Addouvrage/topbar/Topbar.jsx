import React from 'react';
import "./topbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import avatar from "./Avatar.png";

export default function Topbar() {
  return (
   <div className='container'>
      <div className="topbarr">
      <div className="topbarWrapperr">
        <div className="topLeft1">
          <img src={logo} alt=""/>
        </div>
       
        <div className="topRight1">
          
          <img src={avatar}
           alt=""/>
        </div>
      </div>
    </div>
    </div>
    
  )
}