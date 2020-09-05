import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

export default ({ data, pageContext, location }) => {
  const { title } = useSiteMetadata()
  const { frontmatter, excerpt, timeToRead, body } = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={title}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {frontmatter.title}
          </h1>

          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            <small>{frontmatter.date}</small>
            &nbsp;&bull;&nbsp;
            <small>
              {timeToRead} {timeToRead === 1 ? "min" : "mins"}
            </small>
            &nbsp;&bull;&nbsp;
            <small>
              Tags:
              {frontmatter.tags.map(tag => {
                return (
                  <Link key={tag} to={`/tags/${tag}/`}>
                    {tag}
                  </Link>
                )
              })}
            </small>
          </p>
        </header>
        <MDXRenderer>{body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        description
        category
        tags
      }
    }
  }
`
