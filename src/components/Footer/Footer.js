import React from "react"

import { rhythm } from "../../utils/typography"
import styled from "styled-components"

const FooterStyles = styled.footer`
  background-color: var(--background);
  color: #666;
  padding: ${rhythm(0.75)} ${rhythm(3 / 4)};

  & p {
    text-align:right;
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <p>© {new Date().getFullYear()}</p>
    </FooterStyles>
  )
}

export default Footer
