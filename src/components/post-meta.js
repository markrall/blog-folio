import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import styled from "styled-components"

const PostMetaStyles = styled.p`
  display: flex;
  line-height: ${rhythm(1.25)};
  margin-bottom: ${rhythm(.5)};
  flex-flow: row wrap;

  .meta-item:not(:last-child)::after {
    content: "\u2022";
    margin: 0 ${rhythm(.25)};
  }

  .pill,
  .pill:link,
  .pill:active {
    background-color: var(--color-accent-3);
    border-radius: 3px;
    box-shadow: none;
    color: var(--color-dark);
    margin: 0 ${rhythm(0.15)};
    padding: ${rhythm(0.15)} ${rhythm(0.25)};
    text-shadow: none;
    transition: filter 0.3s;
  }

  &:hover {
    filter: brightness(1.1);
  }
`

const PostMeta = ({ frontmatter, timeToRead }) => {

  return (
    <PostMetaStyles>
      <small className="meta-item">{frontmatter.date}</small>
      <small className="meta-item">
        {timeToRead} {timeToRead === 1 ? "min" : "mins"}
      </small>
      <small className="meta-item">
        {frontmatter.tags.map(tag => {
          return (
            <Link key={tag} to={`/tags/${tag}/`} className="pill">
              {tag}
            </Link>
          )
        })}
      </small>
    </PostMetaStyles>
  )
}

export default PostMeta