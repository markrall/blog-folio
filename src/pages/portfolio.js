import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import PostMeta from "../components/post-meta"
import { SectionWrapper } from "../components/global-styles"

const Portfolio = ({ data, location }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="All projects" />

      <SectionWrapper>
        <section className="featuredProjects">
          <h2>Portfolio</h2>

          {data.allMdx.nodes.map(
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
                    <PostMeta
                      frontmatter={frontmatter}
                      timeToRead={timeToRead}
                    />
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
