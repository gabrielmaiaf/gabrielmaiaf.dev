import React, { useState } from 'react';

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
    <form
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <p>
        <label>
          Título: <input type="text" name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          E-mail: <input type="email" name="email" value={email} onChange={e => setMail(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}

export default ContactForm;
