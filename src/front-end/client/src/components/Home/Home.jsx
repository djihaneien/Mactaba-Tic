import React from "react";
import Nav from "../Nav";
import './Home.css';
import io from "socket.io-client";



const Home =() =>{

    return(
<div className="conent">
   <Nav/>
<img src="./home.png" id='wel-id' alt=""  />


<h3>Votre guide de bibliothèque le plus fiable</h3>
<button id="btn"><a href="/Login">Log In</a>  </button>

</div>
    )
}
export default Home;