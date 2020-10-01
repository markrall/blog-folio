import React from 'react';

import Socials from '../../Socials/Socials';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Copyright}>© {new Date().getFullYear()} markrall.dev</p>
      <Socials />
    </footer>
  )
}

export default Footer
