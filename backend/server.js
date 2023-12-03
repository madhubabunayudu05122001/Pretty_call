const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const PORT = 8000;

app.post('/send-email', (req,res)=>{
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: 'susmithavalluri5757@gmail.com',
          pass: 'gwfn pigc utro qegu',
        }
      });

      const mailOptions = {
        from: email,
        to: 'susmithavalluri5757@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        `,
      };

      transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log('TYPE2 ERROR: - ',error);
            res.status(500).json({success: false, message: 'Error sending mail!!'})
        }else{
            console.log("Email Sent!!", info.response);
            res.status(200).json({success: true, message:"Email Sent successfully!!"})
        }
      })
});



app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`)
})