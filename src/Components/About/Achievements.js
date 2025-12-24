import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles.css";

import chancellorImg from "../../Assets/Acheivements/Chancellors-scholarship.jpeg";
import jeppiaarImg from "../../Assets/Acheivements/Jeppiar-scholarship.jpeg";
import codeforgoodImg from "../../Assets/Acheivements/code-for-good.jpeg";
import paryavaranImg from "../../Assets/Acheivements/Paryavaran-competition.jpeg";

function Achievements() {
  const achievements = [
    {
      title: "Dr. Jeppiaar Remibai Scholarship",
      image: jeppiaarImg,
      description:
        "Awarded a scholarship of ₹53,000 for securing first rank consistently up to the 3rd semester, recognizing outstanding academic excellence."
    },
    {
      title: "Chancellor’s Scholarship",
      image: chancellorImg,
      description:
        "Received the Chancellor’s Scholarship worth ₹79,500 in recognition of top academic performance and consistent merit."
    },
    {
      title: "Winner – Code for Good Hackathon",
      image: codeforgoodImg,
      description:
        "Winner of the Code for Good Hackathon for developing a high-impact technology solution, and was awarded an iPad along with official goodies."
    },
    {
      title: "National Students Paryavaran Competition – 2024",
      image: paryavaranImg,
      description:
        "Recognized at the national level for active participation and contribution in the National Students Paryavaran Competition 2024, focusing on environmental awareness and sustainability."
    },
    {
      title: "Merit Certificate – 2024",
      image: jeppiaarImg,
      description:
        "Awarded a Merit Certificate for securing a top academic position and maintaining consistent excellence during the 2024 academic year."
    },
    {
      title: "JPMorgan Chase – 2024",
      image: codeforgoodImg,
      description:
        "Recognized for successful participation and performance in JPMorgan Chase initiatives and technical programs during 2024."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex(
      activeIndex === 0 ? achievements.length - 1 : activeIndex - 1
    );
  };

  const next = () => {
    setActiveIndex(
      activeIndex === achievements.length - 1 ? 0 : activeIndex + 1
    );
  };

  const getIndex = (offset) =>
    (activeIndex + offset + achievements.length) % achievements.length;

  return (
    <Container className="achievement-wrapper">
      <button className="nav-arrow left" onClick={prev}>
        &#10094;
      </button>

      <div className="achievement-carousel">
        {[-1, 0, 1].map((offset) => {
          const item = achievements[getIndex(offset)];
          return (
            <div
              key={offset}
              className={`achievement-item ${
                offset === 0 ? "active" : "inactive"
              }`}
            >
              <img src={item.image} alt={item.title} />
            </div>
          );
        })}
      </div>

      <button className="nav-arrow right" onClick={next}>
        &#10095;
      </button>

      <h3 className="achievement-title">
        {achievements[activeIndex].title}
      </h3>
      <p className="achievement-desc">
        {achievements[activeIndex].description}
      </p>
    </Container>
  );
}

export default Achievements;
