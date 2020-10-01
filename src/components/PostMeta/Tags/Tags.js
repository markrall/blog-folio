import React from 'react';
import { Link } from "gatsby"

import styles from './Tags.module.css';

const Tags = props => (
  <ul className={styles.Tags}>
    {props.tags.map(tag => {
      return (
        <li key={tag}>
          <small>
            <Link
              key={tag}
              to={`/tags/${tag.toLowerCase()}/`}
            >
              {tag}
            </Link>
          </small>
        </li>
      )
    })}
  </ul>
)

export default Tags;
