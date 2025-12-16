import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Header Section */}
        <Row style={{ justifyContent: "center", marginBottom: "20px", textAlign: "center" }}>
          <h1 className="purple">My Resume</h1>
          <p style={{ color: "#cfcfcf", maxWidth: "700px" }}>
            A complete overview of my technical expertise, projects, internships, and achievements in Software Development, IoT, and Full Stack Engineering.
          </p>
        </Row>

        {/* Stats Section */}
        <Row style={{ justifyContent: "center", marginBottom: "25px" }}>
          <Col md={3} className="resume-stat">
            <h3>10+</h3>
            <p>Projects</p>
          </Col>
          <Col md={3} className="resume-stat">
            <h3>12+</h3>
            <p>Technologies</p>
          </Col>
          <Col md={3} className="resume-stat">
            <h3>3+</h3>
            <p>Internships</p>
          </Col>
        </Row>

        {/* Resume Preview */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <Card sx={{ maxWidth: 900, borderRadius: "15px", boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}>
            <CardMedia
              component="iframe"
              height="1120px"
              src="https://drive.google.com/file/d/1say2_Ftlsehpnr38BmmJsUgqROlVYwVE/preview"
              style={{ borderRadius: "15px" }}
            />
          </Card>
        </Row>

        {/* Action Buttons */}
        <Row style={{ justifyContent: "center", marginTop: "20px", gap: "15px" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/uc?export=download&id=1say2_Ftlsehpnr38BmmJsUgqROlVYwVE"
            target="_blank"
          >
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>

          <Button
            variant="outline-light"
            href="https://drive.google.com/file/d/1say2_Ftlsehpnr38BmmJsUgqROlVYwVE/view"
            target="_blank"
          >
            <AiOutlineEye /> &nbsp;View Fullscreen
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
