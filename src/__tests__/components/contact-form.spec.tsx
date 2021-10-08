import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ContactForm from '../../components/contact-form';

const mockedFields = {
  title: 'Title',
  name: 'Name',
  email: 'E-mail',
  message: 'Message',
  button: 'Send',
};

describe('Contact form', () => {
  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => jest.fn());
  });
  it('should be rendered properly', () => {
    const { getByPlaceholderText } = render(
      <ContactForm fields={mockedFields} />,
    );

    expect(getByPlaceholderText(mockedFields.title)).toBeTruthy();
  });

  it('should be able to send a message', async () => {
    const mockFetch = jest.fn().mockResolvedValue('ok');
    const { getByPlaceholderText, getByText } = render(
      <ContactForm fields={mockedFields} />,
    );

    window.fetch = mockFetch;

    const alertSuccess = jest.spyOn(window, 'alert');

    const titleField = getByPlaceholderText(mockedFields.title);
    const emailField = getByPlaceholderText(mockedFields.email);
    const nameField = getByPlaceholderText(mockedFields.name);
    const messageField = getByPlaceholderText(mockedFields.message);
    const buttonElement = getByText(mockedFields.button);

    fireEvent.change(titleField, { target: { value: 'Mock message' } });
    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@mail.com' } });
    fireEvent.change(messageField, { target: { value: 'Hello world' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(alertSuccess).toBeCalledWith('Success!');
    });
  });

  it('should return an error when sending a message', async () => {
    const mockFetch = jest.fn().mockRejectedValue('error');
    const { getByPlaceholderText, getByText } = render(
      <ContactForm fields={mockedFields} />,
    );

    window.fetch = mockFetch;

    const alertCall = jest.spyOn(window, 'alert');

    const titleField = getByPlaceholderText(mockedFields.title);
    const emailField = getByPlaceholderText(mockedFields.email);
    const nameField = getByPlaceholderText(mockedFields.name);
    const messageField = getByPlaceholderText(mockedFields.message);
    const buttonElement = getByText(mockedFields.button);

    fireEvent.change(titleField, { target: { value: 'Mock message' } });
    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@mail.com' } });
    fireEvent.change(messageField, { target: { value: 'Hello world' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(alertCall).toBeCalledWith('error');
    });
  });
});
