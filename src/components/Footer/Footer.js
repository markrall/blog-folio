import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <p>© {new Date().getFullYear()} markrall.dev</p>
    </footer>
  )
}

export default Footer
