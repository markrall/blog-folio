import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Feature from "../Feature"

import styles from './FeaturePosts.module.css';

const FeaturePosts = () => {
  const data = useStaticQuery(graphql`
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
        limit: 3
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            title
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
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <section className={styles.FeaturePosts}>
      <h2>Featured Posts</h2>
      <Feature nodes={data.allMdx.nodes} />
    </section>
  )
}

export default FeaturePosts