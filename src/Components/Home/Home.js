import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/MyPic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { FaCode, FaGithub, FaUser } from "react-icons/fa";

function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("introShown");
  });


  useEffect(() => {
  if (showIntro) {
    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("introShown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [showIntro]);


  // 🔥 INTRO POPUP
  if (showIntro) {
    return (
      <div className="intro-screen">
        <div className="intro-icons">
          <FaCode />
          <FaUser />
          <FaGithub />
        </div>
          <h1 className="intro-welcome">
            <span>WELCOME  </span>
            <span> TO  </span>
            <span> MY  </span>
          </h1>

          <h1 className="intro-portfolio">
            <span>PORTFOLIO  </span>
            <span> WEBSITE</span>
          </h1>


      </div>
    );
  }

  // 🔥 MAIN PORTFOLIO
  return (
    <section className="fade-in-main">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name home-text-animate delay-1">

                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name home-text-animate delay-1">

                I'M <strong className="main-name">DUDDELA BALA CHANDU</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="home-type-animate">
                <Type />
              </div>

            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-image-animate"
              />

            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
