import React from "react";
import Nav from "../Nav";
import './Home.css';
import home from "./hh.png";
import homeimage from "./homeimage.png";
import io from "socket.io-client";



const Home =() =>{

    return(
<div className="content">
   <Nav/>
<img src={home} id='wel-id' alt=""  />
<img src={homeimage} id='id2' alt=""  />

<h3>Votre guide de bibliothèque le plus fiable</h3>
<button id="btn"><a href="/Login">Log In</a>  </button>

</div>
    )
}
export default Home;