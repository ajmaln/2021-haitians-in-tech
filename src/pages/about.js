import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/about.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import TeamCards from "../components/team.js"
import BgImage from "../components/bgimage.js"

export const teamQuery = graphql`
  query MyTeam {
    allTeamJson {
      nodes {
        name
        title
        linkedin
        portfolio
        image {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100, cropFocus: CENTER, fit: COVER ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const team = data.allTeamJson
  return (
    <Layout>
      <SEO title="About" />
      <BgImage />
      <Container className="text-center p-5 about-section" fluid>
        <p className="about-us">We're just passionate technologists who've come together to provide resources, mentorship, and opportunities to people of Haitian descent as they pursue careers in technology.</p>
      </Container>
        <h1 className="page-heading p-5">Team</h1>
      <Container className="pb-5 team-container" fluid>
        <Row>
          {team.nodes.map(({ title, name, image, linkedin, portfolio }, index) => {
            const imageData = image.childImageSharp.fluid

            return (
              <Col md={4} xs={12}>
                <TeamCards
                  title={title}
                  name={name}
                  imageData={imageData}
                  linkedin={linkedin}
                  portfolio={portfolio}
                  animationDelay={index / team.nodes.length}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
