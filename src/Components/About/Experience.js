import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../About/experiences";
import "./Experience.css";
import { FiExternalLink } from "react-icons/fi";

function Experience() {
   const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  

  // Decide which item to show
  const activeIndex =
    hoveredIndex !== null ? hoveredIndex : selectedIndex;

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
  ref={sectionRef}
  className={`experience-container ${inView ? "exp-animate" : ""}`}
>

      {/* TIMELINE */}
      <div className="experience-timeline">
        <div className="line-wrapper">
          {experiences.map((_, index) => (
            <div
              key={index}
              className={`line-segment ${
                activeIndex !== null && index <= activeIndex
                  ? "highlighted"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* PERIOD LIST */}
      <div className="experience-items">
        {experiences.map((experience, index) => (
          <div
            key={experience._id}
            className="experience-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(index)}   // 🔒 LOCK ON CLICK
          >
            <h1
              className={`experience-period ${
                activeIndex === index ? "selected-period" : ""
              }`}
            >
              {experience.period}
            </h1>
          </div>
        ))}
      </div>

      {/* DETAILS PANEL */}
      <div className="experience-details-container">
        {activeIndex !== null && (
          <div className="experience-details">
            <h2>{experiences[activeIndex].title}</h2>
            <br />
            <p>{experiences[activeIndex].description}</p>

            <a
              href={experiences[activeIndex].projectLink}
              target="_blank"
              rel="noreferrer"
              className="view-project-btn"
            >
              View Project <FiExternalLink />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
