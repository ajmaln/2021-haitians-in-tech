import React from "react"
import Img from "gatsby-image"
import { Card } from "react-bootstrap";
import AnimatedCard from "./animatedCard";


const TeamCards = ({ imageData, name, title, linkedin, portfolio, animationDelay }) => (
  <div className="team-section h-100 pb-5">
    <AnimatedCard className="team-cards custom-card" delay={animationDelay}>
    <Img fluid={imageData} alt={name} className="rounded-circle" />
      <Card.Body className="team-card-body">
        <h5>{name}</h5>
        <p className="text-secondary" style={{ fontSize: 14 }}>{title}</p>
        <p>
          <a href={`${linkedin}`}>Linkedin</a>
        </p>
        <p>
          <a href={`${portfolio}`}>Portfolio</a>
        </p>
      </Card.Body>
    </AnimatedCard>
  </div>
)

export default TeamCards
