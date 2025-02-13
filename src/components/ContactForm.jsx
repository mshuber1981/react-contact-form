import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Alert, Button, Form, Spinner } from "react-bootstrap";

// #region styled-components
const StyledForm = styled.div`
  .form-control {
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(var(--bs-body-color-rgb), 0.03)"
        : "var(--bs-gray-dark)"};
  }
`;
// #endregion

// #region component
const propTypes = {
  apiUrl: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

const ContactForm = ({ apiUrl, theme }) => {
  const [isValidated, setIsValidated] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [danger, setDanger] = React.useState(false);
  const [dangerMessage, setDangerMessage] = React.useState(null);

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setSuccess(false);
    setDanger(false);
    setDangerMessage(null);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsValidated(true);
    const { name, email, message } = form.elements;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    if (form.checkValidity()) {
      event.preventDefault();
      event.persist();
      setIsProcessing(true);
      try {
        const response = await postData(apiUrl, data);
        // console.log(response);
        if (!response.ok) {
          throw new Error(`${response.type}: ${response.statusText}`);
        }
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setSuccess(true);
      } catch (error) {
        // console.log(error);
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setDangerMessage(
          `${error.message}: check your VITE_APP_API_Gateway_URL variable in local .env file...`
        );
        setDanger(true);
      }
    }
  };

  return (
    <StyledForm>
      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
        <Form.Group className="mx-auto mb-3 form-group" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Your name" />
          <Form.Control.Feedback type="invalid">
            <h5>Name must be at least one character.</h5>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mx-auto mb-3 form-group" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            placeholder="someone@something.com"
          />
          <Form.Control.Feedback type="invalid">
            <h5>Please enter a valid email.</h5>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mx-auto mb-3 form-group" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" placeholder="Your message..." />
          <Form.Control.Feedback type="invalid">
            <h5>Please provide a valid message.</h5>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mx-auto text-center form-group">
          {apiUrl && (
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              type="submit"
              disabled={isProcessing}
              className="my-4"
            >
              Submit{" "}
              {isProcessing && (
                <Spinner animation="border" variant="success" size="sm" />
              )}
            </Button>
          )}
          <Alert
            show={success}
            variant="success"
            onClose={() => setSuccess(false)}
            dismissible
          >
            <Alert.Heading>Success! I will contact you soon.</Alert.Heading>
          </Alert>
          <Alert
            show={danger}
            variant="danger"
            onClose={() => setDanger(false)}
            dismissible
          >
            <Alert.Heading>{dangerMessage}</Alert.Heading>
          </Alert>
          <Alert show={!apiUrl} variant="danger">
            <Alert.Heading>
              You must provide a valid API endpoint URL.
            </Alert.Heading>
          </Alert>
        </Form.Group>
      </Form>
    </StyledForm>
  );
};

ContactForm.propTypes = propTypes;
// #endregion

export default ContactForm;
