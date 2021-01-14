import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/form.css"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import { Button, Container, Form } from "react-bootstrap"
import ServiceCards from "../components/servicecards.js"
import "../css/button.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const IndexPage = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        className="masthead"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="black-overlay">
          <div className="content-box">
            <motion.h1
              animate={{ translateY: 0, opacity: 1 }}
              initial={{ translateY: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-weight-bolder"
            >
              L'union fait la force
            </motion.h1>
            <Button
              className="bg-btn hero btn-style"
              href="#newsletter"
              as={motion.button}
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join our newsletter
            </Button>
          </div>
        </div>
      </BackgroundImage>
      <Container className="who-we-are pt-5" fluid>
        <motion.h1
          className="p-3 font-weight-bolder"
          ref={ref}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, translateY: 50 },
            visible: { opacity: 1, translateY: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Who We Are
        </motion.h1>
        <p className="pb-3">
          Haitians in Tech™ is dedicated to showcasing seasoned technology
          professionals of Haitian descent,<br></br>and connecting aspiring
          technologist with opportunities in the tech industry.
        </p>
        <ServiceCards />
      </Container>
      <Container className="form-section" fluid>
        <div className="form-content">
          <h1 className="form-title">
            Subscribe to our <span className="red">newsletter</span>
          </h1>
          <p className="form-text pt-2 text-secondary">
            Get the latest job openings, upcoming events, valuable resources
            <br></br>and opportunities in your inbox bi-weekly!
          </p>
        </div>
        <Container className="form">
          <Form
            name="newsletter"
            netlify-honeypot="bot-field"
            method="POST"
            data-netlify="true"
            id="newsletter"
            className="d-flex justify-content-center align-items-center"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p class="hidden" netlify>
              <label>
                Don’t fill this out if you're human:{" "}
                <input name="bot-field" />
              </label>
            </p>
            <Form.Group controlId="formGroupEmail" className="m-0">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="email-input"
                name="email"
              />
            </Form.Group>
            <Button
              value="register"
              className="form-button btn-style m-0 font-weight-bolder email-button"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
    </Layout>
  )
}

/* import ServiceCards from "../components/servicecards.js"
import "../css/button.css"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage className="masthead"
    fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <h1 className="all-caps hero-heading">L'union fait la force</h1>
          <Container>
            <Button className="bg-btn hero" href="#newsletter">Join our newsletter</Button>
          </Container>
        </div>
      </div>
    </BackgroundImage>
    <Container className="who-we-are pt-5" fluid>
      <h1 className="p-3">Who We Are</h1>
      <p className="pb-3">Haitians in Tech™ is dedicated to showcasing seasoned technology professionals of Haitian descent,<br></br>and connecting aspiring technologist with opportunities in the tech industry.</p>
      <ServiceCards />
    </Container>
    <Container className="form-section" fluid>
      <div className="form-content">
        <h1 className="form-title">Subscribe to our <span className="red">newsletter</span></h1>
        <p className="form-text pt-2">Get the latest job openings, upcoming events, valuable resources<br></br>and opportunities in your inbox bi-weekly!</p>
      </div>
      <Container className="form">
        <Form 
          name="newsletter"
          netlify-honeypot="bot-field" 
          method="POST" 
          data-netlify="true" 
          id="newsletter">
            <input type="hidden" name="form-name" value="newsletter" />
            <p class="hidden" netlify>
              <label>Don’t fill this out if you're human: <input name="bot-field" name="email" value="email"/></label>
            </p>
          <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" name="email" />             
          </Form.Group>
          <Button value="register" className="bg-btn form-button" type="submit">
                Submit
          </Button> 
        </Form>        
      </Container>
    </Layout>
  )
} */

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "coding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
