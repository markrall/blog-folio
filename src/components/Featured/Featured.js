import React from 'react';
import { Link } from 'gatsby';
import Image from "gatsby-image";

import PostMeta from '../PostMeta/PostMeta';

import styles from './Featured.module.css';

const Featured = props => (
  <ul className={styles.Featured}>
    {props.nodes.map(({ excerpt, frontmatter, fields, timeToRead }) => {
      const title = frontmatter.title || fields.slug
      return (
        <li key={fields.slug} className={styles.featuredItem}>
          <article>
            <header>
              {!!frontmatter.cover ? (
                <Link to={fields.slug}>
                  <Image
                    fluid={frontmatter.cover.childImageSharp.fluid}
                    alt={frontmatter.cover.name}
                  />
                </Link>
              ) : null}
              <h3 className={styles.featuredTitle}>
                <Link style={{ boxShadow: `none` }} to={fields.slug}>
                  {title}
                </Link>
              </h3>
              <PostMeta frontmatter={frontmatter} timeToRead={timeToRead} />
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: frontmatter.description || excerpt,
                }}
              />
            </section>
          </article>
        </li>
      )
    })}
  </ul>
)

export default Featured;
