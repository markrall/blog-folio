import React from 'react';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';
import { rhythm } from '../utils/typography';
import styled from 'styled-components';

import { SectionWrapper } from '../components/global-styles';
import FeaturedProjects from "../components/Feature/FeaturedProjects/FeaturedProjects"
import FeaturedPosts from "../components/Feature/FeaturedPosts/FeaturedPosts"
import SectionHighlight from '../components/UI/SectionHighlight/SectioHightlight';
import List from "../components/UI/List/List"
import HorizontalList from '../components/UI/List/HorizontalList/HorizontalList';
import Button from '../components/UI/Button/Button';

import heroBg from '../../content/assets/homepage-hero-bg.png';
import aboutIcons from '../../content/assets/svg/icon-sprite.svg';

const SectionWrapperHero = styled(SectionWrapper)`
  background: url(${heroBg}) no-repeat bottom 10% right 15%,
    var(--gradient-bottom);
  background-size: 60%, 100%;
  color: var(--color-light);
  display: flex;
  align-items: center;
  min-height: 90vh;
  text-shadow: 2px 2px 2px rgba(8, 7, 8, 0.25);

  & > section {
    max-width: ${rhythm(30)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  }

  & h2 {
    font-size: ${rhythm(2.5)};
    line-height: ${rhythm(3)};
  }

  & h3 {
    color: rgba(252, 252, 252, 0.94);
    font-size: ${rhythm(1.25)};
    font-weight: 300;
    line-height: ${rhythm(1.75)};
  }

  & .display {
    letter-spacing: -3px;
    word-spacing: 0.25rem;
  }

  @media (max-width: 420px) {
    background: bottom 10% right 15%, var(--gradient-bottom);
    min-height: 84vh;

    & .display {
      letter-spacing: -2px;
      word-spacing: 0.25rem;
    }

    & h2 {
      font-size: ${rhythm(1.25)};
      line-height: ${rhythm(1.75)};
    }

    & h3 {
      font-size: ${rhythm(0.85)};
      line-height: ${rhythm(1.25)};
    }
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
      margin: ${rhythm(2)} 0 0 0;

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
          margin-top: 3rem;
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

        & > ul {
          list-style: none;
        }

        @media (max-width: 420px) {
          h4 {
            margin-top: ${rhythm(2)};
          }
        }
      }
    }
  }
`
export default ({ location }) => {
  const { title, tagline } = useSiteMetadata()

  return (
    <Layout location={location} title={title}>
      <SEO title="Home" />

      <SectionWrapperHero>
        <section>
          <h2 className="display">{title}</h2>
          <h3 className="display">{tagline}</h3>
        </section>
      </SectionWrapperHero>

      <SectionWrapperAbout>
        <section className="homepage section-about">
          <div style={{ maxWidth: rhythm(24) }}>
            <h2>Hi there, I'm Mark. Great to meet you!</h2>
            <p>
              Like never before, we are able to connect and collaborate with
              just about anyone at speeds and in ways that haven't exisited
              until relatively recently. Access to information and opportunity
              is almost ubiquitous. Since the COVID-19 outbreak, the internet
              has become even more important for many people in most facets of
              their lives.
            </p>
            <p>
              With almost two decades of experience in a variety of roles, I
              enjoy designing, building and optimising web applications using
              the latest product design and development practices, working
              closely with customers, stakeholders and teams.
            </p>
            <p>
              My goal is to become a full-stack web specialist, combining my
              product design and management skills with the ability to rapidly
              build and test modern web solutions using technologies like:
            </p>

            <HorizontalList>
              <li>HTML</li>
              <li>(S)CSS</li>
              <li>Javascript (ES6+)</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>
                <abbr title="Server-side Rendering">SSR</abbr>
                &nbsp;&amp;&nbsp;
                <abbr title="Static Site Generation">SSG</abbr>
              </li>
              <li>Gatsby</li>
            </HorizontalList>
          
            <h3>Process</h3>
            <p>
              Years of trial and error have taught me to start small, understand
              the problem fully, assess viable available solutions against
              competing constraints, and to optimise based on incremental
              learning over time.
            </p>
          </div>

          <ul className="section-about__list">
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-search">
                  <use xlinkHref={aboutIcons + "#icon-search"}></use>
                </svg>
              </div>

              <h4>Research</h4>
              <p>
                Identify and quantify customer/business needs, opportunities or
                risks.
              </p>
              <List>
                <li>Market</li>
                <li>Competitor</li>
                <li>Customer</li>
              </List>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-quill">
                  <use xlinkHref={aboutIcons + "#icon-quill"}></use>
                </svg>
              </div>

              <h4>Design</h4>
              <p>
                Qualify customer goals. Test potential solutions through rapid
                prototyping.
              </p>
              <List>
                <li>Customer discovery</li>
                <li>Protoyping</li>
                <li>User testing</li>
              </List>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-embed2">
                  <use xlinkHref={aboutIcons + "#icon-embed2"}></use>
                </svg>
              </div>

              <h4>Build</h4>
              <p>
                Build{" "}
                <abbr title="Minimum Viable Product experiment">MVPe</abbr>,
                balancing short-term effort against long-term ownership.
              </p>
              <List>
                <li>Architecture</li>
                <li>Build &amp; test</li>
                <li>Deployment</li>
              </List>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="icon icon-rocket">
                  <use xlinkHref={aboutIcons + "#icon-rocket"}></use>
                </svg>
              </div>

              <h4>Launch</h4>
              <p>
                Progressively test and refine the solution to optimise for
                scale.
              </p>
              <List>
                <li>Analytics</li>
                <li>Content management</li>
                <li>Optimisation</li>
              </List>
            </li>
          </ul>

          <div style={{ maxWidth: rhythm(24) }}>
            <h3>Working Principles</h3>
            <p>
              A well-founded frame of reference, based on first principles helps
              to define what's important and why, in priority order. It helps
              teams and stakeholders to do their best work. A web experience
              should be fast, realiable and easy-to-use.
            </p>
          </div>

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
            <Button to="/about" title="about me">
              More about me &rarr;
            </Button>
          </p>
        </section>
      </SectionWrapperAbout>

      <SectionHighlight>
        <FeaturedProjects />
      </SectionHighlight>

      <SectionWrapper>
        <FeaturedPosts />
      </SectionWrapper>
    </Layout>
  )
}
