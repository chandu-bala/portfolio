import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Contact.css"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    const config = {
      SecureToken: "a4587958-816e-4932-92d7-edc5eea168fb",
      To: 'chandududdela0103@gmail.com',
      From: 'chandududdela0103@gmail.com',
      Subject: "This is the form my PortFolio!",
      Body: "Name: " + name
        + "<br> Email: " + email
        + "<br> Phone No: " + phone
        + "<br> Message: " + message

      // `${name} connected to you over email. And the Email is '${email} \n Phone: ${phone} \n Body: ${message}'`
    }

    if (window.Email) {
      window.Email.send(config).then((message) => alert(message)) //SmtpJS.cm
    }
  }

  return (
    <section>
      <Container fluid className="contact-section">

        <Container className="container1">
          <form onSubmit={submitHandler}>
            <h3>Get In Touch</h3>
            <input type="text" id="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" id="email" placeholder="Email id" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" id="phone" placeholder="Phone no." required value={phone} onChange={(e) => setPhone(e.target.value)} />
            <textarea id="message" rows="4" placeholder="Text me.." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit"> Send</button>
          </form>
        </Container>


        <Container>
          <Particle />
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                Feel free to <span className="purple">connect </span>with me
              </h1>
              <div className="contact">
                <div>
                  <PhoneIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="tel:+918984063028" className="con-det">
                    +91 9908233847
                  </a>
                </div>
                <div>
                  <EmailIcon
                    className="con_ico"
                    color="secondary"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:chandududdela0103@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="con-det"
                  >
                    chandududdela0103@gmail.com
                  </a>
                </div>
                <div>
                  <PlaceIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="https://goo.gl/maps/C8iTcLjfHfh86Loa8"
                    target="_blank"
                    className="con-det"
                  >
                    Pamur , Andhra Pradesh
                  </a>
                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
