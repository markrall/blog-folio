import React, { useState } from "react"
import axios from "axios"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"

import { SectionWrapper } from '../components/global-styles'

const Contact = ({ location }) => {
  const { title } = useSiteMetadata()

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
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Layout location={location} title={title}>
      <SectionWrapper>
        <section>
          <ul>
            <li>contact form</li>
            <li>
              other ways to contact you (eg. socials, online phone number for
              privacy
            </li>
          </ul>
          <h3>Getform.io Gatsby Form Example</h3>
          <form onSubmit={handleOnSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="exampleInputName">
                Name
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Enter your name"
                  required="required"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" required="required">
                Email address
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="textArea">
                Message
                <textarea
                  className="form-control"
                  id="textArea"
                  name="message"
                  required="required"
                  cols="50"
                  rows="4"
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={serverState.submitting}
            >
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </section>
        <section>
          <h3>Socials</h3>
        </section>
      </SectionWrapper>
    </Layout>
  )
}

export default Contact
