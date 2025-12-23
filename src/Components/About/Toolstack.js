import React, { useEffect, useRef, useState } from "react";

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
  const [animate, setAnimate] = useState(false);
const toolRef = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect(); // play once
      }
    },
    { threshold: 0.2 }
  );

  if (toolRef.current) observer.observe(toolRef.current);
  return () => observer.disconnect();
}, []);


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
          /* INITIAL STATE */
.tool-item {
  opacity: 0;
}

/* LEFT → CENTER */
.tool-item.left {
  transform: translateX(-40px);
}

/* RIGHT → CENTER */
.tool-item.right {
  transform: translateX(40px);
}

/* BOTTOM → TOP */
.tool-item.bottom {
  transform: translateY(40px);
}

/* TRIGGER */
.tool-animate .tool-item {
  animation: toolIn 0.6s ease-out forwards;
}

/* KEYFRAMES */
@keyframes toolIn {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/* MOBILE SAFETY */
@media (max-width: 768px) {
  .tool-item.left,
  .tool-item.right {
    transform: translateY(40px);
  }
}
.section-title {
  opacity: 0;
  transform: translateY(-30px);
}

.about-page-animate .section-title {
  animation: titleDrop 0.6s ease-out forwards;
}

@keyframes titleDrop {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

        `}
      </style>

      <Row
  ref={toolRef}
  className={`tool-row ${animate ? "tool-animate" : ""}`}
  style={{ justifyContent: "center", paddingBottom: "50px" }}
>
  {tools.map((tool, index) => {
    const pos = index % 6;
    let direction = "bottom";

    if (pos <= 1) direction = "left";
    else if (pos >= 4) direction = "right";

    return (
      <Col
        key={index}
        xs={4}
        md={2}
        className={`tech-icons tool-item ${direction}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="tool-box">
          {tool.icon}
          <span className="tool-name">{tool.name}</span>
        </div>
      </Col>
    );
  })}
</Row>

    </>
  );
}

export default Toolstack;
