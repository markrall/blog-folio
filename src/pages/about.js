import React from "react"
import { Link } from 'gatsby';

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"

import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import FeaturedProjects from "../components/featured-projects"
import FeaturedPosts from "../components/featured-posts"
import { SectionWrapper } from "../components/global-styles"
import List from '../components/UI/List/List';

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
          <h1>About</h1>

          <p>Hi there! I&#8217;m Mark. </p>

          <p>
            I have had a long-term passion for the Internet and the
            opportunities it provides. Over the past two decades I&#8217;ve
            worked in a variety of roles, organisations and on a variety of web
            projects.
          </p>

          <p>
            Early days I worked worked for companies like BT Financial Group,
            Trading Post and REA Group as a front end developer and designer.
            Over time, I had the fortune to work my way up through team lead,
            agile delivery and management roles. Recently I&#8217;ve tried my
            hand at consulting and most recently Product Management.
          </p>

          <p>
            I believe in pursuing passion and that results naturally follow.
            I&#8217;ve experienced in myself and in others I&#8217;ve had the
            pleasure to work with. Consistently throughout my career, I&#8217;ve
            experienced a nostalgia for the early days when I was learning
            exciting technologies, solving problems and crafting products.{" "}
          </p>

          <blockquote>
            <p>
              I most like working with, and learning about, people and software
              to build web products.
            </p>
          </blockquote>

          <p>
            <em>
              "It seems a little weird that you're going back to where you
              started Mark"
            </em>
            , I hear you say. Absolutely! Having a passion for what I do is
            very, VERY important to me.{" "}
            <em>
              Plus, having the background I do, only makes me a more valuable
              asset.
            </em>{" "}
            My only regret is that I didn't recognise or make the move sooner.
          </p>

          <p>
            I&#8217;m committed to the craft that ignited that passion so many
            years ago. The COVID&#8211;19 pandemic has reignited and provided
            the vehicle for me to do so. My goal is to become a full stack
            JavaScript (JS) developer, building web products using modern
            popular technologies.
          </p>

          <p>
            Interested to find out more?
            <Link to="/contact" className="btn" style={{ margin: '0 1rem'}} title="contact me">
              Get in touch!
            </Link>
          </p>
        </section>

        <section>
          <h2>Technologies I Use</h2>

          <List>
            <li>HTML &amp; (S)CSS (incl. flexbox, grid &amp; animation)</li>
            <li>JavaScript (ES6)</li>
            <li>ReactJS</li>
            <li>GasbyJS (this site is built on it)</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>REST APIs &amp; GraphQL (GatsbyJS)</li>
            <li>Jest</li>
            <li>NPM</li>
            <li>Git &amp; Github</li>
          </List>
        </section>

        <section>
          <h2>Experience</h2>

          <p>
            I&#8217;ve worked on a wide variety of projects from migrations, web
            media site and products, transactional SPAs and native apps. Roles
            I&#8217;ve filled include:{" "}
          </p>

          <List>
            <li>Product management</li>
            <li>Consulting</li>
            <li>Agile project management</li>
            <li>Team management</li>
            <li>Senior leaderhsip</li>
            <li>Web design &amp; development</li>
          </List>
        </section>

        <section>
          <h2>Education</h2>

          <List>
            <li>Various online programming courses below</li>
            <li>Product Management</li>
            <li>Various management &amp; leadership courses</li>
            <li>Bachelor of Information Technology (Multimedia)</li>
          </List>
        </section>

        <section>
          <h2>Learning Journey</h2>

          <p>
            Since leaving my last role, I&#8217;ve been reskilling myself on
            HTML, (S)CSS and vanilla JavaScript. Keen to learn as much as I can,
            I&#8217;ve also been studying and applying NodeJS, ReactJS and
            Gatsby. Below is a rough timeline of my journey so far:
          </p>

          <h3>AUGUST 2020</h3>

          <p>
            Completed the best selling{" "}
            <a href="https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8312924#overview">
              Advanced CSS and Sass: Flexbox, Grid, Animations and More!
            </a>{" "}
            by{" "}
            <a href="https://www.udemy.com/user/jonasschmedtmann/">
              Jonas Schmedtmann
            </a>{" "}
            including:
          </p>

          <ol>
            <li>
              Modern CSS techniques to create stunning designs and effects
            </li>
            <li>
              Advanced CSS animations with @keyframes, animation and transition
            </li>
            <li>
              CSS fundamentals including: cascade, specificity, inheritance
            </li>
            <li>
              CSS architecture: component-based design, BEM, writing reusable
              code, etc.
            </li>
            <li>Flexbox</li>
            <li>CSS Grid</li>
            <li>
              SASS including: global variables, architecting CSS, managing media
              queries
            </li>
            <li>
              Advanced responsive design: media queries, mobile-first vs
              desktop-first, <code>em</code> vs <code>rem</code> units
            </li>
            <li>Responsive images in HTML and CSS for faster pageloads</li>
            <li>SVG images and videos in HTML and CSS</li>
            <li>
              The NPM ecosystem: development workflows and building processes
              using hotloading, prefixing and file optimisation
            </li>
          </ol>

          <p>
            Started the best selling{" "}
            <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8138514#overview">
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </a>{" "}
            by{" "}
            <a href="https://www.udemy.com/user/academind/">
              Maximilian Schwarzmüller
            </a>{" "}
            including: - React Basics (Base features, syntax and concepts) -
            State management with class-based and functional components using
            React Hooks - Lists and conditional content - Styling options for
            React components - Deep dive on internals of React and advanced
            component features including state and lifecycle management -
            Integrating HTTP content from within React apps using AJAX
          </p>

          <h3>JULY 2020</h3>

          <p>
            Completed the best selling{" "}
            <a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13819540#overview">
              The Complete Node.js Developer Course (3rd Edition)
            </a>{" "}
            by <a href="https://www.udemy.com/user/andrewmead/">Andrew Mead</a>{" "}
            covering:{" "}
          </p>

          <ol>
            <li>Node.js</li>
            <li>Npm</li>
            <li>Asynchronous programming</li>
            <li>ES6/ES7</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Socket.IO</li>
            <li>JWT Authentication</li>
            <li>Mongoose</li>
            <li>File and image uploads</li>
            <li>Email sending</li>
            <li>Application deployment with Heroku</li>
            <li>Version control with Git</li>
            <li>GitHub</li>
            <li>REST API Design</li>
            <li>Code testing</li>
            <li>Debugging</li>
            <li>Jest</li>
          </ol>

          <p>
            Completed{" "}
            <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM">
              Gatsby JS - The Great Gatsby Bootcamp (Full Tutorial)
            </a>{" "}
            by{" "}
            <a href="https://www.youtube.com/channel/UCScXYvmDD7hyFVX6X5ZwE_Q">
              Andrew Mead
            </a>
          </p>

          <h3>JUNE 2020</h3>

          <p>
            Rediscovered HTML, CSS and JS using free platorms like
            <a href="https://freecodecamp.org/">freecodecamp.org</a>,{" "}
            <a href="https://www.codecademy.com/">codeacademy.com</a>,{" "}
            <a href="https://egghead.io/">egghead.io</a> and various popular
            blogs like W3School, Smashing Magazine and CSS Tricks
          </p>

          <h3>MAY 2020</h3>

          <p>
            After spending some time reflecting on what I&#8217;ve enjoyed about
            my career and brainstorming potential options, I: - Explored the job
            market for demand and options - Researched in demand roles, skills
            and experience - Selected full stack JS development using modern
            frameworks as my goal
          </p>
        </section>

        <section>
          <h3>What&#8217;s Next</h3>

          <List>
            <li>
              Complete{" "}
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8138514#overview">
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </a>{" "}
              including Redux, forms and validation, authentication, testing,
              deployment and Next.js
            </li>
            <li>
              Learn{" "}
              <a href="https://www.udemy.com/course/graphql-bootcamp/learn/lecture/11838166#overview">
                The Modern GraphQL Bootcamp (with Node.js and Apollo)
              </a>{" "}
              to extend my knowledge of GraphQL acquired while using Gatsby
              including: schemas, queries, subscriptions, Apollo, Prisma ORM,
              deployment, security, authentication and testing.
            </li>
            <li>
              Learn{" "}
              <a href="https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/learn/lecture/19974126#overview">
                Complete Next.js with React &amp; Node - Beautiful Portfolio App
              </a>{" "}
              to expand my knowledge of leading, React-based SSR and SSG
              frameworks
            </li>
          </List>
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

