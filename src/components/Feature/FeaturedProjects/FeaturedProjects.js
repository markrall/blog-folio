import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../../../utils/typography"
import styled from 'styled-components'

import PostMeta from "../../PostMeta/PostMeta"

const FeaturedProjectStyles = styled.section`
  & > section {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    & > article {
      min-width: ${rhythm(6)};
      max-width: ${rhythm(10)};
      margin: ${rhythm(1)} ${rhythm(0.5)};
    }

    @media (max-width: 420px) {
      max-width: ${rhythm(12)};
    }
  }
`

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
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
          excerpt(pruneLength: 125)
          timeToRead
          frontmatter {
            title
            description
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
    <FeaturedProjectStyles>
      <h2>Featured Projects</h2>
      <section>
        {data.folioGrp.nodes.map(
          ({ excerpt, frontmatter, fields, timeToRead }) => {
            const title = frontmatter.title || fields.slug
            return (
              <article key={fields.slug}>
                <header>
                  {!!frontmatter.cover ? (
                    <Link to={fields.slug}>
                      <Image
                        fluid={frontmatter.cover.childImageSharp.fluid}
                        alt={frontmatter.cover.name}
                      />
                    </Link>
                  ) : null}
                  <h3
                    style={{
                      marginTop: rhythm(3 / 4),
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
    </FeaturedProjectStyles>
  )
}

export default FeaturedProjects