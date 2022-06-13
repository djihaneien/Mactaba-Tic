import React,{useState,useEffect} from "react";
import './Login.css';
import { Link,useNavigate } from "react-router-dom";
import welcomeimg from"./welcomeback.svg";
import logo from "./logo.png";
import axios from "axios";


const Login=() =>{
  
  const [emailval,setemailval]= useState("");
  const [passval,setpassval]= useState("");
  const navigate = useNavigate();
  
  
 

  const connect = () => {
    axios.post("http://localhost:8092/connect",{
    
    email: emailval,
    password: passval
    }).then(res=>{
       // setLoginUser(res.data.user)
        navigate("/Ouvrages");
      })
     
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
                      
                    
                          <form >
                            <label htmlFor="emil1">Email</label>
                            <input placeholder="Enter your email..." type="email" name="email" value={emailval} 
                            onChange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
                            <label htmlFor="pwd1">Password</label>
                            <input placeholder="Enter password" name="password" type="password"value={passval} onChange={(e)=>{setpassval(e.target.value)}}
                             id="pwd1" />
                            <Link className='link' to={"/Comptes"} >Forgot Password?</Link>
                    
                            <button type="submit" id="sub_butt" onClick={connect}> Login</button>
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