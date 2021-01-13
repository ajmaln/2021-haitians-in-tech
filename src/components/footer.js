import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css"
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faTwitterSquare, faInstagramSquare, faTwitch } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

const Footer = () => (
    <div className="footer">
        <Container fluid>
            <Row>
                <Col>
                    <div><Logo /></div>
                    <h5 className="font-weight-bold">HaitiansinTech.com</h5>
                </Col>
                <Col>
                    <h5 className="title font-weight-bold">Contact Us</h5>
                    <ul className="list-unstyled text-secondary" style={{ fontSize: 16 }}>
                        <li>
                        Press/Partnerships: <a className="footer-links" href="mailto:team@haitiansintech.com">team@haitiansintech.com</a>
                        </li>
                        <li>
                        Share a conference discount with this <a className="footer-links" rel="noreferrer" target="_blank" href="https://forms.gle/ad7gxuwdiAv9gQeU9">form.</a>
                        </li>
                        <li>
                        Copyright Haitians in Tech© 2020
                        </li>
                        <li>
                            <Link to="/codeofconduct" className="footer-links" >Haitians in Tech Code of Conduct</Link>
                        </li>
                        <li>
                            <Link to="/privacypolicy" className="footer-links">Privacy Policy & Terms of service</Link>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h5 className="title font-weight-bold">Connect with us</h5>
                    <div className="social-media">
                        <div>
                            <a rel="noreferrer" target="_blank" href="https://github.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faGithubSquare} />
                            </a>
                        </div>
                        <div>
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faTwitterSquare} />
                            </a>
                        </div>
                        <div>
                            <a rel="noreferrer" target="_blank" href="https://instagram.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faInstagramSquare} />
                            </a>
                        </div>
                        <div>
                            <a rel="noreferrer" target="_blank" href="https://twitch.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faTwitch} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div>
                <Container className="text-center pt-3" fluid>
                © {new Date().getFullYear()}, Built by
                {` `}
                <a rel="noreferrer" target="_blank" href="https://www.thestartuplife.us">The Startup Life</a>            
                </Container>
            </div>
        </Container>  
    </div>

)

export default Footer
