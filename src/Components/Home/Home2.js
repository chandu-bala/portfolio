// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";


import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import "../../styles.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import Fav from "./Fav";


function Home2() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  // const hasAnimatedRef = useRef(false);
  const [footerAnimate, setFooterAnimate] = useState(false);
const footerRef = useRef(null);



  // const [animate, setAnimate] = useState(false);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      } else {
        setAnimate(false); // 👈 THIS IS REQUIRED FOR REPLAY
      }
    },
    {
      threshold: 0.15, // mobile-friendly
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setFooterAnimate(true);
      } else {
        setFooterAnimate(false); // replay on re-scroll (optional)
      }
    },
    {
      threshold: 0.25,
    }
  );

  if (footerRef.current) {
    observer.observe(footerRef.current);
  }

  return () => observer.disconnect();
}, []);




  return (
    <Container
      ref={sectionRef}
      fluid
      className={`home-about-section ${animate ? "about-animate" : ""}`}
      id="about"
    >


      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} className="about-title-animate">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF...
            </h1>
              <p className="home-about-body about-text-animate">
                <span>I've completed my B-Tech at Sathyabama University, Chennai.</span><br />

                <span>
                  But now I fell in love 😊 with programming and I have at least learnt
                  something, I think… ¯\_(ツ)_/¯
                </span>

                <span>
                  My professional interests extend to
                  <b className="purple"> cloud computing, IoT technology, and machine learning</b>.
                </span>

                <span>
                  Whenever possible, I also apply my passion for developing products with
                  <b className="purple"> Node.js</b> and
                  <b className="purple"> modern JavaScript libraries like React</b>.
                </span><br />

                <span>
                  I am fluent in classics like
                  <b className="purple">
                    JavaScript, NodeJS, GIT, ReactJS, ExpressJS, MongoDB, MySQL
                  </b>.
                </span>

                <span>
                  I am fluent in programming languages such as
                  <b className="purple"> Python, Java, and C++</b>. Currently learning
                  <b className="purple"> Spring, Spring Boot, Hibernate</b>.
                </span><br />

                <span>
                  Passionate about learning new technologies and driven to secure deep mastery.
                </span>
              </p>



          </Col>
          <Col md={4} className="myAvtar about-image-animate">

            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Fav/>
        
        <Row
          ref={footerRef}
          className={`footer-section ${footerAnimate ? "footer-animate" : ""}`}
          >
          <Col md={12} className="home-about-social">

            <h1>
              Feel free to <span className="purple">Connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:+919908233847" className="con-det">
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
                <a href="https://maps.app.goo.gl/hTsNohQyMc1iDLRs8"
                  target="_blank"
                  className="con-det"
                >
                  Pamur, Andhra pradesh
                </a>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chandu-bala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chandududdela0103@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* <AiOutlineTwitter /> */}
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandu-duddela-bb6549251/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chandu_duddela_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
