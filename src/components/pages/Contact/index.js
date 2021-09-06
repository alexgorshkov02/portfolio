import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Form, Segment } from "semantic-ui-react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  const [state, handleSubmit] = useForm("myyllboz");
  if (state.succeeded) {
    return <p>Thanks for submitting!</p>;
  }

  const handleChange = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage("");
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Segment>
      <h1>Contact</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            id="email"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Form.Field>

        <Form.TextArea
          label="Message"
          placeholder="Message"
          id="message"
          name="message"
          value={message}
          onBlur={handleChange}
        >
          {/* <label>Message</label> */}
          {/* <input
        value="Message"
        id="message"
        name="message"
      /> */}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Form.TextArea>

        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}

export default Contact;
