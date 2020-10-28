import styled from 'styled-components';

const ContactWrapper = styled.form`
  margin: 0 7vw 4vh;
  border: 1px solid ${props => props.theme.postPhotoCaption};
  padding: 5vh 10px 5vh 20px;
  border-radius: 10px;

  .button {
    cursor: pointer;
    background-color: ${props => props.theme.buttonColor};
    border: 2px solid ${props => props.theme.buttonColor};
    color: ${props => props.theme.primary};
    font-weight: bold;
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
    color: ${props => props.theme.postPhotoCaption};
    display: flex;
    flex: 1;
  }

  textarea,
  input {
    color: ${props => props.theme.postPhotoCaption};
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 10px;
    border: 2px solid ${props => props.theme.postPhotoCaption};
    border-radius: 4px;
    padding: 5px;
    background-color: ${props => props.theme.background};
  }
`;

export default ContactWrapper;
