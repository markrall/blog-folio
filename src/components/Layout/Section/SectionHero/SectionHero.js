import React from 'react';

import styles from './SectionHero.module.css';

const SectionHero = props => (
  <div className={styles.SectionHero}>
    {props.children}
  </div>
)

export default SectionHero;
