import React from "react";
import Nav from "../Nav";
import './Home.css';
import welcome from"./home2.jpg";



const Home =() =>{
    return(
<div className="conent">
   <Nav/>
<img src={welcome} id='wel-id' alt=""  />


<h1>Welcome to Maktaba-tic</h1>
<button id="btn"><a href="/Login">Log In</a>  </button>
</div>
    )
}
export default Home;