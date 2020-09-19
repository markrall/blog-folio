import React, { useState, useEffect } from "react"
import axios from "axios"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"
import styled from 'styled-components'
import { SectionWrapper } from '../components/global-styles'

import Socials from '../components/socials'

const ContactFormStyles = styled.div``

const FormGroup = styled.div`
  margin: ${rhythm(.5)} 0;
`

const Label = styled.label`
  color: darken(var(--color), 50%);
  font-family: inherit;
  font-size: inherit;
`

const TextInput = styled.input`
  border: 1px solid #333;
  border-bottom: 3px solid transparent;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  padding: ${rhythm(0.5)};
  outline: none;
  width: 100%;

  &:focus:invalid {
    border-bottom: 3px solid rgba(228, 17, 42, 1);
  }

  &:focus:valid {
    border-bottom: 3px solid rgba(63, 162, 84, 1);
  }
`

const TextArea = styled.textarea`
  border: 1px solid #333;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  padding: ${rhythm(0.5)};
  outline: none;
  width: 100%;
`

const FormMsg = styled.p`
  border: 1px solid transparent;
  border-radius: 3px;
  margin-top: ${rhythm(1.5)};
  padding: ${rhythm(0.5)} ${rhythm(1)};

  &.errorMsg {
    background-color: var(--color-accent-6);
    border-color: rgba(228, 17, 42, 1);
    color: var(--color);
  }

  &.successMsg {
    background-color: var(--color-accent-7);
    border-color: rgba(63, 162, 84, 1);
    color: var(--color);
  }
`

const Contact = ({ location }) => {
  const { title } = useSiteMetadata()

  const inputElementRef = React.createRef();

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

  useEffect(() => {
    inputElementRef.current.focus()
  }, [inputElementRef])

  return (
    <Layout location={location} title={title}>
      <SectionWrapper>
        <section>
          <h3>Lets get in touch!</h3>
          <ContactFormStyles>
            <form onSubmit={handleOnSubmit} autoComplete="off">
              <FormGroup className="form__group">
                <Label htmlFor="exampleInputName">
                  Name
                  <TextInput
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your name"
                    required="required"
                    ref={inputElementRef}
                  />
                </Label>
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="exampleInputEmail1" required="required">
                  Email address
                  <TextInput
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required="required"
                  />
                </Label>
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="textArea">
                  Message
                  <TextArea
                    className="form-control"
                    id="textArea"
                    name="message"
                    required="required"
                    cols="50"
                    rows="4"
                    defaultValue="Message..."
                  ></TextArea>
                </Label>
              </FormGroup>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={serverState.submitting}
              >
                Submit
              </button>
              {serverState.status && (
                <FormMsg
                  className={!serverState.status.ok ? "errorMsg" : "successMsg"}
                >
                  {serverState.status.msg}
                </FormMsg>
              )}
            </form>
          </ContactFormStyles>
        </section>
        <section>
          <Socials />
        </section>
      </SectionWrapper>
    </Layout>
  )
}

export default Contact
