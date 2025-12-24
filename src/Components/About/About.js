import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience";
import Achievements from "./Achievements";
import "../../styles.css";

function About() {
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      fluid
      ref={aboutRef}
      className={`about-section ${animate ? "about-page-animate" : ""}`}
    >
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 className="about-heading-animate">
              Know Who <strong className="purple">I'M</strong>
            </h1>

            <Aboutcard />
          </Col>

          <Col md={5} className="about-img about-image-animate">
            <img
  src={laptopImg}
  alt="about"
  className="img-fluid about-image-animate"
/>

          </Col>
        </Row>

        
        <h1 className="section-title"><strong className="purple">Experience</strong> I Gained</h1>
        <br/>
        <Experience />
        <br/>



<br/>
<br/>

<br/>
        <h1 className="section-title">Professional <strong className="purple">Skillset</strong></h1>
        <Techstack />

        <h1 className="section-title"><strong className="purple">Tools</strong> I use</h1>
        <Toolstack />

        <h1 className="section-title">My <strong className="purple">Acheivements </strong></h1>
        <Achievements />

      </Container>
    </Container>
  );
}

export default About;
