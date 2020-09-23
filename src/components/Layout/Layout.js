import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import { GlobalStyles, Container, Main } from "../global-styles"

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header title={title} location={location} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout
