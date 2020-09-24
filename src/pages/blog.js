import React from "react"
import { Link, graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import { rhythm } from "../utils/typography"
import PostMeta from "../components/PostMeta/PostMeta"
import { SectionWrapper } from '../components/global-styles'

const Blog = ({ data, location }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="Blog" />

      <SectionWrapper>
        <section className="featuredPosts">
          <h1>Blog</h1>
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

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          category: { eq: "post" }
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
