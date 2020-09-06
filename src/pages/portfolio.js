import React from "react"
import { Link, graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Portfolio = ({ data, location }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="All projects" />

      <h2>Portfolio</h2>

      <section className="featuredProjects">
        {data.allMdx.nodes.map(
          ({ excerpt, frontmatter, fields, timeToRead }) => {
            const title = frontmatter.title || fields.slug
            return (
              <article key={fields.slug}>
                <header>
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
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`
