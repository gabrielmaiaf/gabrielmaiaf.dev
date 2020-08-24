import React, { useState } from 'react';

import ContactWrapper from './styles';

function ContactForm () {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: any) => {
    fetch('/', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        "name": name,
        "email": email,
        "bot-field": botField,
        "message": message,
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  return (
    <ContactWrapper
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      name="contact"
    >
      <p className="title">
        <label>
          Title: <input type="text" name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} />
        </label>
      </p>
      <div
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <p className="field">
          <label>
            Name: 
          </label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </p>
        <p className="field">
          <label>
            E-mail:
          </label>
          <input type="email" name="email" value={email} onChange={e => setMail(e.target.value)} />
        </p>
      </div>
      <p className="field">
        <label>
          Message:
        </label>
        <textarea
          name="message" value={message} onChange={e => setMessage(e.target.value)} rows={5}
        />
      </p>
      <p>
        <button className="button" type="submit">
          Send
        </button>
      </p>
    </ContactWrapper>
  );
}

export default ContactForm;