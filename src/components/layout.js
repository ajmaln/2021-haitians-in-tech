import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import BigFooter from "./footer"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container className="layout-container" fluid>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Container
          style={{
            margin: `0 auto`,
            padding: `0`,
          }}
          fluid
        >
          <main>{children}</main>
        </Container>
        <BigFooter />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
