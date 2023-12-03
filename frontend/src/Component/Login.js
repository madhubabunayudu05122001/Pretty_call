import React, { useState } from "react"; //used to manage and update the state of a component oka function ni function lo pilavadaniki
import {Link, useNavigate } from "react-router-dom"; // in react router navigate perfrom actions
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Navbar1 from "./Navbar1";

export const Login = (props) => { // props used to pass data from a parent
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [data,setData] = useState({
    email:"",
    password:"",
  });
  const [error,setError]= useState("");
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) => { //it is function we can define the actions to be performed when a form is submitted
    e.preventDefault();
    // console.log(email,pass);
    // props.onFormSwitch("");
    navigate("/room");
    try{
      const url='http://localhost:8000/api/auth/';
      const {data:result}=await axios.post(url,data);
      localStorage.setItem("token",result.data)
      console.log(result.message);
      window.location='/';
    }catch(error){
      setError("TYPE0 F login ERROR:-"+error);
    }
  };
  
  // console.log(props.onFormSwitch);
 
  return (
    <>
    <Navbar1/>
    <div className="App">
      <div className="lr">
        <h2>Login</h2>
        <form className="login" onSubmit={handleSubmit}>
          <label style={{fontWeight:'bold', fontSize:'15px'}} htmlFor="email">Email</label>
          <input
            
            value={data.email}
            onChange={handleChange} // it refers to the current value of an input element to access and retrive the value
            type="text"
            placeholder="yoursemail@gmail.com"
            id=""
            name="email"
            required
          />
          <label style={{fontWeight:'bold', fontSize:'15px'}} htmlFor="password">Password</label>
          <input
            
            value={data.password}
            onChange={handleChange}
            type="pass"
            placeholder="enter your password"
            id=""
            name="password"
            required
          />
          <button
            onClick={() => {
              //   props.onFormSwitch("");
              //   navigate("/Welcome");
            }}
            type="submit"
          >
            Log In
          </button>
          <h5
          className="link-btn1"
        //   onClick={() => props.onFormSwitch("signup")}
        onClick={() =>{
            // navigate("/Register");
        }}
        >
          forgot password
        </h5>
        </form>
        
        <button
          className="link-btn"
        //   onClick={() => props.onFormSwitch("signup")}
        onClick={() =>{
            navigate("/Register");
        }}
        >
          Don't have an account? Register here.
        </button>
      </div>
      </div>
      <div className='contact '>
        <div className='Container5 '>
            <div className='row'>
                
                
                
                <h4 className='mb-0'>Get In Touch</h4>
                <div className='col pt-4 '>
                <h4> PrettyCall</h4>
                    <ul className='list-unstyled'>
                  
                    <li>This website is about for videoCalling
                      purpose and how to make and how to talk videoCalling
                      with our onces and build realations for videoCall

                    </li>
                </ul>
                </div>
                <div className='col  pt-3'>
                    <h4><GroupIcon/> Content</h4>
                    <ul className='list-unstyled'>
                    <li>RoomUs</li>
                    <li>ContactUs</li>
                    <li>AboutUs</li>
                    <li>OurTeam</li>
                    <li>Register</li>
                    <li>Login</li>
                    <li>Home</li>
                    </ul>
                </div>
                <div className='col pt-3'>
                <h4><PhoneIcon/>CONTACT</h4>
                    <ul className='list-unstyled'>
                    <li>2/92</li>
                    <li>Bhimavaram</li>
                    <li>Andhra Pradesh</li>
                    <li>534202</li>
                    <li> & for any query's</li>
                    <li>7981408321</li>
                        <li> susmithavalluri5757@gmail.com</li>
                        <li></li>
                        </ul>
                </div>
                <div className='col pt-3'>
                    <h4>PROJECT BY</h4>
                    <ul className='list-unstyled'>
                    <li> V.Susmitha</li>
                    <li> N.Santhoshi</li>
                    <li> N.Madhu babu</li>
                    <li> S.Sai kumar</li>
                    <li> P.Nithin </li>
                    </ul> 
                    
                </div>
                
                <hr/>
                
                <div className='r'>
                    <p >
                    <a className='ah' href='https://www.facebook.com/'><FacebookIcon/></a><a className='ah' href='https://www.instagram.com/'><InstagramIcon/></a><a className='ah'href='https://twitter.com/i/flow/login'><TwitterIcon/> </a>  {new Date().getFullYear()} VIDEO CALL IN | All right reserved | Any query | VIDEO CALLING APPLICATION |Terms | Privacy
                    </p>
                </div>
            </div>
    
        </div>
        
        </div>
       


      
   </> 
  );
};
export default Login;