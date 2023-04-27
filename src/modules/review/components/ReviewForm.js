import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setreview] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5009/api/review/save", {
        name:name,
        email:email,
        review:review
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="review">Review</Label>
        <Input
          type="textarea"
          name="review"
          id="review"
          placeholder="Enter your review"
          rows={5}
          value={review}
          onChange={(e) => setreview(e.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
