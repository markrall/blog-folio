import React from 'react';
import styles from './HorizontalList.module.css';

const HorizontalList = ( props ) => (
  <ul className={styles.HorizontalList}>{props.children}</ul>
)

export default HorizontalList;