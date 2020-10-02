import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import SocialIcons from './SocialIcons';
import styles from './Socials.module.css';

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
  `)

  const socialSites = [
    {
      shortname: "linkedin",
      url: "linkedin.com/in"
    },
    {
      shortname: "github",
      url: "github.com"
    },
    {
      shortname: "codepen",
      url: "codepen.io"
    },
    {
      shortname: "twitter",
      url: "twitter.com"
    },
    {
      shortname: "instagram",
      url: "instagram.com"
    },
    {
      shortname: "stackoverflow",
      url: "stackoverflow.com/users"
    },
  ];

  const { social } = data.site.siteMetadata.author
  const socialAccounts = Object.keys(social)

  const socialsList = socialSites.map(site => {
    let listItem = null

    socialAccounts.forEach(handle => {
      if (site.shortname === handle) {
        listItem = (
          <li key={handle + social[handle]} className={styles.socialItem}>
            <a
              href={`https://${site.url}/${social[handle]}`}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcons site={handle} />
            </a>
          </li>
        )
      }
    })

    return listItem
  })

  return <ul className={styles.Socials}>{socialsList}</ul>
}

export default Socials