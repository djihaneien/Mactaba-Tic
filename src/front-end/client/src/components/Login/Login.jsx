import React,{useState} from "react";
import './Login.css';
import { Link } from "react-router-dom";
import welcomeimg from"./welcomeback.svg";
import logo from "./logo.png";


const Login=() =>{
  
  const [emailval,setemailval]= useState("");
  const [passval,setpassval]= useState("");
  const handlesubmit= (event)=>{
    event.preventDefault();
  }
    return(
        <div className="main-login">
          
      <div className="login-contain">
      <div className="left-side">
                          <div className="img-class">
                              <img src={logo} id="img-id" alt="" />
                          </div>
                          <div className="Title">
                         
                        <h3>Sign In to continue to our application</h3>
                          </div>
                      
                    
                        <form onSubmit={{handlesubmit}} >
                        <label htmlFor="emil1">Email</label>
                            <input placeholder="Enter your email..." type="email" value={emailval} 
                            onChange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
                        <label htmlFor="pwd1">Password</label>
                            <input placeholder="Enter password" type="password"value={passval} onChange={(e)=>{setpassval(e.target.value)}}
                             id="pwd1" />
                            <Link className='link' to='/'>Forgot Password?</Link>
                    
                            <button type="submit" id="sub_butt"> <Link to="/Comptes">Login</Link> </button>
                         </form>
                        

                 </div>
                  <div className="right-side">
                    <div className="welcomeNote">
                        <h3></h3>
                    </div>
                    <div className="welcomeImg">
                        <img src={welcomeimg} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                         


                  </div>
      </div>
  
        
    )
}
export default Login;