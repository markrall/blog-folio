import React from "react"

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const SectionWrapper = styled.div`
  background-color: ${props =>
    props.primary ? "var(--color-light)" : "var(--color-dark)"};
  color: ${props => (props.primary ? "var(--color-light)" : "var(--color)")};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => (props.fullHeight ? "90vh" : "50vh")};

  & > section {
    max-width: ${rhythm(24)};
    padding: ${rhythm(0.5)} ${rhythm(0.25)};
  }
`

const NotFoundPage = ({ location }) => {
  const { title } = useSiteMetadata();

  return (
    <Layout location={location} title={title}>
      <SEO title="404: Not Found" />
      <SectionWrapper>
        <section>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </section>
      </SectionWrapper>
    </Layout>
  )
}

export default NotFoundPage
