import React, { useState, ReactElement, FormEvent } from 'react';

import { encodeDataNetlify } from '../../helpers/string-helper';

import ContactWrapper from './styles';

interface ContactFormProps {
  fields: {
    title: string;
    name: string;
    email: string;
    message: string;
    button: string;
  };
}

function ContactForm({ fields }: ContactFormProps): ReactElement {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');

  const handleSubmit = (e: FormEvent) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeDataNetlify({
        'form-name': 'contact',
        name,
        email,
        'bot-field': botField,
        message,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <ContactWrapper
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
      name="contact"
    >
      <p className="title">
        <label htmlFor="title-field">
          {`${fields.title}: `}
          <input
            id="title-field"
            type="text"
            name="bot-field"
            placeholder={fields.title}
            value={botField}
            onChange={e => setBotField(e.target.value)}
          />
        </label>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p className="field">
          <label htmlFor="name-field">
            {`${fields.name}: `}
            <input
              id="name-field"
              type="text"
              name="name"
              placeholder={fields.name}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </p>
        <p className="field">
          <label htmlFor="email">
            {`${fields.email}: `}
            <input
              id="email"
              type="email"
              name="email"
              placeholder={fields.email}
              value={email}
              onChange={e => setMail(e.target.value)}
            />
          </label>
        </p>
      </div>
      <p className="field">
        <label htmlFor="talktome">
          {`${fields.message}: `}
          <textarea
            id="talktome"
            name="message"
            placeholder={fields.message}
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={5}
          />
        </label>
      </p>
      <div data-netlify-recaptcha="true" />
      <p>
        <button className="button" type="submit">
          {fields.button}
        </button>
      </p>
    </ContactWrapper>
  );
}

export default ContactForm;
