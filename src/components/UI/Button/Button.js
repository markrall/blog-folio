import React from 'react';
import { Link } from 'gatsby';

import styles from './Button.module.css';

const Button = ( props ) => {
  let button;
  button =
    props.elem === "link" ? (
      <Link
        className={styles.btn}
        target={props.target ? props.target : "_self"}
        title={props.title ? props.title : props.children}
        to={props.to}
      >
        {props.children}
      </Link>
    ) : (
      <button className={styles.btn} type={props.type ? props.type : null}>
        {props.children}
      </button>
    )

  return button
};

export default Button;

// elem: link or button
// type: none, submit, cancel
// style