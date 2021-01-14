import React, { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faHandsHelping,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import AnimatedCard from "./animatedCard"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ServiceCard = ({ icon, title, description, animationDelay }) => {
  const controls = useAnimation()
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView();
  
  useEffect(() => {
    inView && setVisible(true)
  }, [inView, setVisible])

  useEffect(() => {
    visible && controls.start("visible", { delay: (animationDelay || 0.1) + 0.3, duration: 0.5 })
  }, [visible, animationDelay, controls])

  return (
    <AnimatedCard
      delay={animationDelay}
      className="custom-card service-card"
    >
      <motion.div
        className="d-flex justify-content-center align-items-center"
        style={{
          borderRadius: "50%",
          width: 100,
          height: 100,
          backgroundColor: "#d40d2c",
        }}
        ref={ref}
        initial="hidden"
        variants={{ hidden: { scale: 0.0 }, visible: { scale: [0.0, 1.2, 1.0] } }}
        animate={controls}
      >
        <FontAwesomeIcon color="#fff" icon={icon} />
      </motion.div>

      <Card.Body>
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Text className="text-secondary">{description}</Card.Text>
      </Card.Body>
    </AnimatedCard>
  )
}

const ServiceCards = () => {
  return (
    <div className="service-cards">
      <Row>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faUsers}
            title="Networking"
            description="Connect with Haitians from all over the world who are working in tech."
          />
        </Col>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faLaptopCode}
            title="Resources"
            description="Access learning resources to develop in your career."
            animationDelay={0.2}
          />
        </Col>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faHandsHelping}
            title="Career Development"
            description="Every successful person started with a goal. Access mentors to help you plan the right career moves."
            animationDelay={0.3}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ServiceCards
