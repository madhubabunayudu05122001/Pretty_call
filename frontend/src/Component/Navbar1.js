// import React from "react";
// import "./Navbar1.css";
// import { useState } from "react";
// import {Link} from 'react-router-dom';
// import InfoIcon from '@mui/icons-material/Info';
// import HomeIcon from '@mui/icons-material/Home';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
// function Navbar(){
//   return(
//     <>
//     <div>
    
//     </div>
    
//     <div className="sus">
//     <ul className="navbar">
//         <div className="font">
//     <h3>Videocall</h3>
//     </div>
//       <li ><Link to="/Home"><HomeIcon/>Home</Link></li>
      
//       <li><Link to="/About"><InfoIcon/>AboutUs</Link></li>
      
//       <li><Link to="/Contact"><ContactPageIcon/>ContactUs</Link></li>
      
//     </ul>
    
//     </div>
//     </>
//   );
// }






import React, { useState } from "react";

import "./Navbar1.css";

import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
// import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupIcon from '@mui/icons-material/Group';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      
      <span className="nav-logo"> <a style={{color:'white',textDecoration:'none'}} href="/Home"><VideoCallIcon/>PRETTYCALL</a></span>
       <img  className='logo1'src='' /> 
      <div className={`nav-items ${isOpen && "open"}`}>
      {/* <a href="/Home"><HomeIcon/>Home</a> */}
        <a href="/room"><VideocamIcon/>Room</a>
        <a href="/About"> <InfoIcon/>AboutUs</a>
        <a href="/Ourteam"><GroupIcon/>OurTeam</a>
        <a href="/Contact"><ContactPageIcon/>ContactUs</a>
         <a href="/Login"><PersonOutlineIcon/>LogIn/Register</a>
         {/* <a href="/Ourteam"><GroupIcon/>OurTeam</a> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar1;
