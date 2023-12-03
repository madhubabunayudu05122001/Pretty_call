import React from 'react';
import Navbar1 from './Navbar1.js';
import './Ourteam.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function ourteam() {
  return (
    <>
      <Navbar1 />

      <div className='ourr'>

        <h1>Meet Our Team</h1>

        <div className='cards9'>

          <div data-aos="flip-left" data-aos-duration="2000" class="card " style={{ width: '18rem', }}>
            <img src="images\susmi.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p style={{ fontWeight: 'bold' }} class="card-text">VALLURI SUSMITHA<br />
                Team Leader(Head)<br />Website Developer<br />
                stream:BSC(MECS)
                INTERN</p>
            </div>
          </div>


          <div data-aos="flip-left" data-aos-duration="2000" class="card" style={{ width: '18rem' }}>
            <img src="images\santhu.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p style={{ fontWeight: 'bold' }} class="card-text">YAVANAMANDA NAGA SANTHOSHI<br />
                Team Member & website designer<br />stream:BSC(MECS)INTERN</p>
            </div>
          </div>




          <div data-aos="flip-left" data-aos-duration="2000" class="card" style={{ width: '18rem' }}>
            <img src="images\nithin.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p style={{ fontWeight: 'bold' }} class="card-text">PAKERLA NITHIN NISCHAL<br />
                Team Member & web designer<br />stream:BSC(MECS)INTERN</p>
            </div>
          </div>
          </div>

      <div className='cards1'>
          <div data-aos="flip-left" data-aos-duration="2000"
            class="card" style={{ width: '18rem' }}>
            <img src="images\madhu.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p style={{ fontWeight: 'bold' }} class="card-text">NAYADU MADHUBABU<br />
                Team Member & website degisner<br />stream:BSC(MECS) INTERN</p>
            </div>
            </div>


            <div data-aos="flip-left" data-aos-duration="2000" class="card" style={{ width: '18rem'}}>
              <img src="images\saikumar.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p style={{ fontWeight: 'bold' }} class="card-text">SAIKUMAR<br />
                  Team Member & website degisner<br />stream:BSC(MECS)INTERN</p>
              </div>
            </div>

            </div>

          </div>
        
     


      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

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
  )
}
export default ourteam;