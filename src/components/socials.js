import React from 'react'

import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import socialIcons from "../../content/assets/svg/icon-sprite.svg"

const SocialList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
`

const SocialItem = styled.li`
  margin: 0 ${rhythm(0.5)};

  & a {
    box-shadow: none;
  }

  & svg {
    display: inline-block;
    fill: var(--color);
    height: ${rhythm(1)};
    width: ${rhythm(1)};
  }
`

const Socials = ({props}) => {
  return (
    <SocialList>
      <SocialItem>
        <a href="https://www.linkedin.com/in/markrall/">
          <svg className="icon icon-linkedin2">
            <use xlinkHref={socialIcons + "#icon-linkedin2"}></use>
          </svg>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="http://github.com/markrall">
          <svg className="icon icon-github">
            <use xlinkHref={socialIcons + "#icon-github"}></use>
          </svg>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://codepen.io/productbymark/">
          <svg className="icon icon-codepen">
            <use xlinkHref={socialIcons + "#icon-codepen"}></use>
          </svg>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://twitter.com/productbymark">
          <svg className="icon icon-twitter">
            <use xlinkHref={socialIcons + "#icon-twitter"}></use>
          </svg>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.instagram.com/productbymark/">
          <svg className="icon icon-instagram">
            <use xlinkHref={socialIcons + "#icon-instagram"}></use>
          </svg>
        </a>
      </SocialItem>
    </SocialList>
  )
}

export default Socials