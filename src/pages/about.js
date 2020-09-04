import React from "react"
import { Link, graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const About = ({ data, location }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="About" />
      <h2>About</h2>

      <h3>Hi there, I'm Mark. Great to meet you!</h3>

      <h4>Purpose</h4>

      <p>
        Magcargo’s body temperature is approximately 18,000 degrees Fahrenheit.
        Water is vaporized on contact. If this Pokémon is caught in the rain,
        the raindrops instantly turn into steam, cloaking the area in a thick
        fog.If Horsea senses danger, it will reflexively spray a dense black ink
        from its mouth and try to escape. This Pokémon swims by cleverly
        flapping the fin on its back.When Golem grow old, they stop shedding
        their shells. Those that have lived a long, long time have shells green
        with moss.
      </p>

      <ul>
        <li>Skills</li>
        <li>Experience</li>
        <li>CV</li>
        <li>Socials</li>
        <li>Contact</li>
      </ul>

      <section className="featuredProjects">
        <h3>Featured Projects</h3>
        {data.folioGrp.nodes.map(({ excerpt, frontmatter, fields }) => {
          const title = frontmatter.title || fields.slug
          return (
            <article key={fields.slug}>
              <header>
                <h4
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={fields.slug}>
                    {title}
                  </Link>
                </h4>
                <small>
                  {frontmatter.date} {frontmatter.tags.join(", ")}
                </small>
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

      <section className="featuredPosts">
        <h3>Featured Posts</h3>
        {data.postGrp.nodes.map(({ excerpt, frontmatter, fields }) => {
          const title = frontmatter.title || fields.slug
          return (
            <article key={fields.slug}>
              <header>
                <h4
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={fields.slug}>
                    {title}
                  </Link>
                </h4>
                <small>
                  {frontmatter.date} {frontmatter.tags.join(", ")}
                </small>
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
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    folioGrp: allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
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
        excerpt(pruneLength: 250)
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

    postGrp: allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
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
