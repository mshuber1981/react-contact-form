import React, { useState } from "react";
// https://react-bootstrap.github.io/components/forms/
import { Col, Form, Alert } from "react-bootstrap";
import Processing from "../components/Processing"

const Contact = ({apiUrl}) => {
  // Set initial states for the form
  const [validated, setValidated] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const postFormData = async (data) => {
    const response = await fetch(
      `${apiUrl}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    return response;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // Check to see if the form has been validated
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
    const name = event.target.elements.nameData.value;
    const email = event.target.elements.emailData.value;
    const message = event.target.elements.messageData.value;
    const data = {
      name: name,
      email: email,
      message: message,
    };

    if (form.checkValidity()) {
      event.preventDefault();
      event.persist();
      setProcessing(true);
      postFormData(data)
        .then(() => {
          // Reset processing (spinner)
          setProcessing(false);
          // Reset validation
          setValidated(false);
          // Reset the form inputs
          event.target.reset();
          // Success alert
          setShowSuccess(true);
        })
        .catch((error) => {
          console.log(error.message);
          setProcessing(false);
          setValidated(false);
          event.target.reset();
          // Error alert
          setShowError(true);
        });
    }
  };

  let button;

  if (processing) {
    button = <button type="submit" className="mt-3 btn btn-secondary btn-lg">Submit <Processing /></button>
  } else {
    button = <button type="submit" className="mt-3 btn btn-secondary btn-lg">Submit</button>
  }

  return (
    <section
      id="contact"
      className="d-flex flex-column min-vh-100 justify-content-center"
    >
      <div className="container text-center">
        <h2>Contact</h2>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Name */}
          <Form.Row className="justify-content-center mt-3">
            <Form.Group as={Col} md="9" controlId="nameData">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Name" />
              <Form.Control.Feedback type="invalid">
                <h5>Name must be at least one character.</h5>
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          {/* Email */}
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="9" controlId="emailData">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                placeholder="someone@example.com"
              />
              <Form.Control.Feedback type="invalid">
                <h5>Please enter a valid email.</h5>
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          {/* Message */}
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="9" controlId="messageData">
              <Form.Label>Message</Form.Label>
              <Form.Control required as="textarea" />
              <Form.Control.Feedback type="invalid">
                <h5>Please provide a valid message.</h5>
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          {/* Submit Button */}
          <Form.Row className="justify-content-center pb-5">
            {button}
          </Form.Row>

          {/* Success alert */}
          <Form.Row className="justify-content-center">
            <Alert
              show={showSuccess}
              variant="success"
              onClose={() => setShowSuccess(false)}
              dismissible
            >
              <Alert.Heading>Success! I will contact you soon.</Alert.Heading>
            </Alert>

            {/* Error alert */}
            <Alert
              show={showError}
              variant="danger"
              onClose={() => setShowError(false)}
              dismissible
            >
              <Alert.Heading>
                Sorry, something went wrong. Please try again later.
              </Alert.Heading>
            </Alert>
          </Form.Row>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
