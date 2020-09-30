import React from 'react'

import styles from './Socials.module.css'
import { icoLinkedIn, icoGitHub, icoCodePen, icoTwitter, icoInstagram } from '../UI/Icons/Icons';

const Socials = ({props}) => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.socialItem}>
        <a href="https://www.linkedin.com/in/markrall/">
          {icoLinkedIn}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="http://github.com/markrall">
          {icoGitHub}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://codepen.io/productbymark/">
          {icoCodePen}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://twitter.com/productbymark">
          {icoTwitter}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://www.instagram.com/productbymark/">
          {icoInstagram}
        </a>
      </li>
    </ul>
  )
}

export default Socials