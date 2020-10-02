import React from 'react';

import Icons from '../Icons/Icons';
import styles from './Card.module.css';

const Card = props => (
  <div className={styles.Card}>
    <div className={styles.icon}><Icons label={props.icon} /></div>
    <h4>{props.title}</h4>
    {props.children}
  </div>
)

export default Card;
