import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/Layout/Layout"
import SectionWrapper from "../components/Layout/Section/SectionWrapper/SectionWrapper"
import SEO from "../components/SEO/seo"
import { rhythm } from "../utils/typography"
import PostMeta from "../components/PostMeta/PostMeta"

const Portfolio = ({ data, location }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="Portfolio" />

      <SectionWrapper>
        <section>
          <h1>Portfolio</h1>

          {data.allMdx.nodes.map(
            ({ excerpt, frontmatter, fields, timeToRead }) => {
              const title = frontmatter.title || fields.slug
              return (
                <article key={fields.slug} style={{ marginBottom: rhythm(4) }}>
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
                        marginTop: rhythm(1),
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <PostMeta postMetaData={{ frontmatter, timeToRead }} />
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
      </SectionWrapper>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          category: { eq: "portfolio" }
          featured: { eq: true }
        }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        timeToRead
        frontmatter {
          title
          description
          date(formatString: "MMM Do, YYYY")
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
          site
          repo
        }
        fields {
          slug
        }
      }
    }
  }
`
