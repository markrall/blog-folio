import React from 'react';

import styles from './Card.module.css';

const Card = props => (
  <div className={styles.Card}>
    <div className={styles.icon}>{props.icon}</div>
    <h4>{props.title}</h4>
    {props.children}
  </div>
)

export default Card;
