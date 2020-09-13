import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import { SectionWrapper } from '../components/global-styles'
import FeaturedProjects from '../components/featured-projects'
import FeaturedPosts from "../components/featured-posts"

import heroBg from '../../content/assets/homepage-hero-bg.png'
import aboutIcons from '../../content/assets/svg/icon-sprite.svg'

const SectionWrapperHero = styled(SectionWrapper)`
  background: url(${heroBg}) no-repeat bottom right, var(--gradient-bottom);
  background-size: 50%, 100%;
  color: var(--color-light);
  display: flex;
  align-items: center;
  min-height: 90vh;
  text-shadow: 2px 2px 2px rgba(8, 7, 8, 0.25);

  & > section {
    max-width: ${rhythm(36)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  }

  & h2 {
    font-size: ${rhythm(2.5)};
    font-weight: 100;
    line-height: ${rhythm(3)};
  }

  & h3 {
    color: rgba(252, 252, 252, 0.94);
    font-size: ${rhythm(1.25)};
    font-weight: 100;
    line-height: ${rhythm(1.5)};
  }

  & .display {
    letter-spacing: -1px;
  }
`
const SectionWrapperAbout = styled(SectionWrapper)`
  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${rhythm(36)};

    & h2 {
      text-align: center;
    }

    & h3 {
      color: var(--color-accent-2);
      margin-bottom: ${rhythm(2.5)};
    }

    & .section-about__list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      font-size: ${rhythm(0.5)};
      list-style: none;

      & > li {
        border-radius: 3px;
        border: 1px solid #333;
        background: linear-gradient(#222, #161616);
        min-width: ${rhythm(5)};
        max-width: ${rhythm(8)};
        margin: ${rhythm(0.25)} ${rhythm(0.25)} ${rhythm(2)};
        padding: ${rhythm(0.5)} ${rhythm(0.5)} ${rhythm(1)};
        position: relative;

        & h4 {
          color: var(--color-accent-3);
          margin-bottom: ${rhythm(0.75)};
        }

        & h3,
        & h4 {
          text-align: center;
        }

        & .icon-wrapper {
          border-radius: 100%;
          border: 1px solid #333;
          background: linear-gradient(#222, #161616);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
          display: inline-block;
          position: absolute;
          left: 50%;
          top: -${rhythm(1.5)};
          transform: translateX(-50%);
          padding: ${rhythm(0.25)};
          width: ${rhythm(3)};
          height: ${rhythm(3)};

          & .icon {
            display: inline-block;
            width: ${rhythm(1)};
            height: ${rhythm(1)};
            stroke-width: 0;
            stroke: var(--color-accent-3);
            fill: var(--color-accent-3);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
`
const SectionWrapperHighlight = styled(SectionWrapper)`
  background: var(--gradient-section-highlight);
  color: var(--color-light);
  min-height: 90vh;
  text-shadow: 2px 2px 2px rgba(8, 7, 8, 0.25);

  & > section {
    max-width: ${rhythm(36)};
  }
`

export default ({ location }) => {
  const { title, description, tagline } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />

      <SectionWrapperHero>
        <section>
          <h2 className="display">{description}</h2>
          <h3 className="display">{tagline}</h3>
        </section>
      </SectionWrapperHero>

      <SectionWrapperAbout>
        <section className="homepage section-about">
          <h2>Hi there, I'm Mark. Great to meet you!</h2>
          <p>
            The internet provides opportunities it provides for community and
            commerce. Using the latest product development practices and
            <abbr title="Javascript, APIs and Markup">JAM</abbr> stack
            technologies, I specialise in the research, design and development
            of dynamic, responsive web sites and applications.
          </p>
          <h3>Process</h3>
          <ul className="section-about__list">
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-search">
                  <use xlinkHref={aboutIcons + "#icon-search"}></use>
                </svg>
              </div>

              <h4>Research</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>Market</li>
                <li>Competitor</li>
                <li>Customer</li>
              </ul>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-quill">
                  <use xlinkHref={aboutIcons + "#icon-quill"}></use>
                </svg>
              </div>

              <h4>Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>Customer discovery</li>
                <li>Protoyping</li>
                <li>User testing</li>
              </ul>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-embed2">
                  <use xlinkHref={aboutIcons + "#icon-embed2"}></use>
                </svg>
              </div>

              <h4>Build</h4>
              <p>
                MVP! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <ul>
                <li>Architecture</li>
                <li>Build &amp; test</li>
                <li>Deployment</li>
              </ul>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-rocket">
                  <use xlinkHref={aboutIcons + "#icon-rocket"}></use>
                </svg>
              </div>

              <h4>Launch</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>Analytics</li>
                <li>Content management</li>
              </ul>
            </li>
          </ul>
          <h3>Benefits</h3>
          <ul className="section-about__list">
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-meter">
                  <use xlinkHref={aboutIcons + "#icon-meter"}></use>
                </svg>
              </div>
              <h4>Fast</h4>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-enlarge2">
                  <use xlinkHref={aboutIcons + "#icon-enlarge2"}></use>
                </svg>
              </div>
              <h4>Responsive</h4>
              <p>My layouts will work on any device, big or small.</p>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-happy">
                  <use xlinkHref={aboutIcons + "#icon-happy"}></use>
                </svg>
              </div>
              <h4>Intuitive</h4>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-power">
                  <use xlinkHref={aboutIcons + "#icon-power"}></use>
                </svg>
              </div>
              <h4>Dynamic</h4>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </li>
          </ul>
          <p>
            <Link to="/contact" className="btn" title="contact me">
              Get in touch
            </Link>
          </p>
        </section>
      </SectionWrapperAbout>

      <SectionWrapperHighlight>
        <FeaturedProjects />
      </SectionWrapperHighlight>

      <SectionWrapper>
        <FeaturedPosts />
      </SectionWrapper>
    </Layout>
  )
}
