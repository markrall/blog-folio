import React from 'react';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/Layout/Layout';

import SectionWrapper from '../components/Layout/Section/SectionWrapper/SectionWrapper';

import ContactForm from '../components/ContactForm/ContactForm';

const Contact = props => {
  const { title } = useSiteMetadata()

  return (
    <Layout title={title}>
      <SectionWrapper>
        <section>
          <h3>Lets get in touch!</h3>
          <ContactForm />
        </section>
      </SectionWrapper>
    </Layout>
  )
}

export default Contact
