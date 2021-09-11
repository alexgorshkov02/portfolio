import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Form, Segment } from "semantic-ui-react";
import "./index.css";

function Contact() {
  const [state, handleSubmit] = useForm("myyllboz");
  if (state.succeeded) {
    return <p>Thanks for submitting!</p>;
  }

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
            name="Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </Form.Field>

        <Form.Field>
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            id="email"
            type="email"
            name="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Form.Field>

        <Form.TextArea
          label="Message"
          placeholder="Message"
          id="message"
          name="Message"
          required
        ></Form.TextArea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}

export default Contact;
