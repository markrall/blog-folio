import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Feature from '../Feature';

import styles from './FeatureProjects.module.css';

const FeatureProjects = () => {
  const data = useStaticQuery(graphql`
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
        limit: 3
      ) {
        nodes {
          id
          excerpt(pruneLength: 125)
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
  `)

  return (
    <section className={styles.FeatureProjects}>
      <h2>Featured Projects</h2>
      <Feature nodes={data.allMdx.nodes} />
    </section>
  )
}

export default FeatureProjects