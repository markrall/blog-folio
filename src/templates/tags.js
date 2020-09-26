import React from "react"
import PropTypes from "prop-types"

import { Link, graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import { rhythm } from "../utils/typography"
import PostMeta from "../components/PostMeta/PostMeta"
import { SectionWrapper } from "../components/global-styles"

const Tags = ({ pageContext, data, location }) => {
  const { title } = useSiteMetadata()
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with ${tag}`

  return (
    <Layout title={title} location={location}>
      <SEO title="All tags" />
      <SectionWrapper>
        <section>
          <h1>{tagHeader}</h1>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { frontmatter } = node
            const { timeToRead, excerpt } = node

            return (
              <article key={slug}>
                <header>
                  <h2
                    style={{
                      marginTop: rhythm(1),
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={slug}>
                      {frontmatter.title}
                    </Link>
                  </h2>
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
          })}
        </section>
      </SectionWrapper>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            title
            description
            date(formatString: "MMMM Do, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
