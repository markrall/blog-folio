import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "../UI/Button/Button";

import styles from './ContactForm.module.css';

const ContactForm = props => {
  const inputElementRef = React.useRef(null)

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/ed0a0b04-c4a5-4f5b-b8b6-fecc6c041482",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Got it! I'll be in touch soon.", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  useEffect(() => {
    inputElementRef.current.focus()
  }, [inputElementRef])

  return (
    <div className={styles.ContactForm}>
      <form onSubmit={handleOnSubmit} autoComplete="off">
        {serverState.status && (
          <p className={[styles.formMsg, !serverState.status.ok ? styles.errorMsg : styles.successMsg].join(' ')}>
            {serverState.status.msg}
          </p>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputName" className={styles.formLabel}>
            Name
            <input
              type="text"
              name="name"
              className={styles.textInput}
              id="exampleInputName"
              placeholder="Enter your name"
              required="required"
              ref={inputElementRef}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputEmail1"  className={styles.formLabel} required="required">
            Email address
            <input
              type="email"
              name="email"
              className={styles.textInput}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required="required"
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="textArea" className={styles.formLabel}>
            Message
            <textarea
              className={styles.textArea}
              id="textArea"
              name="message"
              required="required"
              cols="50"
              rows="4"
            ></textarea>
          </label>
        </div>
        <Button
          type="submit"
          className="btn btn-primary"
          disabled={serverState.submitting}
        >
          Submit
        </Button>
      </form>
    </div>
  )
};
 export default ContactForm;