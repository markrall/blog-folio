import React from 'react';

import styles from './List.module.css';

const List = ( props ) => (
  <ul className={styles.List}>{props.children}</ul>
);

export default List;