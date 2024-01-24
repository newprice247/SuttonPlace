// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm(`${process.env.REACT_APP_FORMSPREE}`);
  if (state.succeeded) {
    return <p>Email Sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Send Me an Email!</p>
      <label htmlFor="email">
        Your Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className='form-control'
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label 
      htmlFor="message"
      className='mt-3'
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='form-control'
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className='btn btn-dark btn-block mt-3'
      >
        Submit
      </button>
    </form>
  );
}
