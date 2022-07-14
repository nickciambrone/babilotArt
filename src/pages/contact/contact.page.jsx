import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.styles.scss';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [messageForUser, setmessageForUser] = useState('');

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
    
      if (isValidEmail(email)){
        const serviceId = "service_lhsobpo";
        const templateId = "template_n91z8yj";
        const userId = "BvX3RwNBsra42lP-e";
        const templateParams = {
          name,
          email,
          message,
        };
  
        emailjs
          .send(serviceId, templateId, templateParams, userId)
          .then((response) => console.log(response))
          .then((error) => console.log(error));
        setName("");
        setEmail("");
        setMessage("");
        setEmailSent(true);
        setmessageForUser('Message Sent')

      }
      else{setmessageForUser('Please enter a valid email')
    }

    } else {
        setmessageForUser('Please fill in all fields')
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div className ='contact'>
      <div className="contact-main" style = {{display:'flex', flexDirection:'column', textAlign:'left'}}>
      <h1 style={{fontFamily: "Comfortaa, cursive", textAlign:'center'}}>Contact Me</h1>
      <h5 style={{fontFamily: "Comfortaa", textAlign:'left'}}>If you can any questions, comments, or concerns, please reach out! Or even if you’d just like to chat!

      </h5>
      <h6 style={{fontFamily: "Comfortaa", textAlign:'left'}}>Let's make some art 🙂</h6>
      <span style={{fontWeight:'bold'}}>Name<span style={{color:'red'}}>*</span></span>
        <input
          className="contactField"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span style={{fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span></span>

        <input
          className="contactField"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{fontWeight:'bold'}}>Comment or message<span style={{color:'red'}}>*</span></span>

        <textarea
          className="contactField"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        
        <button className="contactField" onClick={submit} style={{backgroundColor:'#eeeeee', fontFamily:'Comfortaa', width:'140px', padding:'10px'}}>
          Send Message
        </button>
        <span className={emailSent ? "visible" : null}>
          {messageForUser}
        </span>
      </div>
      <div className = 'contact-inspiration' style={{textAlign:'left', display:'flex', flexDirection:'column', padding:'20px'}}>
      <span>- MY INSPRIATION</span>
<span>While growing up in a household where art was greatly appreciated, I knew that I wanted to make the world a more colorful and creative place. Every piece tells a story, and a snippet from my journey as an artist. Come along with me as I explore my perspective of fine arts.</span>
      </div>
    </div>
  );
};

export default Contact;
