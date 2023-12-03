import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { setRef } from '@mui/material';
import axios from 'axios'


export const Register=(props)  => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });
    const[error,setError]=useState("");

    const navigate = useNavigate();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const url='http://localhost:8000/api/users/';
            const{data:result}=await axios.post(url,data);
            console.log(result.message);
            // navigate("/Login");
        } catch(error){
            setError("TYPE4 F LOGIN ERROR :-"+error);
        }  
    };
      
    return(
        <>
        <Navbar1/>
        <div className='App'>
        <div className='lr'>
            <h2>Register</h2>
        <form className='register'onSubmit={handleSubmit}>
            <label  style={{fontWeight:'bold', fontSize:'15px'}} htmlFor='name'>Full name</label> 
            <input  value={data.fullName}onChange={handleChange} type='text' name='fullName' id='' placeholder='full name' required/>
            <label style={{fontWeight:'bold', fontSize:'15px'}} htmlFor='email'>Email</label>
            <input  value={data.email} onChange={handleChange}type="email" placeholder='yoursemail@gmail.com' id='' name='email' required/>
            <label style={{fontWeight:'bold', fontSize:'15px'}} htmlFor='password'>Password</label>
            <input   value={data.password} onChange={handleChange} type='password' placeholder='enter yor password' id='' name='password'required/>
        
        {error && <div>{error}</div>}
        <button onClick ={() =>{
            navigate("/Login");
            // props.onFormSwitch("");
            // navigate("/Welcome");
        }}
        
        type='submit'>Register</button>
        
        </form>
        
        <button className='link-btn' onClick={() => navigate('/login')}>Already have an account? Login here.</button>
       
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
}
export default Register;