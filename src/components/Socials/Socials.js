import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Socials.module.css'
import { icoLinkedIn, icoGitHub, icoCodePen, icoTwitter, icoInstagram } from '../UI/Icons/Icons';

const Socials = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            social {
              twitter
              linkedin
              github
              codepen
              instagram
            }
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata.author;
  
  return (
    <ul className={styles.Socials}>
      <li className={styles.socialItem}>
        <a href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer">
          {icoLinkedIn}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href={`http://github.com/${social.github}`} target="_blank" rel="noreferrer">
          {icoGitHub}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href={`https://codepen.io/${social.codepen}`} target="_blank" rel="noreferrer">
          {icoCodePen}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer">
          {icoTwitter}
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href={`https://www.instagram.com/${social.instagram}`} target="_blank" rel="noreferrer">
          {icoInstagram}
        </a>
      </li>
    </ul>
  )
}

export default Socials