import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import '../../assets/styles/global-styles.css';
import styles from './Layout.module.css';

const Layout = ({ location, title, children }) => {
  return (
    <div className={styles.Container}>
      <Header title={title} location={location} />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
