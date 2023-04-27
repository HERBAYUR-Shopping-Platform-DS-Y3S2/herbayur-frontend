import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "./header";
import Footer from "./Footer";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
    console.log("ID:", id);

    axios
      .post("http://localhost:5003/api/user/save", {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="register-form">
        <h2 style={{ margin: "20px" }}>Register</h2>
        <Form onSubmit={handleSubmit} style={{ margin: "20px" }}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
