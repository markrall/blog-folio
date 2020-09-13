import React from "react"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import FeaturedProjects from "../components/featured-projects"
import FeaturedPosts from "../components/featured-posts"
import { SectionWrapper } from "../components/global-styles"

const SectionWrapperHighlight = styled(SectionWrapper)`
  background: var(--gradient-section-highlight);
  color: var(--color-light);
  min-height: 90vh;
  text-shadow: 2px 2px 2px rgba(8, 7, 8, 0.25);

  & > section {
    max-width: ${rhythm(36)};
  }
`

const About = ({ data, location }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="About" />
      <SectionWrapper>
        <section>
          <h2>About</h2>
          <p>
            Magcargo’s body temperature is approximately 18,000 degrees
            Fahrenheit. Water is vaporized on contact. If this Pokémon is caught
            in the rain, the raindrops instantly turn into steam, cloaking the
            area in a thick fog.If Horsea senses danger, it will reflexively
            spray a dense black ink from its mouth and try to escape. This
            Pokémon swims by cleverly flapping the fin on its back.When Golem
            grow old, they stop shedding their shells. Those that have lived a
            long, long time have shells green with moss.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, SASS, JavaScript (ES5 &amp; 6</li>
            <li>ReactJS</li>
            <li>GasbyJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Jest</li>
          </ul>
        </section>

        <section>
          <h2>Experience</h2>
          <ul>
            <li>Product discovery</li>
            <li>Product Management</li>
            <li>Agile Project Management</li>
            <li>Senior Leaderhsip</li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <ul>
            <li>Udemy NodeJS</li>
            <li>Udemy SASS</li>
            <li>GA Product Management</li>
            <li>Bachelor of IT, Charles Sturt Uni</li>
          </ul>
        </section>

        <p>Get in touch</p>

        <section>
          <p>Example folio site for ideas:</p>
          <ul>
            <li>http://sadok.mx/portfolio/mapswipe/</li>
            <li>http://www.emilyridge.ie/about/</li>
            <li>http://findmatthew.com/</li>
          </ul>
          <p>Guides</p>
          <ul>
            <li>https://www.springboard.com/blog/programmer-portfolio/</li>
            <li>
              https://www.codementor.io/blog/Software-engineer-resume-2ouyh6n4f6
            </li>
            <li>https://skillcrush.com/blog/web-developer-portfolios/</li>
          </ul>
        </section>

        <SectionWrapperHighlight>
          <FeaturedProjects />
        </SectionWrapperHighlight>

        <FeaturedPosts />
      </SectionWrapper>
    </Layout>
  )
}

export default About

