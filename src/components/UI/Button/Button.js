import React from 'react';
import { Link } from 'gatsby';

import styles from './Button.module.css';

const Button = ( props ) => {
  let button, customStyles;
  
  if (props.class) { 
    customStyles = { display: "block", margin: ".5rem auto 3rem auto" }
  }
  
  button = props.to ? (
    <Link
      className={styles.Button}
      target={props.target ? props.target : "_self"}
      title={props.title ? props.title : props.children}
      to={props.to}
      style={customStyles}
    >
      {props.children}
    </Link>
  ) : (
    <button
      className={styles.Button}
      type={props.type ? props.type : null}
    >
      {props.children}
    </button>
  )

  return button
};

export default Button;

// elem: link or button
// type: none, submit, cancel
// style