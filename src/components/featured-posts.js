import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import PostMeta from './PostMeta/PostMeta'

const FeaturedPosts = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  return (
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
                <PostMeta frontmatter={frontmatter} timeToRead={timeToRead} />
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
  )
}

export default FeaturedPosts