import React,{useState,useEffect} from "react";
import './Login.css';
import { Link,useNavigate } from "react-router-dom";
import welcomeimg from"./welcomeback.svg";
import logo from "./logo.png";
import axios from "axios";


const Login=() =>{
  
  //const [emailval,setemailval]= useState("");
  //const [passval,setpassval]= useState("");
  const navigate = useNavigate();
  //const connect = () => {
   // axios.post("http://localhost:8092/connect",{
    
<<<<<<< HEAD
    email: emailval,
    password: passval
    
    }).then(res=>{
       // setLoginUser(res.data.user)
        navigate("/Ouvrages",{replace:true});
      })
=======
    //email: emailval,
    //password: passval
    //}).then(res=>{
       // setLoginUser(res.data.user)
      // navigate('/Ouvrages');
      //})
>>>>>>> ff1c2ee05626776561de22545a1347dd8ef69bf2
     
  //}
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const connect = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8092/connect";
			const { data: res } = await axios.post(url, data);
      console.log(res);
			//localStorage.setItem("token", res.data);
			navigate("/Ouvrages");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

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
                      
                    
                          <form>
                            <label htmlFor="emil1">Email</label>
                            <input placeholder="Enter your email..." type="email" name="email" value={data.email} 
                            onChange={handleChange} id="emil1"/>
                            <label htmlFor="pwd1">Password</label>
                            <input placeholder="Enter password" name="password" type="password"value={data.password} onChange={handleChange}
                             id="pwd1" />
                            <Link className='link' to={"/Comptes"} >Forgot Password?</Link>
                            {error && <div>{error}</div>}
                    
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