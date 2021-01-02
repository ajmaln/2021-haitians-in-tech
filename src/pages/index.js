import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/form.css"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import { Button, Container, Form } from "react-bootstrap"
import ServiceCards from "../components/servicecards.js"
import "../css/button.css"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage className="masthead"
    fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <h1>Haitians in Tech</h1>
          <p><b>L'union fait la force</b></p>
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
        <h1 className="form-title">Subscribe to our newsletter</h1>
        <p className="form-text pt-2">Get the latest job openings, upcoming events, valuable resources<br></br>and opportunities in your inbox bi-weekly!</p>
      </div>
      <Container className="form">
        <Form id="newsletter">
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Button className="bg-btn form-button" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>        
      </Container>
    </Container>
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "coding.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
