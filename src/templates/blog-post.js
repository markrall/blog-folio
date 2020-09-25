import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Bio from "../components/Bio/bio"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import { rhythm } from "../utils/typography"
import PostMeta from "../components/PostMeta/PostMeta"
import { SectionWrapper } from "../components/global-styles"


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
      <SectionWrapper>
        <section>
          <article>
          <header>
            {!!frontmatter.cover ? (
              <Image
                fluid={frontmatter.cover.childImageSharp.fluid}
                alt={frontmatter.cover.name}
              />
            ) : null}
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {frontmatter.title}
            </h1>

            <PostMeta frontmatter={frontmatter} timeToRead={timeToRead} />
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
        </section>
      </SectionWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`
