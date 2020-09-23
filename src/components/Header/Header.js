import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../../utils/typography";
import styled from "styled-components"

const HeaderWrapperStyles = styled.div`
  background-color: var(--background);
  color: var(--color);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${rhythm(48)};
    margin: 0 auto;
    padding: ${rhythm(0.5)} ${rhythm(3 / 4)};

    & a,
    & a:link,
    & a:active,
    & a:visited {
      display: inline-block;
      outline: none;
      box-shadow: none;
      transition: all 0.3s;
    }

    & .site-logo {
      margin-bottom: 0;
      outline: none;

      & img {
        margin-bottom: 0;
      }

      & img:hover {
        filter: brightness(1.5);
      }
    }

    & .site-logo-link {
      height: 64px;
    }

    & nav {
      display: flex;
      align-items: center;

      & a,
      & a:link,
      & a:active,
      & a:visited {
        display: inline-block;
        margin: 0 ${rhythm(0.5)};
      }
      & a:hover {
        box-shadow: 0 1px 0 var(--color-light);
      }
      & a.active {
        color: var(--color-accent-2);
        font-weight: bold;
      }
      & a.active:hover {
        box-shadow: none;
      }
    }
  }
`

const HeaderStyles = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
`

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
    <HeaderWrapperStyles>
      <HeaderStyles>
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
      </HeaderStyles>
    </HeaderWrapperStyles>
  )
}

export default Header
