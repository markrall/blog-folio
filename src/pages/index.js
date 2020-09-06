import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Image = styled(Img)`
  border-radius: 5px;
`

const BlogIndex = ({ data, location }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />

      <section className="hero homepage-hero">
        <h2>{description}</h2>
      </section>

      <section className="featuredProjects">
        <h2>Featured Projects</h2>
        {data.folioGrp.nodes.map(
          ({ excerpt, frontmatter, fields, timeToRead }) => {
            const title = frontmatter.title || fields.slug
            return (
              <article key={fields.slug}>
                <header>
                  {!!frontmatter.cover ? (
                    <Image
                      fluid={frontmatter.cover.childImageSharp.fluid}
                      alt={frontmatter.cover.name}
                    />
                  ) : null}
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <p>
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
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.description || excerpt,
                    }}
                  />
                </section>
              </article>
            )
          }
        )}
      </section>

      <section className="featuredPosts">
        <h2>Featured Posts</h2>
        {data.postGrp.nodes.map(
          ({ excerpt, frontmatter, fields, timeToRead }) => {
            const title = frontmatter.title || fields.slug
            return (
              <article key={fields.slug}>
                <header>
                  {!!frontmatter.cover ? (
                    <Image
                      fluid={frontmatter.cover.childImageSharp.fluid}
                      alt={frontmatter.cover.name}
                    />
                  ) : null}
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <p>
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
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.description || excerpt,
                    }}
                  />
                </section>
              </article>
            )
          }
        )}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    folioGrp: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          category: { eq: "portfolio" }
          featured: { eq: true }
        }
      }
      limit: 3
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          cover {
            publicURL
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        fields {
          slug
        }
      }
    }

    postGrp: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          category: { eq: "post" }
          featured: { eq: true }
        }
      }
      limit: 3
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          cover {
            publicURL
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`
