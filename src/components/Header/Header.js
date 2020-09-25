import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styles from "./Header.module.css"

const Header = ({ title, location }) => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/productbymark-icon.png/" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.SiteHeaderWrapper}>
      <header className={styles.SiteHeader}>
        <Link to={`/`} className="site-logo-link">
          <Image
            className="site-logo"
            fixed={data.logo.childImageSharp.fixed}
            alt={title}
          />
        </Link>
        <nav>
          <Link activeClassName="active" to={"/portfolio"}>
            Portfolio
          </Link>
          <Link activeClassName="active" to={"/blog"}>
            Blog
          </Link>
          <Link activeClassName="active" to={"/about"}>
            About
          </Link>
          <Link activeClassName="active" to={"/contact"}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
