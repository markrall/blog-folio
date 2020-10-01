import React from 'react';
import { Link } from 'gatsby';
import Image from "gatsby-image";

import PostMeta from '../PostMeta/PostMeta';

import styles from './Feature.module.css';

const Feature = props => (
  <ul className={styles.Feature}>
    {props.nodes.map(({ excerpt, frontmatter, fields, timeToRead }) => {
      const { title, cover, description } = frontmatter;

      return (
        <li key={fields.slug} className={styles.featureItem}>
          <article>
            <header>
              {!!cover ? (
                <Link to={fields.slug}>
                  <Image fluid={cover.childImageSharp.fluid} alt={cover.name} />
                </Link>
              ) : null}
              <h3 className={styles.featureTitle}>
                <Link to={fields.slug}>
                  {title}
                </Link>
              </h3>
              <PostMeta postMetaData={{ frontmatter, timeToRead }} />
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />
            </section>
          </article>
        </li>
      )
    })}
  </ul>
)

export default Feature;
