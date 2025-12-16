import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF...
            </h1>
            <p className="home-about-body">
              I've completed my B-Tech at Sathyabama University, Chennai.
              <br />
              But now I fell in love 😊 with programming and I have at least learnt
              something, I think… ¯\_(ツ)_/¯
              <br />
              My professional interests extend to 
              <i>
                <b className="purple"> cloud computing, IoT technology, and machine learning </b>
              </i>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.</b>
              </i>
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JavaScript, NodeJS, GIT, ReactJS, ExpressJS, MongoDB, MySQL.</b>
              </i>
              <br />
              <br />
              I am fluent in programming languages such as &nbsp;
              <b className="purple">Python, Java, and C++</b>, {" "} Currently learning and working with Java frameworks:
              <i>
                <b className="purple"> Spring, Spring Boot, Hibernate.</b>
                </i> 
              <br />
              <br />
              
              Passionate about learning new technologies and driven to secure a deep understanding and mastery in the field.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Fav/>
        
        <Row>
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
