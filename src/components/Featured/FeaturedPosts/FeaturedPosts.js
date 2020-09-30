import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Featured from "../Featured"

import styles from './FeaturedPosts.module.css';

const FeaturedPosts = () => {
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
    <section className={styles.FeaturedPosts}>
      <h2>Featured Posts</h2>
      <Featured nodes={data.allMdx.nodes} />
    </section>
  )
}

export default FeaturedPosts