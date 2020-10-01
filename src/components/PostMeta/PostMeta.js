import React from "react"

import Tags from './Tags/Tags';
import { icoGitHub, icoEarth } from "../UI/Icons/Icons";

import styles from "./PostMeta.module.css";

const PostMeta = props => {
  const { frontmatter, timeToRead } = props.postMetaData;
  
  return (
    <ul className={styles.PostMeta}>
      <li>
        <ul>
          <li className={styles.metaItem}>
            <small>{frontmatter.date}</small>
          </li>
          <li className={styles.metaItem}>
            <small>
              {timeToRead} {timeToRead === 1 ? "min" : "mins"} read
            </small>
          </li>
          <li className={styles.metaItem}>
            {!!frontmatter.repo ? (
              <small className={styles.metaIcon}>
                <a
                  href={frontmatter.repo}
                  title="Repo on Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icoGitHub}
                </a>
              </small>
            ) : null}

            {!!frontmatter.site ? (
              <small className={[styles.metaItem, styles.metaIcon].join(", ")}>
                <a
                  href={frontmatter.site}
                  title="Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icoEarth}
                </a>
              </small>
            ) : null}
          </li>
        </ul>
      </li>
      {!!frontmatter.tags ? (
        <li>
          <Tags tags={frontmatter.tags} />
        </li>
      ) : null}
    </ul>
  )
}

export default PostMeta
