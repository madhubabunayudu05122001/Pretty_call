import React, { useState } from 'react';
import './Contact.css';
import Navbar1 from './Navbar1.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupIcon from '@mui/icons-material/Group';
import { Button, ListSubheader } from '@mui/material';








const Contact = () => {


  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/send-email', {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('TYPE1 ERROR:-', error));
  }
  return (
    <>
      <Navbar1 />
      <div className='clr1'>
        <div data-aos='zoom-out' className='alll1'>

          <h1 style={{ textAlign: 'center' }}> CONTACT US</h1>
        </div>
        <div className='clr3'>
          <div className='clr2'>
            <h5 style={{ padding: '10px' }}>Get in touch:</h5>

            <div className='icons1'><LocationOnIcon />Bhimavaram AndharaPradesh</div>
            <div className='icons1'><EmailIcon />susmithavalluri5757@gmail.com</div>
            <div className='icons1'><PhoneIcon />+917981408321</div>
          </div>


          <div className='line'>

          </div>

          <div className='form2'>



            {/* <h3 className='form4'>Contact Me</h3> */}
            <form action="" onSubmit={handleSubmit}>

            <label style={{fontSize:'18px'}}>Name:</label>  <input className='form4 fw-bold' name='name' id='name' value={formData.name} placeholder='Name' required type='text' onChange={handleChange} /><br />

            <label style={{fontSize:'18px'}}>Email:</label> <input className='form4 fw-bold' name='email' id='email' value={formData.email} placeholder='Email' required type='email' onChange={handleChange} /><br />


            <label style={{fontSize:'18px'}}>Message:</label>  <input className='form3' name='message' id='message' value={formData.message} placeholder='Message' required type='text' onChange={handleChange}  /><br />

              <button className='form0' type='submit'>send</button><br />

            </form>

          </div>
        </div>

      </div>








      <div className='info'>
        <div className='info1'>
          <h4>CONTACT TO OUR TEAM<br /></h4>
          <p>Monday-saturday<br />
            10:00AM-6:00PM IND<br />
            teamhead susmitha<br />
            santhoshi<br />
            madhubabu<br />
            saikumar<br />
            Nithin<br />

          </p>
        </div>


        <div className='info2'>
          <h4>COUSTMER OFFICE VC STORE</h4>
          <p>534202 Bhimavaram<br />
            IND:TX 78555<br />
            7-981-408-320<br />
            avaliable in BVRM<br />
            534202:1-24<br />
            IND

          </p>
        </div>

        <div className='info3'>
          <h4>TOUCH WITH THESE NUMBERS</h4>
          <p> 000-817-231-12<br />
            123-456-789-01<br />
            79-81-40-83-23<br />
            60-86-90-30-50
          </p>
        </div>
      </div>


      <div className='map'>
        <div className='map1'>
          {/* <h3>SEND A MESSAGE <br/>
 <p> <a className='ah1' href='https://www.instagram.com/'>
  <InstagramIcon/></a>
 <a className='ah1' href='https://in.search.yahoo.com/search?fr=mcafee&type=E211IN885G0&p=twitter'><TwitterIcon/></a></p>
</h3> */}
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766504.62688591!2d60.97424678429473!3d19.726378163715015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1687285614160!5m2!1sen!2sin" width="1500" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


      <div className='contact'>
        <div className='Container5'>
          <div className='row'>
            <h3 className="gettouch">Get In Touch</h3>

            <br />
            <br />

            <div className='col'>
              <h4>PrettyCall</h4>
              <ul className='list-unstyled'>

                <li>This website is about for videoCalling
                  purpose and how to make and how to talk videoCalling
                  with our onces and build realations for videoCall

                </li>

              </ul>
            </div>
            <div className='col'>
              <h4><GroupIcon /> Content</h4>
              <ul className='list-unstyled'>
                <li>WelcomeUs</li>
                <li>ContactUs</li>
                <li>AboutUs</li>
                <li>OurTeam</li>
                <li>Register</li>
                <li>Login</li>
                <li>Home</li>
              </ul>
            </div>
            <div className='col'>
              <h4><PhoneIcon />CONTACT</h4>
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
            <div className='col'>
              <h4>PROJECT BY</h4>
              <ul className='list-unstyled'>
                <li> V.Susmitha</li>
                <li> N.Santhoshi</li>
                <li> N.Madhu babu</li>
                <li> S.Sai kumar</li>
                <li> P.Nithin </li>
              </ul>

            </div>

            <hr />

            <div className='r'>
              <p >
                <a className='ah' href='https://www.facebook.com/'><FacebookIcon /></a><a className='ah' href='https://www.instagram.com/'><InstagramIcon /></a><a className='ah' href='https://twitter.com/i/flow/login'><TwitterIcon /> </a>  {new Date().getFullYear()} VIDEO CALL IN | All right reserved | Any query | VIDEO CALLING APPLICATION |Terms | Privacy
              </p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}
export default Contact;