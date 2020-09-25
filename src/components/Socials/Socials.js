import React from 'react'

import styles from './Socials.module.css'
import socialIcons from "../../../content/assets/svg/icon-sprite.svg"

const Socials = ({props}) => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.socialItem}>
        <a href="https://www.linkedin.com/in/markrall/">
          <svg className="icon icon-linkedin2">
            <use xlinkHref={socialIcons + "#icon-linkedin2"}></use>
          </svg>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="http://github.com/markrall">
          <svg className="icon icon-github">
            <use xlinkHref={socialIcons + "#icon-github"}></use>
          </svg>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://codepen.io/productbymark/">
          <svg className="icon icon-codepen">
            <use xlinkHref={socialIcons + "#icon-codepen"}></use>
          </svg>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://twitter.com/productbymark">
          <svg className="icon icon-twitter">
            <use xlinkHref={socialIcons + "#icon-twitter"}></use>
          </svg>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://www.instagram.com/productbymark/">
          <svg className="icon icon-instagram">
            <use xlinkHref={socialIcons + "#icon-instagram"}></use>
          </svg>
        </a>
      </li>
    </ul>
  )
}

export default Socials