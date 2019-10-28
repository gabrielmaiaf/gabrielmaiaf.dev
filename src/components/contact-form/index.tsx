import React, { ReactNode, useState } from 'react';

import { withTranslation } from '../../helpers/i18n';

// @ts-ignore
import StyleContact from './style.scss';

type Props = {
  t: (translationKey: string) => ReactNode;
}

function ContactForm (props: Props) {
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
      className={StyleContact.formContainer}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      name="contact"
    >
      <p className={StyleContact.title}>
        <label>
          {props.t('fields.title')}: <input type="text" name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} />
        </label>
      </p>
      <div
        className={StyleContact.fieldWrapper}
      >
        <p
          className={StyleContact.field}
        >
          <label>
            {props.t('fields.name')}: 
          </label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </p>
        <p
          className={StyleContact.field}
        >
          <label>
            {props.t('fields.mail')}:
          </label>
          <input type="email" name="email" value={email} onChange={e => setMail(e.target.value)} />
        </p>
      </div>
      <p
        className={StyleContact.field}
      >
        <label>
          {props.t('fields.message')}:
        </label>
        <textarea
          name="message" value={message} onChange={e => setMessage(e.target.value)} rows={5}
        />
      </p>
      <p>
        <button type="submit">{props.t('fields.button')}</button>
      </p>
    </form>
  );
}

export default withTranslation('contact')(ContactForm);
