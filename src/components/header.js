import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "./logo"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import "../css/navbar.css"

const Header = () => {
  const location = useLocation()
  return (
    <Navbar
      className="header justify-content-between"
      bg="light"
      variant="light"
      expand="md"
    >
      <Navbar.Brand className="nav-logo text-logo" href="/">
        <Logo />
        <span className="pl-2 hit-text all-caps">Haitians In Tech</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <Link className="navbar-nav nav-link" activeClassName="active" to="/">
            Home
          </Link>
          <Link
            className="navbar-nav nav-link"
            activeClassName="active"
            to="/about"
          >
            About
          </Link>
          <Link
            className="navbar-nav nav-link"
            activeClassName="active"
            to="/membership"
          >
            Membership
          </Link>
          <Nav.Link
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdF1otO2-pHB9E-ankhr9QcWSwAIE9JzAwKGqVo1Cb5ZqTlNA/viewform"
          >
            Post a job
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
