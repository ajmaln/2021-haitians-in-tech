import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/membership.css"
import Cards from "../components/membershipCards"
import { Container, Button, Row, Col, Image } from "react-bootstrap"
import svgIcon from "../images/coding-art.png"


const MembershipPage = (props) => (
  <Layout>
    <SEO title="Membership" />
    <Container className="text-center p-5 membership-section" fluid>
      <h1>Apply to become a Founding Member</h1>
      <p className="pt-3">If you're interested in joining the paid community, fill out an application.</p>
      <Button variant="outline-primary" className="bg-btn red" href="https://forms.gle/BjieJthgGoo5So9XA">Apply Now</Button>
    </Container>
    <Container className="text-center pt-5">
      <h1 className="pb-3">Membership Dues</h1>
      <p>We provide two simple payment options for Founding Membership,<br></br>so you can choose what’s best for you.</p>
      <Cards />      
    </Container>
    <Container className="membership-section" fluid>
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <h5 className="text-center member-heading">What do Members get?</h5>
          <Image src={svgIcon} />
        </Col>
        <Col className="membership-bullet" md={6} xs={12}>
          <div>
            <ul>
            <li style={{ fontSize: 22 }}><span aria-label="emoji" role="img">👑</span> Networking in our private online community.</li>
            <li style={{ fontSize: 22 }}><span aria-label="emoji" role="img">📺</span> All access pass to weekly webinars.</li>
            <li style={{ fontSize: 22 }}><span aria-label="emoji" role="img">🏆️</span> Weekly goal setting and monthly challenges to keep you motivated all year long.</li>
            <li style={{ fontSize: 22 }}><span aria-label="emoji" role="img">🎁</span> Curated perks including discounted conferences, coding classes, and more.</li>
            <br></br>
            <h5 className="pb-1 font-weight-bold">...All for less than the price of one conference.</h5>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </Container>
    <Container className="text-center p-5" fluid>
      <h1>WANT TO BECOME A FOUNDING MEMBER?</h1>
      <p>Become a member of Haitians in Tech and get notified as soon as Founding Membership opens up.</p>
      <Button variant="outline-primary" className="bg-btn red" href="https://forms.gle/BjieJthgGoo5So9XA">Join Haitians in Tech</Button>
    </Container>
  </Layout>
)

export default MembershipPage;
