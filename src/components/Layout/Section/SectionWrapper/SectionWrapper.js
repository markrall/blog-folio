import React from 'react';

import styles from './SectionWrapper.module.css';

const SectionWrapper = props => (
  <div className={styles.SectionWrapper}>{props.children}</div>
);

export default SectionWrapper;
