import React from 'react';
import Navbar1 from './Navbar1.js';
import './Welcome.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import 'animate.css';
import Room from './Room.js';
import { useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';




const Welcome =() =>{
  
    const [value ,setValue] = useState();
    const navigate=useNavigate();
    const handleJoinRoom = useCallback((e) => {
     navigate('/Room');   
},[]);
        return(
<div>
<Navbar1/>

<div className='full'>
<div className='welcome'>
<h1 className='p1'>WELCOME TO  OUR  VIDEO  CALLING  APPLICATION</h1>
<h5 className='p1'>You can start a call or calling directly to a person from the list or you can create or join group call</h5>
<br/>
</div>
<div className='content' >
<div className='hi'>

<div className='room'>


<h3>Create RoomCode</h3>
    <p>note: if dont have code create here</p>
<input className='r1'  type="text" placeholder='Code'/>
<button className='r' onClick={handleJoinRoom}>Create</button>  <br/> 
    

    {/* <div className='ff1'> */}
    <h3>Please enter room code</h3>
    <p>note: user can provide the room code</p>
<input className='r1' type="text" placeholder='Enter Room code'/>
<button className='r' onClick={handleJoinRoom}>Join</button>   
</div>
{/* </div> */}



{/* <div className='carousel1'>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://media.istockphoto.com/id/1219329162/photo/headshot-portrait-of-smiling-indian-woman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=8m7nE4pVObsLxHCB471KcRmvIpC9_xQSq_T8EIAYQ7U=" class="d-block w-200" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/_1200x630_crop_center-center_82_none/video-chat-Meta_2021-11-19-205629_fbxd.png?mtime=1637355390" class="d-block w-200" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://manycam.com/blog/wp-content/uploads/2019/05/prepare-for-video-calls.png" class="d-block w-200" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div> */}



{/* <img  className='img-fluid' src='https://manycam.com/blog/wp-content/uploads/2019/05/prepare-for-video-calls.png' /> */}

</div>
</div>
</div>
<div>
       
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
       </div>
</div>



    );
}
export default Welcome;