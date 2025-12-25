import React from "react";
import Card from "react-bootstrap/Card";
import { FiAward } from "react-icons/fi";

function CertificationCard({ title, issuer, image, description }) {
  return (
    <Card className="project-card-view">
      <Card.Body className="cert-card-body" style={{ textAlign: "center" }}>
        
        <FiAward size={34} style={{ color: "#6f42c1", marginBottom: "8px" }} />

        <Card.Title>{title}</Card.Title>

        <Card.Text className="cert-issuer">
          {issuer}
        </Card.Text>

        {/* 👇 Hidden by default, shown on hover */}
        <Card.Text className="cert-description">
          {description}
        </Card.Text>

        <img src={image} alt={title} className="cert-image" />

      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
