import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
      <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="./logo.png" alt=""/>
        </div>
        <div className="search">
        
          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input 
               type="search" 
               placeholder="What're you searching for?"
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
        <div className="topRight">
          <Link to="/Addouvrage">
          <button type="submit" className="bttn"> Add</button>
          </Link>
          <img src="./Avatar.png" alt=""/>
        </div>
      </div>
    </div>
  )
}