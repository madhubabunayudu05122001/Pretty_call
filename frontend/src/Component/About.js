import React from 'react';
import "./About.css";
import Navbar1 from './Navbar1.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupIcon from '@mui/icons-material/Group';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function About() {
    return (

        <>
            <Navbar1 />
            {/* <div className='abtbody'>

            <div className='firstdivvv'>

                <img src='https://media.istockphoto.com/vectors/about-us-company-and-business-information-page-vector-id1291648406?k=6&m=1291648406&s=612x612&w=0&h=mj_VYZMVSdXGaBcic7bWfT04XofmK7Gdzz9_qcP5tLg=' alt='img' />
                
                <div className='firstdivvv-1'>
                    <h1 style={{ color: 'violet' }} data-aos='fade-down' className='font-weight'>About US</h1>
                    <p >We are developed video call website which is usefull to all.
                        We help you express ideas, connect to others, and build toward a future limited only by your imagination.
                        Our frictionless communications platform is the only one that started with video as its foundation,
                        and we have set the standard for innovation ever since.
                        That is why we are an intuitive, scalable, and secure choice for large enterprises, small businesses, and individuals alike.
                        Founded in 2023
                    </p>
                </div>
            </div></div>

            <h3 className='us'>Here have some content of Us</h3>
            <div data-aos='slide-right' className='team'>
                
                <div className='team1'><h2 >Our Team</h2>
                    <p >Our Team created this application Doneby with help of five members
                        and main head is susmitha
                    </p></div>
                <div className='team2'> <h2 >Customers</h2>
                    <p >Customers are made by ours only
                        Designed the UI path of the website
                        and after that video calling response
                    </p></div>

                <div className='team3'>  <h2 >
                    Process
                </h2>
                    <p >First created one loginpage $ register page
                        and after one Welcomepage  and one homepage  & aboutpage & contactpage
                        created this UI part
                    </p></div>

            </div>
            <h3 className='exam'>Example Images</h3>
            <div className='aos'>

                <div data-aos='fade-right'>
                    <img style={{ height: '250px', width: '200px' }} src='https://lh3.googleusercontent.com/vB1TS2zOEHSeijAdBZKstwSlXtMwEup_6ndLJfsMsIR8HHPupZCSyJ25GKrAF-rgkIk=h900' alt='img' />

                </div>
                <div data-aos='fade-up'>
                    <img style={{ height: '250px', width: '200px' }} src='https://cdn4.iconfinder.com/data/icons/help-and-support-29/64/call-phone-help-support-clock-1024.png' alt='img' />
                </div>
                <div data-aos='fade-left'> <img style={{ height: '250px', width: '200px' }} src='https://about.fb.com/wp-content/uploads/2015/04/messenger-video-call2-1.png?resize=651%2C697' alt='img' />
                </div> */}


<div class="aboutBg">
    <div class="contain">
      <div>
        <img
          src="https://media.istockphoto.com/vectors/about-us-company-and-business-information-page-vector-id1291648406?k=6&m=1291648406&s=612x612&w=0&h=mj_VYZMVSdXGaBcic7bWfT04XofmK7Gdzz9_qcP5tLg="
          alt=""
        />
      </div>
      <div data-aos='zoom-in'>
        <h1>About Us</h1>
        <p>
          We are developed video call website which is usefull to all. We help
          you express ideas, connect to others, and build toward a future
          limited only by your imagination. Our frictionless communications
          platform is the only one that started with video as its foundation,
          and we have set the standard for innovation ever since. That is why we
          are an intuitive, scalable, and secure choice for large enterprises,
          small businesses, and individuals alike. Founded in 2023
        </p>
      </div>
    </div>
    <h3>Here have some content of Us</h3>
    <div class="boxs">
        
      <div class="team1">
        <h2>Our Team</h2>
        <p>
          Our Team created this application with the  help of five members and
          main head is susmitha.
        </p>
      </div>

      <div class="team2">
        <h2>Customers</h2>
        <p>
          Customers are made by ours only Designed the UI path of the website
          and after that video calling response
        </p>
      </div>

      <div class="team3">
        <h2>Process</h2>
        <p>
          First created one loginpage $ register page and after one Welcomepage
          and one homepage & aboutpage & contactpage created this UI part
        </p>
      </div>
    </div>

    <h3 style={{color:'violet'}}>Example Images</h3>
            <div class='aos'>

                <div data-aos='fade-right'>
                    <img src='https://lh3.googleusercontent.com/vB1TS2zOEHSeijAdBZKstwSlXtMwEup_6ndLJfsMsIR8HHPupZCSyJ25GKrAF-rgkIk=h900' alt='img' />

                </div>
                <div data-aos='fade-up'>
                    <img src='https://cdn4.iconfinder.com/data/icons/help-and-support-29/64/call-phone-help-support-clock-1024.png' alt='img' />
                </div>
                <div data-aos='fade-right'>
                    <img src='https://about.fb.com/wp-content/uploads/2015/04/messenger-video-call2-1.png?resize=651%2C697' alt='img' />
                </div>

                <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                 <script>
                    AOS.init(offset: 120
                    duration: 1000
                    );
                </script> 
            </div>
        </div>  

                {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                <script>
                    AOS.init(offset: 120
                    duration: 1000
                    );
                </script> */}
            {/* </div> */}
            

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
export default About;