import React from 'react';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';

import SectionWrapper from '../components/Layout/Section/SectionWrapper/SectionWrapper';
import SectionHero from '../components/Layout/Section/SectionHero/SectionHero';
import SectionHighlight from "../components/Layout/Section/SectionHighlight/SectioHightlight"
import FeatureProjects from '../components/Feature/FeatureProjects/FeatureProjects';
import FeaturePosts from '../components/Feature/FeaturePosts/FeaturePosts';
import Card from "../components/UI/Card/Card"
import List from '../components/UI/List/List';
import HorizontalList from '../components/UI/List/HorizontalList/HorizontalList';
import Button from '../components/UI/Button/Button';

export default ({ location }) => {
  const { title, tagline } = useSiteMetadata();

  return (
    <Layout location={location} title={title}>
      <SEO title="Home" />

      <SectionHero>
        <section>
          <h2 className="display">{title}</h2>
          <h3 className="display secondary">{tagline}</h3>
        </section>
      </SectionHero>

      <SectionWrapper>
        <section>
          <h2>Hi there, I'm Mark. Great to meet you!</h2>
          <p>
            Like never before, we are able to connect and collaborate with just
            about anyone at speeds and in ways that haven't exisited until
            relatively recently. Access to information and opportunity is
            ubiquitous. Since the COVID-19 outbreak, the internet has become
            even more important for many people in most facets of their lives.
          </p>
          <p>
            With almost two decades of experience in a variety of roles, I enjoy
            working closely with customers, stakeholders and teams to design,
            build and optimise web applications using the latest product
            design and development practices.
          </p>
          <p>
            My goal is to become a full-stack web specialist, combining my
            product design and management skills with the ability to rapidly
            build and scale modern web solutions using technologies like:
          </p>

          <HorizontalList>
            <li>HTML</li>
            <li>(S)CSS</li>
            <li>Javascript (ES6+)</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>
              <abbr title="Server-side Rendering">SSR</abbr> &amp;{" "}
              <abbr title="Static Site Generation">SSG</abbr>
            </li>
            <li>Gatsby</li>
          </HorizontalList>

          <h3>Process</h3>
          <p>
            Years of trial and error have taught me to start small, understand
            the problem, assess available solutions against
            competing constraints, and to optimise based on incremental learning
            over time. My process follows to broad stages.
          </p>

          <div className="cardGroup">
            <Card title="Research &amp; Design" icon="quill">
              <p>Identify and quantify needs. Qualify and test solutions.</p>
              <List>
                <li>Market, competitor research</li>
                <li>Customer discovery</li>
                <li>Protoyping & user testing</li>
              </List>
            </Card>

            <Card title="Build & Launch" icon="embed">
              <p>
                Build a <abbr title="Minimum Viable Product experiment">MVPe</abbr>.
                Progressively test and refine for scale.
              </p>
              <List>
                <li>Architecture &amp; build</li>
                <li>Test &amp; deployment</li>
                <li>Analyse &amp; optimise</li>
              </List>
            </Card>
          </div>

          <h3>Working Principles</h3>
          <p>
            A well-founded frame of reference, based on first principles helps
            to define what's important, why and in priority order. It helps
            teams and stakeholders to do their best work. A web experience
            should be fast, realiable and easy-to-use.
          </p>

          <div className="cardGroup">
            <Card title="Fast" icon="meter">
              <p>
                Fast load times and interactivity are my highest priority.
              </p>
            </Card>
            <Card title="Responsive" icon="enlarge">
              <p>Layouts are designed to work on any device, big or small.</p>
            </Card>
            <Card title="Intuitive" icon="happy">
              <p>Easy to use and intuitive UI that satisfies the customer goal.</p>
            </Card>
            <Card title="Dynamic" icon="power">
              <p>
                Dynamic UI, content and statement management brings the experience to life.
              </p>
            </Card>
          </div>
          <Button to="/contact" title="contact" class="cta">
            Find out more &rarr;
          </Button>
        </section>
      </SectionWrapper>

      <SectionHighlight>
        <FeatureProjects />
      </SectionHighlight>

      <SectionWrapper>
        <FeaturePosts />
      </SectionWrapper>
    </Layout>
  )
};
