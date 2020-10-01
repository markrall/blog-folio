import React from 'react';

import styles from './SectionHighlight.module.css';

const SectionHighlight = props => (
  <div className={styles.SectionHighlight}>{props.children}</div>
);

export default SectionHighlight;
