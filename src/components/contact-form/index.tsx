import React, { ReactNode, useState } from 'react';

// Helpers
import { withTranslation } from '../../helpers/i18n';

// Assets
// Because of a Next error, style is in a JS Object
// import StyleContact from './style.scss';

const StyleContact = {
  formContainer: {
    margin: '0 7vw 4vh',
    border: '1px solid #C6CACA',
    padding: '5vh 10px 5vh 20px',
    borderRadius: '10px',
  },  
  button: {
    cursor: 'pointer',
    backgroundColor: '#007C8A',
    border: '2px solid #007C8A',
    color: '#fff',
    padding: '10px 40px',
    borderRadius: '4px',
    marginTop: '20px',
  },
  title: {
    display: 'none',
  },
  field: {
    width: '100%',
    display: 'flex',
  },  
  label: {
    flexGrow: 0,
    marginRight: '10px',
  },
  input: {
    flexGrow: 1,
    marginRight: '10px',
    border: '2px solid #000',
    borderRadius: '4px',
    padding: '5px',
    // '& input, & textarea': {
    //   border: 2px solid $standard;
    //   borderRadius: 4px;
    //   padding: 5px;
    //   '&:focus, &:hover' {
    //     border: 2px solid $primaryBorder;
    //   }
  },
  
    
  
  // fieldWrapper: {
  // //   @include mobile {
  // //     flex-direction: column;
  // //   }
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   // flexDirection: "row",
  // },
  
};

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
      // className={StyleContact.formContainer}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      name="contact"
      style={StyleContact.formContainer}
    >
      <p style={StyleContact.title}>
        <label style={StyleContact.label}>
          {props.t('contact:fields.title')}: <input type="text" name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} />
        </label>
      </p>
      <div
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <p
          style={StyleContact.field}
        >
          <label style={StyleContact.label}>
            {props.t('contact:fields.name')}: 
          </label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} style={StyleContact.input}/>
        </p>
        <p
          style={StyleContact.field}
        >
          <label style={StyleContact.label}>
            {props.t('contact:fields.mail')}:
          </label>
          <input type="email" name="email" value={email} onChange={e => setMail(e.target.value)} style={StyleContact.input} />
        </p>
      </div>
      <p
        style={StyleContact.field}
      >
        <label style={StyleContact.label}>
          {props.t('contact:fields.message')}:
        </label>
        <textarea
          name="message" value={message} onChange={e => setMessage(e.target.value)} rows={5} style={StyleContact.input}
        />
      </p>
      <p>
        <button style={StyleContact.button} type="submit">{props.t('contact:fields.button')}</button>
      </p>
    </form>
  );
}

export default withTranslation('contact')(ContactForm);
