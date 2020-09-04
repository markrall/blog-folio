import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  let header

  if (location.pathname === rootPath) {
    header = [
      <h1
        key="1"
        style={{
          ...scale(1.25),
          marginBottom: rhythm(1.25),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>,
    ]
  } else {
    header = [
      <h3
        key="1"
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>,
    ]
  }

  header.push(
    <nav key="2">
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
  )

  return <header>{header}</header>
}

export default Header
