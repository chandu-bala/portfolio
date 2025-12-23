import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiCss3,
  DiHtml5,
  DiMongodb,
  DiMysql,
  DiJava,
  DiPython,
  DiRedis,
  DiDocker
} from "react-icons/di";
import { FaCode, FaServer } from "react-icons/fa";
import { SiAmazonaws, SiPostgresql } from "react-icons/si";

function Techstack() {
  const techList = [
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <FaCode />, name: "C / C++" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiJsBadge />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiRedis />, name: "Redis Streams" },
    { icon: <FaServer />, name: "REST API" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <DiDocker />, name: "Docker" }
  ];

  const [animate, setAnimate] = useState(false);
  const techRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (techRef.current) observer.observe(techRef.current);
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

          .tech-box {
            position: relative;
            padding: 10px;
            border-radius: 12px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .tech-box:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: scale(1.1);
          }

          .tech-name {
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
            transition: 0.5s ease;
          }

          .tech-box:hover .tech-name {
            opacity: 1;
          }

          /* ANIMATION */
          .tech-item {
            opacity: 0;
            transform: translateY(40px);
          }

          .tech-animate .tech-item {
            animation: techFadeUp 0.9s ease-out forwards;
          }

          @keyframes techFadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <Row
        ref={techRef}
        className={`tech-row ${animate ? "tech-animate" : ""}`}
        style={{ justifyContent: "center", paddingBottom: "50px" }}
      >
        {techList.map((tech, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons tech-item"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="tech-box">
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Techstack;
