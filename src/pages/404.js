import React from "react"

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"

import SectionWrapper from "../components/Layout/Section/SectionWrapper/SectionWrapper"

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
