import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiLinux,
  SiUbuntu,
  SiDocker,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {

  const tools = [
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiUbuntu />, name: "Ubuntu" },
    { icon: <SiPycharm />, name: "PyCharm" },
  ];

  return (
    <>
      <style>
        {`
          .tech-icons {
            text-align: center;
            font-size: 4rem;
            margin-bottom: 20px;
          }

          .tool-box {
            position: relative;
            padding: 10px;
            border-radius: 12px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .tool-box:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: scale(1.1);
          }

          .tool-name {
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.9rem;
            opacity: 0;
            background: #121212;
            color: #fff;
            padding: 4px 10px;
            border-radius: 8px;
            transition: 0.3s ease;
          }

          .tool-box:hover .tool-name {
            opacity: 1;
          }
        `}
      </style>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <div className="tool-box">
              {tool.icon}
              <span className="tool-name">{tool.name}</span>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Toolstack;
