import styled from 'styled-components';

const ContactWrapper = styled.form`
  margin: 0 7vw 4vh;
  border: 1px solid #C6CACA;
  padding: 5vh 10px 5vh 20px;
  border-radius: 10px;

  .button {
    cursor: pointer;
    background-color: #007C8A;
    border: 2px solid #007C8A;
    color: #fff;
    padding: 10px 40px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .title {
    display: none;
  }

  .field {
    flex: 1;
    display: flex;
  }

  label {
    flex-grow: 0;
    margin-right: 10px;
  }

  textarea,
  input {
    flex-grow: 1;
    margin-right: 10px;
    border: 2px solid #000;
    border-radius: 4px;
    padding: 5px;
  }
`;

export default ContactWrapper;
