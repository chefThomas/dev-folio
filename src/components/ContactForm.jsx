import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Styles from "../mui-style-override/styles";

import theme from "../mui-style-override/theme";
import { ThemeProvider } from "@material-ui/styles";

import emailValidator from "../helpers/emailValidator";

const ContactForm = ({ postMessage }) => {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = () => {
    // reset error state
    setEmailError(false);

    // validate email
    const emailValid = emailValidator.test(email);
    // validate password

    //validate passworids match

    if (emailValid) {
      console.log("valid entries");
      const body = {
        name,
        company,
        email,
        message,
      };
      postMessage(body);
    } else {
      if (!emailValid) {
        setEmailError(true);
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    // <div className='ContactForm'>
    <form className='ContactForm'>
      <div className='ContactForm__fields-container'>
        <div className='ContactForm__field-group-1'>
          <ThemeProvider theme={theme}>
            <TextField
              required
              style={Styles.form.textfield}
              size='small'
              value={name}
              onChange={handleNameChange}
              variant='outlined'
              label='Name'
              // color='primary'
              error={emailError || null}
            />
            <TextField
              style={Styles.form.textfield}
              size='small'
              value={company}
              onChange={handleCompanyChange}
              variant='outlined'
              label='Company'
            />
            <TextField
              required
              style={Styles.form.textfield}
              size='small'
              value={email}
              onChange={handleEmailChange}
              variant='outlined'
              label='Email'
              color='primary'
              error={emailError || null}
              helperText={emailError ? "Invalid email" : ""}
            />
          </ThemeProvider>
        </div>
        <div className='ContactForm__field-group-2'>
          <TextField
            required
            variant='outlined'
            size='small'
            onChange={handleMessageChange}
            style={{ ...Styles.form.textfield, width: "100%" }}
            value={message}
            label='Message'
            color='primary'
            error={messageError || null}
            helperText={messageError ? "Don't be shy" : ""}
            multiline
            rows={9}
          />
        </div>
      </div>

      <div className='ContactForm__button-container'>
        <Button
          style={{ ...Styles.button.primary, marginBottom: "2rem" }}
          onClick={handleSubmit}
        >
          SEND
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
