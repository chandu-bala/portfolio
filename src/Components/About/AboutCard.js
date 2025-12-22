import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* 👇 only added class for animation */}
        <blockquote className="blockquote mb-0 aboutcard-animate">

          {/* TEXT BLOCK */}
          <span className="about-line">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Chandu Duddela </span>
              from <span className="purple"> Andhra Pradesh, India.</span>
              <br />
              I am an engineer learning Web Development at FunctionUp.
              <br /><br />
              Apart from coding, some other activities that I love to do!
            </p>
          </span>

          {/* ACTIVITIES */}
          <ul>
            <li className="about-activity about-line">
              <MovieIcon /> Watching movies, Comedy Show, Anime
            </li>
            <li className="about-activity about-line">
              <AutoStoriesIcon /> Reading Scientific and Mythological Books
            </li>
            <li className="about-activity about-line">
              <ScreenSearchDesktopIcon /> Researching about latest tech
            </li>
          </ul>

          {/* SOFT SKILLS */}
          <span className="about-line">
            <p style={{ textAlign: "justify" }}>Soft Skills:</p>
          </span>

          <ul>
            <li className="about-activity about-line">
              <FaHandPointRight /> Time Management
            </li>
            <li className="about-activity about-line">
              <FaHandPointRight /> Teamwork
            </li>
            <li className="about-activity about-line">
              <FaHandPointRight /> Hard Work
            </li>
            <li className="about-activity about-line">
              <FaHandPointRight /> Leadership Quality
            </li>
          </ul>

          {/* QUOTE */}
          <span className="about-line">
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              "Empty your mind, Stop thinking about anything, Simply be !"
            </p>
          </span>

          <span className="about-line">
            <footer className="blockquote-footer"> Chandu</footer>
          </span>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
