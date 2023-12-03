import React from "react";
import Navbar1 from "./Navbar1";
import "./Home.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
 import { Link } from "@mui/material";
 

function Home() {
  return (
    <>
      <Navbar1 />
      <div className="homemain">
       
        <div className="firstdiv">
          <div className="firstdiv-1"  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000">
            <p className="display-2">Welcome to Pretty Call</p>
            <p className="h3">We Makes Meetings Fast And Easy</p>
            <p className="h4">
              we already created new conference room for you!!
            </p>
            <div className="buttondiv">
              <button  type="button"><a style={{color:'white'}}href="/Login">Start Video Call </a></button>
            </div>
          </div>
          <img  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
            src="https://img.freepik.com/free-photo/friends-family-making-videocall-catching-up_23-2149019117.jpg"
            alt="img"
            className="img-fluid"
          />
        </div>

        {/* *****firstdiv close*** */}
        <div className="seconddiv">
          <p className="h1 text-center mb-4" data-aos="flip-up"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="1000">What Can We Do?</p>
          <div className="seconddiv-1">
            <div class="card"  data-aos="fade-up"
    data-aos-offset="130"
    data-aos-delay="50"
    data-aos-duration="1000">
              <img
                class="card-img-top"
                src="https://videolink2me.com/assets/images/icon_03.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Start in seconds</h5>
                <p class="card-text">
                  Dont waste time on other procedures, just open the link to
                  start new conference{" "}
                </p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div class="card cardimg"  data-aos="fade-down"
    data-aos-offset="130"
    data-aos-delay="50"
    data-aos-duration="1000">
              <img
                class="card-img-top "
                src="https://videolink2me.com/assets/images/icon_22.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Make video calls</h5>
                <p class="card-text">
                  Make direct video calls to other Videolink2me users
                </p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div class="card cardimg"  data-aos="fade-up"
    data-aos-offset="130"
    data-aos-delay="50"
    data-aos-duration="1000">
              <img
                class="card-img-top "
                src="https://videolink2me.com/assets/images/icon_19.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Import contacts</h5>
                <p class="card-text">
                  Setup conference even quicker with your Google+ and Facebook
                  friends{" "}
                </p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>
        {/* *****seconddiv end***** */}
        <p className="h1 text-center mb-54"  data-aos="flip-up"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="1000">What is more?</p>
        <div className="thirddiv">
          <div className="thirddiv-1" data-aos="zoom-in"
    data-aos-offset="150"
    data-aos-delay="50"
    data-aos-duration="1000">
            <p className="h3">Personal rooms</p>
            <p className="mb-2">
              If you use videolink2me often and got tired of creating and
              sending conference link to other participants each time you want
              to connect, you will probably like personal videolinks.
            </p>
            <p className="mb-2 p">
              It allows you to become an owner of videolink and use the same
              personal link for all future video calls.
            </p>
            <p className="mb-2 p">
              Personal videolink has additional amazing feature -- you can
              receive video calls directly into your browser!
            </p>
            <p>
              Sign up with your Microsoft 365 or Google account to start making
              unlimited online video calls for free, with unlimited audio
              recordings, virtual backgrounds, and more. It takes just a minute
              to get started. Or, take a self-guided interactive tour of the app
              first!
            </p>
            <div className="buttondiv">
              <button type="button"><a style={{color:'white'}} href='/Login'>Start Video Call </a></button>
            </div>
          </div>
          <img className="img-fluid"
           data-aos="zoom-in"
           data-aos-offset="100"
           data-aos-delay="50"
           data-aos-duration="1000"
            src="https://st4.depositphotos.com/5425740/41135/v/600/depositphotos_411352450-stock-illustration-webinar-young-woman-sitting-front.jpg"
            alt=""
          />
        </div>
        <div className="fourthdiv">
          <div className="fourthdiv-1"
           data-aos="fade-up "
           data-aos-offset="250"
           data-aos-delay="50"
           data-aos-duration="2000">
            <p className="display-6" style={{ fontWeight: "500" }}>
              Browser-based video calls
            </p>
            <p className="h5">
              Some video conferencing software will make you download the
              desktop or mobile app to host and join video calls. But Dialpad is
              browser-based, which means it won’t force you to download the app.
              Host and join meetings from a web browser using your computer or
              mobile device, and get all the cool features that you’d get in the
              app
            </p>
          </div>
          <img className="img-fluid"
               data-aos="fade-up "
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="2000"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Video_conferencing_features-04_RWGVzS?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain"
            alt=""
          />
        </div>
        <div className="fifthdiv">
          <div className="fifthdiv-1"
             data-aos="zoom-in "
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000">
            <p className="display-6" style={{ fontWeight: "500" }}>
              Truly unified communications
            </p>
            <p className="h5">
              Beyond online video calls, what if your team also communicates
              through phone calls and text chat? Dialpad lets you consolidate
              all those tools into one. Talk, message, and meet—all from one
              convenient app. That makes for fewer software tools to pay for and
              manage—and less time wasted on context-switching for your tear
            </p>
          </div>
          <img className="img-fluid"
             data-aos="fade-up "
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VideoCallingBenefits-ImproveTheEmployeeExperience-2x_RWMASz?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain"
            alt=""
          />
        </div>
        <div className="sixthdiv">
          <div className="sixthdiv-1"
            data-aos="fade-up "
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000">
            <p className="display-6" style={{ fontWeight: "500" }}>
              Full meeting control
            </p>
            <p className="h5">
              In the Dialpad app, all the call controls you need are easily in
              reach. Adjust your volume, start a screen share, mute and unmute
              yourself, or start and pause recording. It's all in a clean,
              easy-to-use interface that lays out all these options for you
              right on the screen.
            </p>
          </div>
          <img className="img-fluid"
            data-aos="fade-up "
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VideoCallingBenefits-SupportRemoteWork-2x_RWMASo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain"
            alt=""
          />
        </div>
        </div>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init( offset:120, duration: 1000);</script>
      





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
                    <li>Privacy&Policy</li>
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
export default Home;