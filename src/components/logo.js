import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/navbar.css"

const Logo = () => {
  const data = useStaticQuery(graphql`
  query MyLogo {
    file(relativePath: {eq: "hit-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img alt="logo" loading="eager" fluid={data.file.childImageSharp.fluid} />
}

export default Logo
